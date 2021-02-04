import { connect } from 'react-redux'

import Create from '../../page/Set/Class/Create'
import { setSchoolValue, setClassValue } from '../../redux/actions/createClass'
import {setDropDowmValue} from '../../redux/actions/dropDowm'
import {singleBoxFocusValue} from '../../redux/actions/singleBox'
export default connect(state => ({
  createClass: state.createClass,
  dropDowm: state.dropDowm,
  singleBox: state.singleBox
}), {
  setSchoolValue,
  setClassValue,
  setDropDowmValue,
  singleBoxFocusValue

})(Create)
