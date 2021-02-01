import { SETDROPDOWMVALUE } from '../counstant'
const initState = {}
export default function setDropDowmValue(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case SETDROPDOWMVALUE:
      return { ...preState, ...data }
    default:
      return preState
  }
}

