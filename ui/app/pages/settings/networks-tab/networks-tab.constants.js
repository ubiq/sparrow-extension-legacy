const defaultNetworksData = [
  {
    labelKey: 'mainnet',
    iconColor: '#29B6AF',
    providerType: 'mainnet',
    rpcUrl: 'https://api.infura.io/v1/jsonrpc/mainnet',
    chainId: '1',
    ticker: 'ETH',
    blockExplorerUrl: 'https://ubiqscan.io',
  },
  {
    labelKey: 'localhost',
    iconColor: 'white',
    border: '1px solid #6A737D',
    providerType: 'localhost',
    rpcUrl: 'http://localhost:8588/',
    chainId: '8',
    ticker: 'UBQ',
    blockExplorerUrl: 'https://ubiqscan.io',
  },
]

export {
  defaultNetworksData,
}
