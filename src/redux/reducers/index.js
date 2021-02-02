import { combineReducers } from 'redux'
import createClass from './createClass'
import dropDowm from './dropDowm'
import singleBox from './singleBox'
import classMember from './classSynopsis'
export default combineReducers({
  dropDowm,
  createClass,
  singleBox,
  classMember
})

