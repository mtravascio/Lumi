# AGENTS.md

Instructions for coding agents working in this repository.

## Project Overview

Lumi is an Electron app for creating, editing, and displaying H5P interactive content. It's a fork with SCORM export fixes. Uses Node.js/Express backend with React frontend.

## Build Commands

```bash
# Install all dependencies
npm run ci:all

# Build everything
npm run build

# Build components separately
npm run build:server      # TypeScript compilation
npm run build:client      # React client build
npm run build:reporter-client

# Development
npm run start:dev         # Dev mode with hot reload
npm run start             # Production mode

# Platform builds
npm run build:linux       # Linux AppImage + DEB + Pacman + Snap
npm run build:mac         # macOS
npm run build:win         # Windows (all variants)
```

## Test Commands

```bash
# Run all tests
npm test                  # Main tests + client tests

# Run single test
npx jest path/to/test.ts  # Run specific test file
npx jest --testNamePattern="test name"  # Run specific test
npm test -- --watch     # Watch mode

# Other test commands
npm run test:e2e         # E2E tests (run in-band)
npm run test:watch       # Watch mode
npm test -- --verbose    # Verbose output
npm test -- --coverage   # With coverage
```

## Lint/Format Commands

```bash
npm run lint             # ESLint check
npm run format           # Auto-fix formatting
npm run format:check     # Check formatting only
```

**IMPORTANT**: Always run `npm run lint` and `npm run format` after making changes.

## Code Style Guidelines

### TypeScript

-   **Framework**: `airbnb-typescript` with Prettier
-   **Module System**: CommonJS (`"module": "commonjs"`)
-   **Decorators**: Enabled for experimental decorators
-   **Implicit Any**: Allowed (`"noImplicitAny": false`)

### Formatting (Prettier)

```json
{
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "none",
    "bracketSpacing": true
}
```

### Type Requirements (ESLint)

-   Explicit types for parameters
-   Explicit types for property declarations
-   Explicit types for member variables
-   Explicit return types on functions
-   Explicit module boundary types

### Naming Conventions

-   **Classes**: PascalCase (e.g., `ExportController`, `LumiError`)
-   **Interfaces**: PascalCase with `I` prefix (e.g., `IUser`, `IPaths`)
-   **Functions**: camelCase
-   **Variables**: camelCase
-   **Constants**: UPPER_SNAKE_CASE for true constants
-   **Files**: camelCase for utilities, PascalCase for classes

### Member Ordering

```
public-constructor
private-constructor
public-static-field
private-static-field
public-instance-field
private-instance-field
public-static-method
private-static-method
public-instance-method
private-instance-method
```

### Import Style

```typescript
// External imports first, alphabetical
import * as Sentry from '@sentry/electron';
import electron, { app } from 'electron';
import log from 'electron-log';

// Internal imports after blank line
import createHttpServer from './boot/httpServer';
import updateMenu from './menu';
```

### Error Handling

-   Use custom `LumiError` class for application errors
-   Always include error codes: `'user-abort' | 'h5p-not-found'`
-   Use Sentry for tracking: `Sentry.captureException(error)`
-   Use `electron-log` for logging: `log.error()`, `log.debug()`

### General Guidelines

-   No default exports (use named exports)
-   Arrow functions preferred
-   Avoid nested ternaries (warning level)
-   No `await` in loops (warning level)
-   Class methods should use `this` or be static
-   Use `undefined` instead of `null` where possible

## Project Structure

```
server/src/          # Electron main + Express backend
  boot/               # Initialization (H5P, i18n, websocket)
  controllers/          # ExportController, FileController, H5PController
  routes/               # HTTP route definitions
  config/               # Settings, paths, configuration
  helpers/              # Utilities (FilePickers, Logger, LumiError)
  menu/                 # Electron menu definitions
client/               # React SPA (Redux + Material-UI)
reporter-client/      # xAPI reporting React app
h5p/core/ & h5p/editor/  # H5P core files
scorm-client/         # SCORM API wrapper
locales/              # i18n translations
```

## Git Conventions

Conventional Commits format:

```
type(scope): description
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:

```
fix(export): resolve SCORM freeze issue
feat(h5p): add new content type support
refactor(controller): simplify export logic
```

## Important Libraries

-   `@lumieducation/h5p-*` v9.1.2 - H5P integration
-   `electron` v20.3.3 - Desktop app framework
-   `express` v4.18.2 - Web server
-   `socket.io` v4.5.3 - Real-time communication
-   `react` v17.0.2 - Frontend UI
-   `redux` v4.2.0 - State management
-   `i18next` v21.10.0 - Internationalization
