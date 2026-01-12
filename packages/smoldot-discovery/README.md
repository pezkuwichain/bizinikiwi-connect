<br /><br />

<div align="center">
  <h1 align="center">@bizinikiwi/smoldot-discovery</h1>
  <p align="center">
    <a href="https://www.npmjs.com/package/@bizinikiwi/smoldot-discovery">
      <img alt="npm" src="https://img.shields.io/npm/v/@bizinikiwi/smoldot-discovery" />
    </a>
    <a href="https://github.com/pezkuwichain/bizinikiwi-connect/blob/master/LICENSE">
      <img alt="GPL-3.0-or-later" src="https://img.shields.io/npm/l/@bizinikiwi/smoldot-discovery" />
    </a>
  </p>
</div>

<br /><br />

A TypeScript package extended from the [`@bizinikiwi/discovery`](../discovery/README.md) NPM package, which enables the discovery and filtering of Smoldot extension providers from a list of providers.

To be utilized by dApps, extensions should implement the `SmoldotExtensionProviderDetail` interface. This can be achieved by following the extension side of the discovery protocol as detailed [here](../discovery/README.md), and then returning the implemented interface.

## Installation

You can install the package using npm or yarn:

```sh
corepack pnpm i @bizinikiwi/smoldot-discovery
```

## Usage

Here's an example of how to use the package:

```ts
import { getSmoldotExtensionProviders } from "@bizinikiwi/smoldot-discovery"

const smoldotProviders = getSmoldotExtensionProviders()

console.log(smoldotProviders)
```
