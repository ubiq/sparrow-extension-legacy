import * as networkEnums from '../../app/scripts/controllers/network/enums'

/**
 * Gets the ubiqscan.io URL prefix for a given network ID.
 *
 * @param {string} networkId - The network ID to get the prefix for.
 * @returns {string} The ubiqscan.io URL prefix for the given network ID.
 */
export function getEtherscanNetworkPrefix (networkId) {
  switch (networkId) {
    case networkEnums.MAINNET_NETWORK_ID:
      return ''
    default: // also covers mainnet
      return ''
  }
}
