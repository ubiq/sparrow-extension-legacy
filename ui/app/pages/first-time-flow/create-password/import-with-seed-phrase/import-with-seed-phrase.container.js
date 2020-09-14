import { connect } from 'react-redux'
import {
  setSeedPhraseBackedUp,
  setCompletedOnboarding,
} from '../../../../store/actions'
import ImportWithSeedPhrase from './import-with-seed-phrase.component'

const mapDispatchToProps = (dispatch) => {
  return {
    setSeedPhraseBackedUp: (seedPhraseBackupState) => dispatch(setSeedPhraseBackedUp(seedPhraseBackupState)),
    completeOnboarding: () => dispatch(setCompletedOnboarding()),
  }
}

export default connect(null, mapDispatchToProps)(ImportWithSeedPhrase)
