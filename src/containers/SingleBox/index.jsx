import { connect } from 'react-redux'

import SingleBox from '../../components/commom/SingleBox'
import { singleBoxFocusValue } from '../../redux/actions/singleBox'

export default connect(
  state => ({
    singleBox: state.SingleBox
  }),
  {
    singleBoxFocusValue
  })(SingleBox)