# Lumi - Fork with SCORM Export Fixes

This is a fork of [Lumi](https://github.com/Lumieducation/Lumi) with fixes for SCORM export issues that were present in version 1.0.2.

## What's Fixed

This version (0.11.0) is based on the stable v0.10.0 codebase with the following improvements:
- Fixed SCORM export freezing with interactive video H5P content
- Fixed CSS import issues during HTML bundle creation
- Maintained stable H5P library versions (9.1.2)

## About Lumi

Lumi is a Desktop App that offers a collection of tools to create, edit and share digital content with your class. It provides an H5P Editor for creating interactive content.

It's built with TypeScript – a [nodejs](https://nodejs.org/) plus [express](https://expressjs.com/) and [socket.io](http://socket.io) server, [React.js](https://reactjs.org/), [Redux](https://redux.js.org/) and [Material-ui](https://www.material-ui.com). It runs as an [Electron](https://electronjs.org)-Standalone App on Mac OS X, Windows and Linux.

## Download

Download the latest version from the [Releases](https://github.com/mtravascio/Lumi/releases) page.

## Build from Source

```bash
# Install dependencies
npm run ci:all

# Build everything
npm run build

# Build for your platform
npm run build:linux   # Linux (AppImage, deb)
npm run build:mac     # macOS
npm run build:win     # Windows
```

## Development

```bash
# Run in development mode
npm run start:dev

# Run tests
npm test

# Lint code
npm run lint
```

## Credits

- Original project: [Lumieducation/Lumi](https://github.com/Lumieducation/Lumi)
- Original authors: Lumi Education Jan Philip Schellenberg & Sebastian Rettig GbR

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE v3 License - see the [LICENSE](LICENSE) file for details.
