import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import itemsReducer from './itemsReducer'
import anotherReducer from './anotherReducer'

const store = createStore(
  combineReducers({
    items: itemsReducer,
    anotherData: anotherReducer
  }),
  composeWithDevTools()
)

export default store
