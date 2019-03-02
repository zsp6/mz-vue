import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import http from './utils/http';
import './assets/styles/reset.less';
import 'nprogress/nprogress.css';
import './assets/styles/common.less';

Vue.prototype.$http = http;
// 让浏览器console里面不出现一个生产的提示
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
