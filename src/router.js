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

Vue.use(VueRouter);

let router = new VueRouter({
  // 配置路由对照表  url -> 视图组件
  // localhost:8080/#/films     -> Film.vue
  // localhost:8080/#/cinemas   -> Cinema.vue
  // localhost:8080/#/center  -> Center.vue
  routes: [
    {
      path: '/films',
      component: Film
    },
    {
      path: '/cinemas',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    }
  ]
})

export default router;
