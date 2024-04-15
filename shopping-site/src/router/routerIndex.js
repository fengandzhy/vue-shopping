import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from "@/App.vue";
import Home from '@/pages/home/homeIndex.vue';
import Register from '@/pages/register/registerIndex.vue';
import Login from '@/pages/login/loginIndex.vue';
import Search from '@/pages/search/searchIndex.vue';


// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/home',
            component: Home,
            meta: {show:true}
        },
        {
            path:'/register',
            component: Register,
            meta: {show:false}
        },
        {
            path:'/login',
            component: Login,
            meta: {show:false}
        },
        {
            path:'/search',
            component: Search,
            meta: {show:true}
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/home'
        }
    ],
});

// 创建 Vue 应用实例
const app = createApp(App);

// 使用路由
app.use(router);


export default router;
