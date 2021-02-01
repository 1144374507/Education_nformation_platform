import { SETSCHOOL, SETCLASS } from '../counstant'
const newClass = {}
export default function createClassReducer(praState = newClass, action) {
  const { type, data } = action
  switch (type) {
    case SETSCHOOL:
      return { ...praState, ...data }
    case SETCLASS:
      return { ...praState, ...data }
    default:
      return praState
  }
}

