/* 
  该文件专门为createClass组件生成action对象
*/
import { SETSCHOOL } from '../counstant'
export const setSchoolValue = (data) => {
  return {
    type: SETSCHOOL,
    data
  }
}
export const setClassValue = (data) => {
  return {
    type: 'setClass',
    data
  }
}