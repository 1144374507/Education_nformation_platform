import { SINGLEBOXFOCUSVALUE } from '../counstant'
const initState = {}
export default function singleBoxFocusValue(perState = initState, action) {
  const { type, data } = action
  switch (type) {
    case SINGLEBOXFOCUSVALUE:
      return { ...perState, ...data }
    default:
      return perState
  }
}