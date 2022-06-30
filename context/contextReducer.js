export const INITIAL_STATE = {
  isAuthOpen: false,
}

export const contextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_AUTH':
      return {
        ...state,
        isAuthOpen: !state.isAuthOpen,
      }
    default:
      return state
  }
}
