import { createContext, useReducer, useContext } from 'react'
import { contextReducer, INITIAL_STATE } from './contextReducer'

export const TrustFundContext = createContext()

const AppActions = () => {
  const [state, dispatch] = useReducer(contextReducer, INITIAL_STATE)

  const toggleAuth = () => {
    dispatch({
      type: 'TOGGLE_AUTH',
    })
  }

  return {
    state,
    toggleAuth,
  }
}

const TrustFundProvider = ({ children }) => {
  const { state, ...props } = AppActions()

  const value = {
    ...state,
    isAuthOpen: state.isAuthOpen,
    ...props,
  }

  return <TrustFundContext.Provider value={value}>{children}</TrustFundContext.Provider>
}

const useTrustFundContext = () => {
  const context = useContext(TrustFundContext)
  return context
}

export { TrustFundProvider, useTrustFundContext }
