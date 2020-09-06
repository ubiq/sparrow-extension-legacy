export default function getAccountLink (address, network, rpcPrefs) {
  if (rpcPrefs && rpcPrefs.blockExplorerUrl) {
    return `${rpcPrefs.blockExplorerUrl.replace(/\/+$/u, '')}/address/${address}`
  }

  // eslint-disable-next-line radix
  const net = parseInt(network)
  switch (net) {
    case 88: // main net
      return `https://ubiqscan.io/address/${address}`
    default:
      return ''
  }
}
