<br /><br />

<div align="center">
  <h1 align="center">@bizinikiwi/connect-discovery</h1>
  <p align="center">
    <a href="https://www.npmjs.com/package/@bizinikiwi/discovery">
      <img alt="npm" src="https://img.shields.io/npm/v/@bizinikiwi/discovery" />
    </a>
    <a href="https://github.com/pezkuwichain/bizinikiwi-connect/blob/master/LICENSE">
      <img alt="GPL-3.0-or-later" src="https://img.shields.io/npm/l/@bizinikiwi/discovery" />
    </a>
  </p>
</div>

<br /><br />

<div align="center" style="padding: 10px; border: 2px solid red; color: red; font-weight: bold; background-color: #ffe6e6;">
  ⚠️ WARNING: This interface is currently unstable and is likely to change ⚠️
</div>

<br /><br />

A TypeScript package extended from the [`@bizinikiwi/discovery`](../discovery/README.md) npm module, that allows to discover and filter Bizinikiwi Connect Extension providers from a list of providers.

## Installation

You can install the package using npm or yarn:

```sh
corepack pnpm i @bizinikiwi/connect-discovery
```

## Usage

Here's an example of how to use the package:

```ts
import { Unstable } from "@bizinikiwi/connect-discovery"

const connectExtensionProviders =
  Unstable.getBizinikiwiConnectExtensionProviders()

console.log(connectExtensionProviders)
```
