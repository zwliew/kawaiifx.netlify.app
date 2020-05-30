# KawaiiFX

Cute audio and visual effects at [https://kawaiifx.netlify.app](https://kawaiifx.netlify.app).

* [Quick start](#quick-start)
* [Detailed setup info](#detailed-setup-info)
* [Browser compatibility and performance](#browser-compatibility-and-performance)

## Quick start

```
npm install -g polymer-cli
git clone https://github.com/zwliew/kawaiifx.netlify.app
cd start-lit-element
npm install
polymer serve
```

## Detailed setup info

* [Clone](#clone-this-repo)
* [Serve](#start-a-dev-server)
* [Setup](#set-up-new-app)
* [Build](#build-for-production-and-serve-locally)
* [Deploy](#deploy)

### Clone this repo

```
git clone https://github.com/zwliew/kawaiifx.netlify.app
```

### Start a dev server

```
npm install -g polymer-cli
cd start-lit-element
npm install
polymer serve
```

### Build for production and serve locally

Build your project and serve the build locally:

```
polymer build
polymer serve build/default
```

### Deploy

1.  [Set up Firebase CLI tools](https://firebase.google.com/docs/cli/).
2.  [Create a new Firebase project](https://firebase.google.com/console).
3.  Update firebase.json and .firebaserc with your own app details.   
4.  Deploy.

    ```
    firebase deploy
    ```

See the [Firebase CLI Reference](https://firebase.google.com/docs/cli) for more info.

## Browser compatibility and performance

At the time of writing (Dec 11 2018) this app was scoring 100% on all Lighthouse audits when deployed, and was working fine on the most recent versions of Chrome, Safari, Firefox, and Edge.

Let me know of any [issues](https://github.com/PolymerLabs/start-lit-element/issues).

## Known issues

(All browsers) Dynamic `import` warning:

```
Could not resolve module specifier "require" in file "..src/start-lit-element.js".
```

See https://github.com/Polymer/tools/issues/131.

(IE11 and Edge) Warning due to `<!--!` in built HTML:

```
Unexpected character: U+0021 EXCLAMATION MARK (!)
Unexpected character in comment end. Expected "-->"
```

See https://github.com/Polymer/polymer-cli/issues/779.
