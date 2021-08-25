# Debate timer

## CLI Commands
*   `npm install`: Installs dependencies

*   `npm start`: Run a development, HMR server

*   `npm run serve`: Run a production-like server

*   `npm run build`: Production-ready build

*   `npm run lint`: Pass TypeScript files using ESLint

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Changing server subfolder
To change subfolder that the app is served from, edit:
* `preact.config.js`: line `13`, `const productionSubfolder`
* `src/manifest.json`: lines `4` and `5`, `start_url` and `scope`
* `.htaccess`: lines `4` and `9`, `RewriteBase` and `RewriteRule`
