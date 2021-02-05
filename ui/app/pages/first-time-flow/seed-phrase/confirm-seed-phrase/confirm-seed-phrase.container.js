import { connect } from 'react-redux'
import {
  setSeedPhraseBackedUp,
  setCompletedOnboarding,
} from '../../../../store/actions'
import ConfirmSeedPhrase from './confirm-seed-phrase.component'

const mapDispatchToProps = (dispatch) => {
  return {
    setSeedPhraseBackedUp: (seedPhraseBackupState) => dispatch(setSeedPhraseBackedUp(seedPhraseBackupState)),
    completeOnboarding: () => dispatch(setCompletedOnboarding()),
  }
}

export default connect(null, mapDispatchToProps)(ConfirmSeedPhrase)
