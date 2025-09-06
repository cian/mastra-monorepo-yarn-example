# Introduction
This is a reproduct example to accompany this Mastra bug report: https://github.com/mastra-ai/mastra/issues/7525

# Setup

To set up this environment run:
```shell
corepack enable
yarn install
```

# Build
## With ENV at build time
If you specify the ENV at build time, the module can be successfully transpiled and bundled in the Mastra server:
```shell
APP_ENV=local MASTRA_BUNDLER_DEBUG=true yarn workspace @monorepo/foo build
```

## Without ENV at build time
However, if you leave `APP_ENV` to be specificed at runtime, then Mastra will need to package `@monorepo/bar` as a workspace dependency which fails in Yarn:
```shell
MASTRA_BUNDLER_DEBUG=true yarn workspace @monorepo/foo build
```
It fails with:
```
[...]
INFO [2025-09-06 13:28:06.515 +0100] (Mastra CLI): Packaging batch 1/1: @monorepo/bar
Unknown Syntax Error: Unsupported option name ("--pack-destination").

$ yarn pack [--install-if-needed] [-n,--dry-run] [--json] [-o,--out #0]
INFO [2025-09-06...] (Mastra CLI): Unknown Syntax Error: Unsupported option name ("--pack-destination").

$ yarn pack [--install-if-needed] [-n,--dry-run] [--json] [-o,--out #0]
ERROR [2025-09-06...] (Mastra CLI): Mastra Build failed
    error: {
      "message": "Failed to collect and pack workspace dependencies.",
      "details": {
        "message": "Failed to collect and pack workspace dependencies.",
        "domain": "DEPLOYER",
        "category": "USER",
        "details": {}
      },
      "code": "DEPLOYER_BUNDLER_WORKSPACE_DEPS_FAILED"
    }
[...]
```