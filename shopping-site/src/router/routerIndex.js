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
            component: Home
        },
        {
            path:'/register',
            component: Register
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/search',
            component: Search
        }
    ],
});

// 创建 Vue 应用实例
const app = createApp(App);

// 使用路由
app.use(router);


export default router;
