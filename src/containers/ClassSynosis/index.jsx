import { connect } from 'react-redux'
import ClassSynopsis from '../../components/content/ClassSynopsis'
import { putClassMember } from '../../redux/actions/classSynopsis'


export default connect(
  state => ({
    classMember: state.classMember
  }),
  {
    putClassMember 
  })(ClassSynopsis)