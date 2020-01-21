import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import itemsReducer from './reducers/itemsReducer'
import requestsReducer from './reducers/requestsReducer'

const isDev = process.env.NODE_ENV === 'development'
const store = createStore(
  combineReducers({
    items: itemsReducer,
    requests: requestsReducer,
  }),
  isDev ? composeWithDevTools() : undefined
)

export default store
