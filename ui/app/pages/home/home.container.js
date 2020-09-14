import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  unconfirmedTransactionsCountSelector,
  getCurrentEthBalance,
  getFirstPermissionRequest,
  getTotalUnapprovedCount,
} from '../../selectors'

import {
  setShowRestorePromptToFalse,
  setConnectedStatusPopoverHasBeenShown,
  setDefaultHomeActiveTabName,
} from '../../store/actions'
import { getEnvironmentType } from '../../../../app/scripts/lib/util'
import {
  ENVIRONMENT_TYPE_NOTIFICATION,
  ENVIRONMENT_TYPE_POPUP,
} from '../../../../app/scripts/lib/enums'
import Home from './home.component'

const mapStateToProps = (state) => {
  const { metamask, appState } = state
  const {
    suggestedTokens,
    seedPhraseBackedUp,
    tokens,
    showRestorePrompt,
    selectedAddress,
    connectedStatusPopoverHasBeenShown,
    defaultHomeActiveTabName,
  } = metamask
  const accountBalance = getCurrentEthBalance(state)
  const { forgottenPassword } = appState
  const totalUnapprovedCount = getTotalUnapprovedCount(state)

  const envType = getEnvironmentType()
  const isPopup = envType === ENVIRONMENT_TYPE_POPUP
  const isNotification = envType === ENVIRONMENT_TYPE_NOTIFICATION

  const firstPermissionsRequest = getFirstPermissionRequest(state)
  const firstPermissionsRequestId = (firstPermissionsRequest && firstPermissionsRequest.metadata)
    ? firstPermissionsRequest.metadata.id
    : null

  return {
    forgottenPassword,
    suggestedTokens,
    unconfirmedTransactionsCount: unconfirmedTransactionsCountSelector(state),
    shouldShowSeedPhraseReminder: !seedPhraseBackedUp && (parseInt(accountBalance, 16) > 0 || tokens.length > 0),
    isPopup,
    isNotification,
    showRestorePrompt,
    selectedAddress,
    firstPermissionsRequestId,
    totalUnapprovedCount,
    connectedStatusPopoverHasBeenShown,
    defaultHomeActiveTabName,
  }
}

const mapDispatchToProps = (dispatch) => ({
  setShowRestorePromptToFalse: () => dispatch(setShowRestorePromptToFalse()),
  setConnectedStatusPopoverHasBeenShown: () => dispatch(setConnectedStatusPopoverHasBeenShown()),
  onTabClick: (name) => dispatch(setDefaultHomeActiveTabName(name)),
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Home)
