import {
  MAINNET_CHAIN_ID,
} from '../controllers/network/enums'

const standardNetworkId = {
  '8': MAINNET_CHAIN_ID,
}

export default function selectChainId (metamaskState) {
  const { network, provider: { chainId } } = metamaskState
  return standardNetworkId[network] || `0x${parseInt(chainId, 10).toString(16)}`
}
