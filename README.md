# 路由

vue 有一个官方提供的 路由类库 vue-router


#### 使用步骤
1. 安装
  npm install vue-router --save

  yarn add vue-router

2. 配置 vue-router 的配置文件 (主要地方)

3. 在 new Vue 的地方，引入配置文件，并设置 router 的选项。

4. 页面中哪里需要切换，哪里就放置一个坑（router-view）(路由视图)

5. 需要跳转页面，可以使用 router-link

#### vue-router 引入之后，全局给了我们两个组件
1. router-link    =>  a
2. router-view    =>  div  => 坑 (路由视图)


#### 路由的层级

1. 一级路由   整个页面发生变化

2. 二级路由   一级路由页面中的某个位置有公用，其余位置的变化，那个其余的路由就是二级路由。

3. 三级路由

-----


1. 设置 viewport

2. reset.css
  ? 思考你的资源文件，是需要采用 模块的方式去加载，还是老方法去加载。
    模块的方式去加载 - src
    老方式          - public

3. vue中使用 ajax

  vue-resoure vue专门用来处理ajax请求的。

  axios       第三方提供的封装了ajax请求的一个类库。尤雨溪推荐我们使用这个，于是不再对 vue-resoure 进行维护。

# axios

  对ajax封装成了 promise 。

  使用：
  1. script
  2. npm 模块方式

  调用它的api

  1. get
  axios.get(url, config)

  2. post
  axios.post(url, data, config)

  3. 普通
  axios({
    methods: '',
    url: ''
  })

  config配置
  1. params   请求参数，    url?name=张三&age=18
    params: {
      name: '张三',
      age: 19
    }

  2. headers  请求头信息

  返回的格式


# 后台在 nodejs 中设置 允许 跨域
