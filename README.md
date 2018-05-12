## 前面
vue + webpack 实现一个简单的 todo app

## [项目预览](http://5bang.top/vue-todo/dist/index.html)
![todo-app](http://oxuk2wfkl.bkt.clouddn.com/todo1.png)

## 目录结构 

	|-- app                            
	|-- dist                             // 打包的目录
	|   |-- app.js                       // 单独打包类库
	|   |-- bundle.js                    // 分离样式 
	|   |-- index.html                   // 编译后的HTML文件	
	|   |-- main.js                      // js文件
	|   |-- style.css                    // 由stylus编译生成
	|   |-- ventor.js                    
    |-- src                              // 项目源码
	|   |-- assets                      
    |       |-- images                   // 图片
    |       |-- styles                   // css样式
	|   |-- todos
    |       |-- header.vue               // 页面头部 
    |       |-- tabs.vue                 // 切换任务状态 
    |       |-- items.vue                // 任务详情
    |       |-- todo.vue                 // 处理任务逻辑
    |       |-- footer.vue               // 页面底部 
	|   |-- app.vue                      // 页面入口文件
	|   |-- index.js                     // 程序入口文件，加载组件
    |-- node_modules                     // node模块
	|-- .gitignore                       // 忽略的文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- .babelrc                         // 语法编译配置
	|-- postcss.config.js                // 执行gulp任务
	|-- webpack.config.js                // webpack配置文件
	|-- README.md                        // 说明

## 待优化

* 移动端的适配
* 添加任务标签
* 对任务进行筛选