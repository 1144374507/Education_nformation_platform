import { connect } from 'react-redux'
import Teachers from '../../../page/Set/Class/Detail/Teachers'
import {putClassMember} from '../../../redux/actions/classSynopsis'
function a(state) {
  // console.log(state);
  return {
    classMember: state.classMember
  }
}
function b(dispatch) {
  return {
    putClassMember: (data) => { dispatch(putClassMember(data)) }
  }
}

export default connect(a, b)(Teachers)