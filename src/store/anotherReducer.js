const INITIAL_STATE = ['Other 1', 'Other 2']

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_OTHER':
      return { ...state, data: [...state.data, action.title] }
    default:
      return state
  }
}
