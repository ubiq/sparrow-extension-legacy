import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'
import { mountWithRouter } from '../../../../../../test/lib/render-helpers'
import Welcome from '..'

describe('Welcome', function () {
  const mockStore = {
    metamask: {},
  }

  const store = configureMockStore()(mockStore)

  after(function () {
    sinon.restore()
  })

})
