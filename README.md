<img src="https://github.com/WordPress/openverse/raw/main/brand/banner.svg" width="100%"/>

<p align="center">
  <a href="https://github.com/orgs/WordPress/projects/3">Project Board</a> | <a href="https://make.wordpress.org/openverse/">Community Site</a> | <a href="https://make.wordpress.org/chat/">#openverse @ Slack</a> | <a href="https://make.wordpress.org/openverse/handbook/openverse-handbook/">Handbook</a> | <a href="https://www.figma.com/file/w60dl1XPUvSaRncv1Utmnb/Openverse-Releases?node-id=0%3A1">Releases mockups</a> | <a href="https://www.figma.com/file/GIIQ4sDbaToCfFQyKMvzr8/Openverse-Design-Library?node-id=0%3A1">Design Library</a>

  <h1 align="center">Openverse Browser Extension</h2>
    <h4 align="center">
    <a href="https://chrome.google.com/webstore/detail/cc-search/agohkbfananbebiaphblgcfhcclklfnh">
      Chrome
    </a>
    <span> | </span>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/cc-search-extension/">
      Firefox
    </a>
    <span> | </span>
    <a href="https://addons.opera.com/en/extensions/details/cc-search/">
      Opera
    </a>
    <span> | </span>
    <a href="https://microsoftedge.microsoft.com/addons/detail/cc-search/djolilnbndifmlfmcdnifdfjfbglipgc">
      Edge
    </a>
  </h4>
  <p align="center">A cross-browser extension that lets you search, filter, and use openly-licensed images.<p>

  <p align="center">
    <a href="https://github.com/WordPress/openverse-browser-extension/blob/master/LICENSE">
      <img alt="MIT License" src="https://img.shields.io/github/license/WordPress/openverse-browser-extension.svg?color=brightgreen" />
    </a>
    <a href="https://github.com/WordPress/openverse-browser-extension/blob/master/CONTRIBUTING.md">
	    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="prs welcome">
    </a>
  </p>
</p>

<!-- TODO: Replace with new screenshots -->
<p align="center">
  <img src="https://i.imgur.com/3Bi5PNc.png" width=600>
</p>
<p align="center">
  <img src="https://i.imgur.com/5ulA95E.png" width=600>
</p>

## Features

Please visit [the homepage](https://search.openverse.engineering/extension) to preview a few features in action.

<!-- prettier-ignore-start -->
| Feature | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.1.0/firefox/firefox_32x32.png" width="16" height="16"> Firefox | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.1.0/chrome/chrome_32x32.png" height="16" width="16"> Chrome | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.1.0/opera/opera_32x32.png" heigth="16" width="16"> Opera | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/70.1.0/edge/edge_32x32.png" heigth="16" width="16"> Edge |
|--------------------------------------------------------|---------|--------|-------|-------|
| Search and filter CC Licensed images. | Yes | Yes | Yes | Yes|
| One click easy attribution. | Yes | Yes | Yes | Yes |
| Image tags and recommendations. | Yes| Yes | Yes | Yes |
| Download images (and attribution). | Yes | Yes | Yes | Yes |
| Bookmark images. | Yes | Yes | Yes | Yes |
| Export and import bookmarks. | Yes | Yes | Yes | Yes |
| Options page for custom settings. | Yes | Yes | Yes | Yes |
| Sync your custom setting and bookmarks across devices. | Yes | Yes | No | Yes |
| Dark Mode. | Yes | Yes | Yes | Yes |
<!-- prettier-ignore-end -->

## Installation from source

You can install the extension directly from the source. Follow the following steps:

1. Clone the repository

```
git clone https://github.com/WordPress/openverse-browser-extension.git
```

2. Install project dependencies

```
npm install
```

3. Run the following command to compile SASS to CSS and bundle JS. The compiled files will be in `dist` folder.

```
npm run build
```

_Note_: If you want to install the extension for development, you should run `npm run dev`.

## Troubleshooting build failures

1. If you get the following error:

```shell
'TARGET' is not recognized as an internal or external command
```

then most likely webpack-cli is not installed on your dev machine.

- Here are the few things you can try:
  - Try deleting the folder node_modules and reinstalling `webpack-cli`.

  ```shell
    npm install --save-dev webpack-cli
  ```

  - If reinstalling node modules does not solve the issue, run the following to install `webpack-cli` globally.

  ```shell
  npm install -g webpack-cli
  ```

## Loading the extension in the browser

- **Mozilla Firefox**
  - Navigate to _about:debugging_.
  - Click on "Load Temporary Add-on" button.
  - From the file explorer, choose `openverse-browser-extension/dist/firefox/manifest.json`.
- **Google Chrome**
  - Navigate to _chrome://extensions_.
  - Click on "Load Unpacked" button (make sure you have enabled the _Developer mode_).
  - From the file explorer, choose `openverse-browser-extension/dist/chrome`.
- **Opera**
  - Navigate to _about://extensions_.
  - Click on "Load Unpacked" button (make sure you have enabled the _Developer mode_).
  - From the file explorer, choose `openverse-browser-extension/dist/opera`.
- **Edge**
  - Navigate to _edge://extensions_.
  - Click on "Load Unpacked" button (make sure you have enabled the _Developer mode_).
  - From the file explorer, choose `openverse-browser-extension/dist/edge`.

## Contribution

Checkout [CONTRIBUTING.md](https://github.com/WordPress/openverse-browser-extension/blob/master/CONTRIBUTING.md) for general guidelines for contributing code to the project.

For contribution guidelines and development instructions **specific to this particular project**, please checkout [INSTRUCTIONS.md](https://github.com/WordPress/openverse-browser-extension/blob/master/INSTRUCTIONS.md).

## Debugging in Development Mode

### Mozilla Firefox

- Navigate to _about:debugging_ and from sidebar select _This Firefox_.
- Click on "Load Temporary Add-on" button.
  <p align="center">
    <img src="https://i.imgur.com/6pf428K.jpg">
  </p>
- From the file explorer, choose `openverse-browser-extension/dist/firefox/manifest.json`.
- You will be now able to see Openverse browser extension. Now click on the Inspect button.
  <p align="center">
    <img src="https://i.imgur.com/GFnfjQS.jpg">
  </p>
- A new tab will open with Firefox debugger. Now first, click on the _three dots_ and select "Disable Popup Auto-Hide".
  <p align="center">
    <img src="https://i.imgur.com/K7HRBPj.jpg">
  </p>
- Now click on the browser extension from top right corner and the developer tools will be loaded with the content to debug.
  <p align="center">
    <img src="https://i.imgur.com/9Jryt1i.jpg">
  </p>

### Google Chrome, Opera, Microsoft Edge

After you have [loaded the extension](#loading-the-extension-in-the-browser), follow these steps.

- Right-click in extension area and select "Inspect element".
  <p align="center">
    <img src="https://i.imgur.com/Z30eKGD.jpg">
  </p>
- The developer tools will now open loaded with the content to debug.
  <p align="center">
    <img src="https://i.imgur.com/ZALNzJ2.jpg">
  </p>

## License

See [LICENSE](https://github.com/WordPress/openverse-browser-extension/blob/master/LICENSE).
