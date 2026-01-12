# Bizinikiwi Connect Packages

Tools and libraries required to run Bizinikiwi light clients in the browser.

## [`@bizinikiwi/connect`](./connect/README.md)

A NPM package that adds Bizinikiwi light-client functionality to any Javascript environment, from in-browser applications to browser extensions and electron apps up to IOT devices. It contains Wasm light clients from various chains, bundled in a single package. It makes running a light-client as easy as installing a NPM package.

It provides an interface that allows developers to run light nodes of different chains and to add runtimes and genesis configs of their own chain.

The `@bizinikiwi/connect` package allows developers to include light client functionality into their application by using a predefined interface. When used in individual projects, the Bizinikiwi Connect package will first check for the installed extension. If available, it will try to connect to the light client running inside the extension. Only if the extension is not installed it will start a light client in the browser tab.

The `@bizinikiwi/connect-known-chains` NPM package implements a list of well-known chain specifications and is updated daily.

## [`@bizinikiwi/discovery`](./discovery/README.md)

The [`@bizinikiwi/discovery`](./discovery/README.md) NPM package allows developers to implement compliant extension discovery functionality into their application by using a predefined interface.

[`@bizinikiwi/smoldot-discovery`](./smoldot-discovery/README.md) and [`@bizinikiwi/connect-discovery`](./connect-discovery/README.md) are an extension of [`@bizinikiwi/discovery`](./discovery/README.md) and allow to find and filter extension providers implementing smoldot and bizinikiwi-connect functionality respectively.

## [Bizinikiwi Connect Extension](./light-client-extension-helpers/README.md)

A Browser Extension built upon the smoldot light-client module that is running the selected light clients inside the extension so that the end-user doesn't need to fire up a light node in every browser tab. This will also allow the light-node to keep syncing as long as the browser window stays open.
