# Lumi - Fork with SCORM Export Fixes

This is a fork of [Lumi](https://github.com/Lumieducation/Lumi) with fixes for SCORM export issues that were present in version 1.0.2.

## What's Fixed

This version (0.11.0) is based on the stable v0.10.0 codebase with the following improvements:
- Fixed SCORM export freezing with interactive video H5P content
- Fixed CSS import issues during HTML bundle creation
- Maintained stable H5P library versions (9.1.2)
- Cross-platform build scripts (works on Windows, Linux, macOS)
- Disabled external tracking (Sentry, Matomo)

## About Lumi

Lumi is a Desktop App that offers a collection of tools to create, edit and share digital content with your class. It provides an H5P Editor for creating interactive content.

It's built with TypeScript – a [nodejs](https://nodejs.org/) plus [express](https://expressjs.com/) and [socket.io](http://socket.io) server, [React.js](https://reactjs.org/), [Redux](https://redux.js.org/) and [Material-ui](https://www.material-ui.com). It runs as an [Electron](https://electronjs.org)-Standalone App on Mac OS X, Windows and Linux.

## Requirements

- Node.js >= 16.0.0
- npm >= 7.0.0

## Download

Download the latest version from the [Releases](https://github.com/mtravascio/Lumi/releases) page.

## Build from Source

```bash
# Clone the repository
git clone https://github.com/mtravascio/Lumi.git
cd Lumi

# Install dependencies
npm run ci:all

# Build everything
npm run build

# Build for your platform (cross-platform)
npm run build:linux     # Linux (AppImage + DEB)
npm run build:linux:appimage  # Linux AppImage only
npm run build:linux:deb      # Linux DEB only
npm run build:mac       # macOS
npm run build:win       # Windows (64-bit)
npm run build:win32     # Windows (32-bit)
```

## Development

```bash
# Run in development mode
npm run start:dev

# Run tests
npm test

# Lint and format
npm run lint
npm run format

# Clean build artifacts
npm run clean
```

## Cross-Platform Build

The build scripts are cross-platform and work on Windows, Linux, and macOS. No shell scripts (`.sh` or `.bat`) are required - all commands use cross-platform tools:

- `shx` - Shell commands that work everywhere
- `rimraf` - Cross-platform directory removal
- `cross-env` - Cross-platform environment variables

## Project Structure

```
├── client/                 # React frontend
├── server/src/             # Electron main process + Express backend
│   ├── boot/               # Initialization modules
│   ├── controllers/        # Export, File, H5P controllers
│   ├── routes/             # HTTP routes
│   └── config/             # Configuration
├── reporter-client/        # xAPI reporting app
├── h5p/                    # H5P core files
├── scorm-client/           # SCORM wrapper
└── locales/                # Translations
```

## Credits

- Original project: [Lumieducation/Lumi](https://github.com/Lumieducation/Lumi)
- Original authors: Lumi Education Jan Philip Schellenberg & Sebastian Rettig GbR

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE v3 License - see the [LICENSE](LICENSE) file for details.
