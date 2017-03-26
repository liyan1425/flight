import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index.vue'
import Login from '../views/login/index.vue'
import Register from '../views/register/index.vue'
import PersonalCenter from '../views/personalCenter/index.vue'

Vue.use(Router)
let router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
            name: 'index',       //名称
            path: '/',          //路径
            component: Index     //组件
        },
        {
            name: 'login',       //名称
            path: '/login',          //路径
            component: Login     //组件
        },
        {
            name: 'register',       //名称
            path: '/register',          //路径
            component: Register     //组件
        },
        {
            name: 'personalCenter',       //名称
            path: '/personalCenter',          //路径
            component: PersonalCenter     //组件
        },
    ]
})
// router.beforeEach((to, from, next) => {     //在每次路由跳转之前都会先执行其中的代码，再通过调用next()执行后续操作
//     next()
// })

// router.afterEach((to, from) => {})      //每次路由跳转之后都会执行其中的代码
export default router
