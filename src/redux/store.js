import { createStore, combineReducers } from 'redux'
import createClass from './reducers/createClass'
import dropDowm from './reducers/dropDowm'
import singleBox from './reducers/singleBox'
import classMember from './reducers/classSynopsis'
const reducers = combineReducers({
  dropDowm,
  createClass,
  singleBox,
  classMember
})

export default createStore(reducers)