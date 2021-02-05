import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { LegacyI18nProvider } from '../../ui/app/contexts/i18n'

export function mountWithStore (component, store) {
  const context = {
    store,
  }
  return mount(component, { context })
}

export function mountWithRouter (component, store = {}, pathname = '/') {

  // Instantiate router context
  const router = {
    history: new MemoryRouter().history,
    route: {
      location: {
        pathname,
      },
      match: {},
    },
  }

  const createContext = () => ({
    context: {
      router,
      t: (str) => str,
      store,
    },
    childContextTypes: {
      router: PropTypes.object,
      t: PropTypes.func,
      store: PropTypes.object,
    },
  })

  const Wrapper = () => (
    <MemoryRouter initialEntries={[{ pathname }]} initialIndex={0}>
      {component}
    </MemoryRouter>
  )

  return mount(<Wrapper />, createContext())
}

export function renderWithProvider (component, store) {

  const Wrapper = () => (
    <Provider store={store}>
      <LegacyI18nProvider>
        { component }
      </LegacyI18nProvider>
    </Provider>
  )

  return render(<Wrapper />)
}
