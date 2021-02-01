// import { func } from "prop-types";

// 添加class
function addClass(obj, cn) {
  // 检查是否有cn
  if (!hasClass(obj, cn)) {
    obj.className += " " + cn
  }
}
// 检查是否有cn
function hasClass(obj, cn) {
  const reg = new RegExp("\\b" + cn + "\\b")
  return reg.test(obj.className);
}
// 删除class
function deleClass(obj, cn) {
  // 查找是否存在
  const reg1 = new RegExp("\\b" + cn + "\\b", "ig");
  // console.log(reg1);
  //删除class
  obj.className = obj.className.replace(reg1, "");
}
/*
 * toggleClass 可以用来切换一个类
 * 	如果元素中具有该类，则删除
 * 	如果元素中没有该类，则添加
 */
function toggleClass(obj, cn) {
  //判断obj中是否含有cn
  if (hasClass(obj, cn)) {
    //有，则删除
    deleClass(obj, cn);
  } else {
    //没有，则添加
    addClass(obj, cn);
  }
}

export {
  addClass,
  hasClass,
  deleClass,
  toggleClass
}