const INITIAL_STATE = [
  'Item 1',
  'Item 2',
  'Item 3'
]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [ ...state, action.title ]
    default:
      return state
  }
}
