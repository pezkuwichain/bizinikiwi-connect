import { WellKnownChain } from "./types.js"

const chains: Map<WellKnownChain, Promise<{ chainSpec: string }>> = new Map()

export async function getSpec(chain: string): Promise<string> {
  if (!Object.keys(WellKnownChain).includes(chain))
    throw new Error("Invalid chain name")

  const knownChain = chain as WellKnownChain
  if (!chains.has(knownChain))
    // Dynamic imports needs to be explicit for ParcelJS
    // See https://github.com/parcel-bundler/parcel/issues/125
    switch (knownChain) {
      case WellKnownChain.pezkuwi: {
        chains.set(
          WellKnownChain.pezkuwi,
          import("@bizinikiwi/connect-known-chains/pezkuwi"),
        )
        break
      }
      case WellKnownChain.ksmcc3: {
        chains.set(
          WellKnownChain.ksmcc3,
          import("@bizinikiwi/connect-known-chains/ksmcc3"),
        )
        break
      }
      case WellKnownChain.zagros2: {
        chains.set(
          WellKnownChain.zagros2,
          import("@bizinikiwi/connect-known-chains/zagros2"),
        )
        break
      }
      case WellKnownChain.pezkuwichain_v2_2: {
        chains.set(
          WellKnownChain.pezkuwichain_v2_2,
          import("@bizinikiwi/connect-known-chains/pezkuwichain_v2_2"),
        )
        break
      }
      case WellKnownChain.paseo: {
        chains.set(
          WellKnownChain.paseo,
          import("@bizinikiwi/connect-known-chains/paseo"),
        )
        break
      }
    }

  return (await chains.get(knownChain)!).chainSpec
}
