# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a fork of [Lumi](https://github.com/Lumieducation/Lumi) with SCORM export fixes. Lumi is a desktop application for creating, editing, and displaying H5P interactive content. It runs as an Electron app with a Node.js/Express backend and React frontend.

### Key Changes from Original

- **Version**: 0.11.0 (based on v0.10.0 stable codebase)
- **SCORM Export**: Fixed freezing issues with interactive video H5P content
- **H5P Libraries**: Uses `@lumieducation/h5p-*` version 9.1.2 (stable)
- **Tracking**: Sentry and Matomo tracking disabled
- **Build**: Cross-platform scripts (Windows, Linux, macOS)

## Build Commands

```bash
# Install all dependencies (root, client, reporter-client)
npm run ci:all

# Build everything (server, client, reporter-client)
npm run build

# Build individual components
npm run build:server    # TypeScript compilation
npm run build:client    # React client build
npm run build:reporter-client

# Platform-specific builds (cross-platform)
npm run build:linux     # Creates AppImage + DEB for Linux
npm run build:linux:appimage  # Only AppImage
npm run build:linux:deb      # Only DEB package
npm run build:mac       # Creates macOS app
npm run build:win       # Creates Windows installer
npm run build:win32     # Creates Windows 32-bit installer

# Clean build artifacts
npm run clean
```

## Development Commands

```bash
# Run in development mode
npm run start:dev

# Run in production mode
npm run start

# Linting and formatting
npm run lint            # Check for issues
npm run format          # Auto-fix formatting
npm run format:check    # Check formatting only

# Run tests
npm test
npm run test:e2e        # End-to-end tests
npm run test:watch      # Watch mode
```

## Architecture

### Three-Part Structure

1. **Server (`server/src/`)**: Electron main process with Express + Socket.IO backend
   - Entry point: `server/src/main.ts`
   - H5P integration via `@lumieducation/h5p-server` library
   - Controllers handle file operations and exports
   - Routes define HTTP endpoints

2. **Client (`client/`)**: React SPA for the main editor interface
   - Uses Redux for state management
   - Material-UI for components
   - Communicates with server via REST and Socket.IO

3. **Reporter-Client (`reporter-client/`)**: Separate React app for xAPI reporting

### Key Directories

- `server/src/boot/`: Initialization modules (H5P, i18n, websocket, express app)
- `server/src/controllers/`: ExportController, FileController, H5PController
- `server/src/routes/`: HTTP route definitions
- `server/src/config/`: Configuration and settings management
- `h5p/core/` and `h5p/editor/`: H5P core files (styles, scripts, fonts)
- `scorm-client/`: SCORM API wrapper and H5P adaptor for exports
- `locales/`: i18n translation files

### H5P Export Flow

Exports are handled by `server/src/controllers/ExportController.ts`:
- Uses `@lumieducation/h5p-html-exporter` to create HTML bundles
- SCORM export uses `simple-scorm-packager`
- Templates in `controllers/templates/` customize output

### Electron Communication

- Main process handles file dialogs via `FilePickers` helper
- `DelayedEmitter` queues websocket events until client connects
- `StateStorage` manages Electron window state

## H5P Library Version

This project uses `@lumieducation/h5p-*` version 9.1.2. When upgrading these libraries, check for API changes in:
- H5PPlayer/H5PEditor constructors
- HtmlExporter methods
- PostCSS processing behavior

## Cross-Platform Build Notes

The build scripts use cross-platform tools:
- `shx` - Shell commands that work on Windows/Linux/macOS
- `rimraf` - Cross-platform `rm -rf`
- `cross-env` - Cross-platform environment variables

No shell scripts (`.sh` or `.bat`) are required for building.

## Localization

Translations are in `locales/lumi/`. Use the localize script to auto-translate:
```bash
npm run localize
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages must follow the format:

```
type(scope): description

# Examples:
chore(release): v0.11.0
fix(export): resolve SCORM freeze issue
docs(readme): update installation instructions
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`