import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SendRowWrapper from '../send-row-wrapper'
import GasPriceButtonGroup from '../../../../components/app/gas-customization/gas-price-button-group'
import AdvancedGasInputs from '../../../../components/app/gas-customization/advanced-gas-inputs'
import GasFeeDisplay from './gas-fee-display/gas-fee-display.component'

export default class SendGasRow extends Component {

  static propTypes = {
    balance: PropTypes.string,
    gasFeeError: PropTypes.bool,
    gasLoadingError: PropTypes.bool,
    gasTotal: PropTypes.string,
    maxModeOn: PropTypes.bool,
    showCustomizeGasModal: PropTypes.func,
    sendToken: PropTypes.object,
    setAmountToMax: PropTypes.func,
    setGasPrice: PropTypes.func,
    setGasLimit: PropTypes.func,
    tokenBalance: PropTypes.string,
    gasPriceButtonGroupProps: PropTypes.object,
    gasButtonGroupShown: PropTypes.bool,
    advancedInlineGasShown: PropTypes.bool,
    resetGasButtons: PropTypes.func,
    gasPrice: PropTypes.string,
    gasLimit: PropTypes.string,
    insufficientBalance: PropTypes.bool,
    isMainnet: PropTypes.bool,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  setMaxAmount () {
    const {
      balance,
      gasTotal,
      sendToken,
      setAmountToMax,
      tokenBalance,
    } = this.props

    setAmountToMax({
      balance,
      gasTotal,
      sendToken,
      tokenBalance,
    })
  }

  renderContent () {
    const {
      gasLoadingError,
      gasTotal,
      showCustomizeGasModal,
      gasPriceButtonGroupProps,
      gasButtonGroupShown,
      advancedInlineGasShown,
      maxModeOn,
      resetGasButtons,
      setGasPrice,
      setGasLimit,
      gasPrice,
      gasLimit,
      insufficientBalance,
      isMainnet,
    } = this.props

    const gasPriceButtonGroup = (
      <div>
        <GasPriceButtonGroup
          className="gas-price-button-group--small"
          showCheck={false}
          {...gasPriceButtonGroupProps}
          handleGasPriceSelection={async (...args) => {
            await gasPriceButtonGroupProps.handleGasPriceSelection(...args)
            if (maxModeOn) {
              this.setMaxAmount()
            }
          }}
        />
      </div>
    )
    const gasFeeDisplay = (
      <GasFeeDisplay
        gasLoadingError={gasLoadingError}
        gasTotal={gasTotal}
        onReset={() => {
          resetGasButtons()
          if (maxModeOn) {
            this.setMaxAmount()
          }
        }}
        onClick={() => showCustomizeGasModal()}
      />
    )
    const advancedGasInputs = (
      <div>
        <AdvancedGasInputs
          updateCustomGasPrice={(newGasPrice) => setGasPrice(newGasPrice, gasLimit)}
          updateCustomGasLimit={(newGasLimit) => setGasLimit(newGasLimit, gasPrice)}
          customGasPrice={gasPrice}
          customGasLimit={gasLimit}
          insufficientBalance={insufficientBalance}
          customPriceIsSafe
          isSpeedUp={false}
        />
      </div>
    )
    // Tests should behave in same way as mainnet, but are using Localhost
    if (advancedInlineGasShown || (!isMainnet && !process.env.IN_TEST)) {
      return advancedGasInputs
    } else if (gasButtonGroupShown) {
      return gasPriceButtonGroup
    }
    return gasFeeDisplay
  }

  render () {
    const { gasFeeError } = this.props

    return (
      <SendRowWrapper
        label={`${this.context.t('transactionFee')}:`}
        showError={gasFeeError}
        errorType="gasFee"
      >
        { this.renderContent() }
      </SendRowWrapper>
    )
  }

}
