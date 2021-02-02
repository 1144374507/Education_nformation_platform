import { connect } from 'react-redux'
import Detail from '../../page/Set/Class/Detail'
import { putClassMember } from '../../redux/actions/classSynopsis'

function a(state) {
  return {
    classMember: state.classMember
  }
}
function b(dispatch) {
  // console.log('111');
  return {
    putClassMember: (data) => { dispatch(putClassMember(data)) }
  }
}

export default connect(a, b)(Detail)