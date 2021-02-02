import { createStore } from 'redux'
//引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'//引入汇总之后的reducer
export default createStore(reducers, composeWithDevTools())