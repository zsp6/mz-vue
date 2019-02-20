// router.js 就是 vue-router 的配置文件
// 1. 引入 vue
// 2. 引入 vue-router
// 3. 使用 vue.use(vue-router)
// 4. 路由配置
// new VueRouter({
//   router: [
//   ]
// })
// 5. 暴露这个配置
import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import City from './views/City.vue';
import Home from './views/Home.vue';
import Detail from './views/Detail.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  // 配置路由对照表  url -> 视图组件
  // localhost:8080/#/films     -> Film.vue
  // localhost:8080/#/cinemas   -> Cinema.vue
  // localhost:8080/#/center  -> Center.vue
  // mode: history, // hash | history
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        // PS: 不是一级路由的话,path路径前面不要加 /
        // PS: 二级或二级以上的路由,他们的url地址会从一级路由开始一直做追加的
        // localhost:8080/#/fillms
        {
          path: 'films',
          component: Film
        },
        // localhost:8080/#/cinemas
        {
          path: 'cinemas',
          component: Cinema
        },
        // localhost:8080/#/center
        {
          path: 'center',
          component: Center
        },
        // localhost:8080/#/ -> localhost:8080/#/films
        {
          path: '',
          // component: Film
          redirect: '/films'
        }
      ]
    },
    // 城市选择页
    {
      path: '/city',
      component: City
      // components: {
      //   top: City,
      //   bottom: Detail,
      //   default: Home
      // }
    },
    // 详情页
    {
      path: '/detail/:id',
      component: Detail
      // props: true
      // props: {
      //   id: 12343
      // }
    },
    // 设置一个 通配符的一级路由,当url地址无法与上面的规则匹配的时候,就会跟我匹配
    {
      path: '*',
      redirect: '/films'
    }
  ]
})

export default router;
