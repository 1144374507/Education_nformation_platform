import { connect } from 'react-redux'

import DropDowm from '../../components/commom/DropDowm'
import { setDropDowmValue } from '../../redux/actions/dropDowm'

export default connect(state => ({
  dropDowm: state.dropDowm
}), {
  setDropDowmValue
})(DropDowm)