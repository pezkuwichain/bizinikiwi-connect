export type ProviderDetail = {
  kind: string
  info: ProviderInfo
  provider: unknown
}

export type OnProvider = {
  onProvider(detail: ProviderDetail): void
}

export type ProviderInfo = {
  uuid: string
  name: string
  icon: string
  rdns: string
}

export const getProviders = (): ProviderDetail[] => {
  const providers: ProviderDetail[] = []

  // When this event is dispatched, event listeners are expected to
  // respond immediately with a provider. This means the `providers`
  // array will be populated synchronously.
  window.dispatchEvent(
    new CustomEvent<OnProvider>("bizinikiwiDiscovery:requestProvider", {
      detail: {
        onProvider(detail) {
          providers.push(detail)
        },
      },
    }),
  )

  // slice the array to prevent further "asynchronous" updates. Providers
  // that did not respond synchronously will be dropped.
  const providersSliced = providers.slice()

  return providersSliced
}

// #region Events
export interface AnnounceProviderEvent extends CustomEvent<ProviderDetail> {
  type: "bizinikiwiDiscovery:announceProvider"
}

export interface RequestProviderEvent extends CustomEvent<OnProvider> {
  type: "bizinikiwiDiscovery:requestProvider"
}

declare global {
  interface WindowEventMap {
    "bizinikiwiDiscovery:announceProvider": AnnounceProviderEvent
    "bizinikiwiDiscovery:requestProvider": RequestProviderEvent
  }
}
// #endregion
