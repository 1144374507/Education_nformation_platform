import { CLASSDETAIL } from '../counstant'
const initState = {}
export default function putClassMember(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case CLASSDETAIL:
      return { ...preState, ...data }
    default:
      return preState
  }
}