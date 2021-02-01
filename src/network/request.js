import axios from 'axios'


// {//config 的参数
//   //请求类型
//   method: 'POST',
//     //URL
//   url: 'http://localhost:3001',
//       //设置请求体
//   data: {
//     title: "今天天气不错, 还挺风和日丽的",
//       author: "张三"
//   }
export function request(config) {

  // 1.创建axios的实例对象
  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000
  })

  // 2.axios 的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    config => {
      // 拦截之后必须将结果返回
      return config
    },
    err => {
      console.log(err);
    })

  // 2.2.响应拦截
  instance.interceptors.response.use(
    res => {
      // console.log(res);
      // 只需要将data放回即可 
      return res.data
    },
    err => {
      console.log(err);
    })

  // 3.发送真正的网络请求
  return instance(config)//本身(源码)就是一个 promise 所以可以用then catch


}