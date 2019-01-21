import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/components/main.vue'
import Info from './views/components/info.vue'
//前端路由

//创建 router 实例

const routes = [{
    path: '/',
    component: Main
}, {
    path: '/info',
    name: 'info',
    component: Info
}];

const router = new Router({
    mode: 'history',
    routes
});

export default router;