import { CLASSDETAIL } from '../counstant'
export function putClassMember(data) {
  return {
    type: CLASSDETAIL,
    data
  }
}