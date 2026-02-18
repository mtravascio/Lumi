# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lumi is a desktop application for creating, editing, and displaying H5P interactive content. It runs as an Electron app with a Node.js/Express backend and React frontend.

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

# Platform-specific builds
npm run build:linux     # Creates AppImage, deb, snap
npm run build:mac       # Creates macOS app
npm run build:win       # Creates Windows installer
```

## Development Commands

```bash
# Run in development mode
npm run start:dev

# Run in production mode
npm run start

# Linting
npm run lint

# Format code
npm run format

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

## Localization

Translations are in `locales/lumi/`. Use the localize script to auto-translate:
```bash
npm run localize
```
