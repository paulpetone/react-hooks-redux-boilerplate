import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import itemsReducer from './reducers/itemsReducer'
import requestsReducer from './reducers/requestsReducer'

const store = createStore(
  combineReducers({
    items: itemsReducer,
    requests: requestsReducer,
  }),
  composeWithDevTools()
)

export default store
