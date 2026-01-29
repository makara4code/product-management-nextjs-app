# CI/CD Documentation

This document explains the Continuous Integration (CI) workflow for the Product Management App.

## Overview

The CI pipeline runs on every push to `main` and on pull requests targeting `main`. It ensures code quality by running linting, type checking, and building the application.

## Workflow File

Location: `.github/workflows/ci.yml`

## Pipeline Steps

| Step | Command | Purpose |
|------|---------|---------|
| Checkout | `actions/checkout@v4` | Clone the repository |
| Setup Node.js | `actions/setup-node@v4` | Install Node.js from `.nvmrc` |
| Setup Bun | `oven-sh/setup-bun@v2` | Install Bun runtime |
| Cache Dependencies | `actions/cache@v4` | Restore cached `node_modules` |
| Cache Next.js Build | `actions/cache@v4` | Restore cached `.next/cache` |
| Install | `bun install --frozen-lockfile` | Install dependencies |
| Lint | `bun run lint` | Check code quality with Biome |
| Type Check | `bun run typecheck` | Verify TypeScript types |
| Build | `bun run build` | Create production build |

## Caching Strategy

The CI uses two separate caches to optimize build times:

### 1. Bun Dependencies Cache

```yaml
path: |
  ~/.bun/install/cache
  node_modules
key: ${{ runner.os }}-bun-${{ hashFiles('bun.lock') }}
```

- **What it caches**: Bun's global package cache and `node_modules`
- **Cache key**: Based on `bun.lock` hash
- **Invalidates when**: Dependencies change (lockfile updates)

### 2. Next.js Build Cache

```yaml
path: .next/cache
key: ${{ runner.os }}-nextjs-${{ hashFiles('bun.lock') }}-${{ hashFiles('src/**/*.[jt]s', 'src/**/*.[jt]sx') }}
```

- **What it caches**: Compiled pages, webpack cache, optimized images
- **Cache key**: Based on dependencies + source files
- **Invalidates when**: Dependencies or source code changes

### Cache Isolation

GitHub Actions caches are scoped by branch:

| Scenario | Cache Available |
|----------|-----------------|
| `main` branch | Only caches created on `main` |
| Feature branches | Can use `main` cache as fallback |
| PRs from forks | Isolated (security feature) |

This means the first CI run on `main` after a merge will have a cache miss, but subsequent runs will be fast.

## Concurrency

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

- Only one workflow runs per branch at a time
- New pushes cancel in-progress runs (saves CI minutes)

## Triggers

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

- **Push to main**: Runs after merging PRs or direct pushes
- **Pull requests**: Runs on PR creation and updates

## Required Checks

For branch protection, you can require these checks to pass before merging:

1. Go to **Settings** > **Branches** > **Branch protection rules**
2. Add rule for `main`
3. Enable **Require status checks to pass**
4. Select **Lint & Build** job

## Troubleshooting

### Cache Miss on Main

If you see "Cache not found" on `main` branch after merging:

- This is expected behavior (first run creates the cache)
- Subsequent runs will hit the cache

### Build Failures

1. **Lint errors**: Run `bun run lint:fix` locally
2. **Type errors**: Run `bun run typecheck` locally
3. **Build errors**: Run `bun run build` locally to reproduce

### Slow Builds

If builds are slow despite caching:

1. Check if cache is being restored (look for "Cache restored" in logs)
2. Verify `bun.lock` hasn't changed unexpectedly
3. Consider if source changes invalidated the Next.js cache

## Local Verification

Before pushing, verify your changes pass CI locally:

```bash
# Run all checks
bun run lint && bun run typecheck && bun run build
```

## CI Badge

Add the CI status badge to your README:

```markdown
[![CI](https://github.com/makara4code/product-management-nextjs-app/actions/workflows/ci.yml/badge.svg)](https://github.com/makara4code/product-management-nextjs-app/actions/workflows/ci.yml)
```
