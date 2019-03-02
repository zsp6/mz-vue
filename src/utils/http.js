// 对axios的封装 方便服务器与本地访问的地址可以自动转换
import axios from 'axios';

// creat 方法相当于是 new 一个 axios 的实例对象
const http = axios.create();

// 配置 http 的一些配置选项
http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://129.28.119.66:3000' : 'http://localhost:3000';

// 请求的最大等待时间
http.defaults.timeout = 10000;
export default http;
