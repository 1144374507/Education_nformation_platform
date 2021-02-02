import { connect } from 'react-redux'
import ClassSynopsis from '../../components/content/ClassSynopsis'
import {putClassMember} from '../../redux/actions/classSynopsis'
function a(state) {
  // console.log(state);
  return {
    classMember:state.classMember
  }
}
function b(dispatch) {
  return {
    putClassMember:(data)=>{dispatch(putClassMember(data))}
  }
}
export default connect(a, b)(ClassSynopsis)