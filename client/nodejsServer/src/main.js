import Vue from 'vue';
import App from './views/app';
import VueRouter from 'vue-router';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//import './assets/js/fabric.js'
Vue.prototype.$http = axios;

Vue.use(ElementUI);
//注册路由插件
Vue.use(VueRouter)


new Vue({
    el: '#app',
    router, //将路由配置添加到vue实例中
    render: h => h(App),
    data: {
        // 空的实例放到根组件下，所有的子组件都能调用
        Bus: new Vue()
    }
});