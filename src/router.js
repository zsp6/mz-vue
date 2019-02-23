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
// import Film from './views/Film.vue';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';
// import City from './views/City.vue';
// import Home from './views/Home.vue';
// import Detail from './views/Detail.vue';
// import Card from './views/Card.vue';
// import Money from './views/Money.vue';
// import Set from './views/Set.vue';
// import Login from './views/Login.vue';
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false });// 设置顶部进度条的小圆圈不出现

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  // 配置路由对照表  url -> 视图组件
  // localhost:8080/#/films     -> Film.vue
  // localhost:8080/#/cinemas   -> Cinema.vue
  // localhost:8080/#/center  -> Center.vue
  // mode: history, // hash | history
  routes: [
    {
      path: '/',
      // component: Home,
      // const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue'), 路由懒加载
      component: () => import('./views/Home/Index.vue'),
      children: [
        // PS: 不是一级路由的话,path路径前面不要加 /
        // PS: 二级或二级以上的路由,他们的url地址会从一级路由开始一直做追加的
        // localhost:8080/#/fillms
        {
          path: 'films',
          component: () => import('./views/Home/Film/Index.vue')
        },
        // localhost:8080/#/cinemas
        {
          path: 'cinemas',
          component: () => import('./views/Home/Cinema/Index.vue')
        },
        // localhost:8080/#/center
        {
          path: 'center',
          component: () => import('./views/Home/Center/Index.vue')
        },
        {
          path: 'tuan',
          component: () => import('./views/Home/Tuan/Index.vue')
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
      component: () => import('./views/City/Index.vue')
      // components: {
      //   top: City,
      //   bottom: Detail,
      //   default: Home
      // }
    },
    // 详情页
    {
      path: '/detail/:id',
      component: () => import('./views/Detail/Index.vue')
      // props: true
      // props: {
      //   id: 12343
      // }
    },
    // 设置一个 通配符的一级路由,当url地址无法与上面的规则匹配的时候,就会跟我匹配
    {
      path: '*',
      redirect: '/films'
    },
    {
      path: '/card',
      component: () => import('./views/Card/Index.vue')
    },
    {
      path: '/money',
      // component: {
      //   render (h) {
      //     return h('div', '余额页面');
      //   }
      // }
      component: () => import('./views/Money/Index.vue')
    },
    {
      path: '/set',
      // component: {
      //   render (h) {
      //     return h('div', '设置页面');
      //   }
      // }
      component: () => import('./views/Set/Index.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login/Index.vue')
    }
  ]
})
/**
 * a页面去到b页面
 * to 将要去的路由对象  b
 * from 从哪里去的路由对象 a
 * next 是否允许过去
 * a -> b 如果不想去到b next(false) 或者不适用 next()
 *        如果允许就要写 next()
 *        如果不允许,并且想让他去别的页面  next('/login')
 */
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 调用NProgress.start()
  NProgress.start();
  let nickname = sessionStorage.getItem('nickname');
  let list = ['/card', '/money', '/set'];
  if (list.indexOf(to.path) > -1 && !nickname) {
    // 阻止
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();// 允许
  }
})
// 全局后置守卫
router.afterEach((to, from) => {
  // 完成 NProgress.down()
  NProgress.done();
})

export default router;
