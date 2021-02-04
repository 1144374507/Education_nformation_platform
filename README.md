
<!-- db.json 位于根目录/json_server/db.json -->
<!-- 使用全局json-server命令，启动mock服务。 -->
$ json-server --watch --port 3001 db.json

<!-- 开发时运行 -->
$ npm start

<!-- 打包 -->
$ npm run build

<!-- 打包后运行 -->
$ serve build



<!-- 目录结构介绍 -->
 json-server ----使用json-server提供的RESTful API动态获取数据
 src
   components----存放组件
    commom---普通组件，其他项目也能使用的组件
      DropDowm----js实现下拉框<select>
      SingleBox----js实现单选按钮
    conten---与项目相关的组件

  containers---容器组件
  func---封装的函数方法
  network---封装的网络请求 减少项目和第三方插件的嵌套
  page----路由组件
  redux---统一的状态管理配置文件

