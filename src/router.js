import Vue from 'vue'
import Router from 'vue-router'
import {
    Message
} from 'element-ui'

Vue.use(Router)


const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./views/home/home'),
            children: [
                {
                    path: '/',
                    redirect: 'main'
                },
                //===================================================== 主页 =======================================================
                {
                    path: 'main',
                    name: 'mian',
                    component: () => import('./views/main/main')
                },
                //===================================================== 报告打印管理 =======================================================
                {
                    path: 'reportList',
                    name: '个人检测报告',
                    component: () => import('./views/testReport/reportList')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('./views/login/login'),
            name: 'login'
        },
        {
            path: '/report',
            name: '报告模板',
            component: () => import('./views/testReport/report/index'),
            children:[
                {
                    path: 'wholeBodyEcharts',
                    name: '全身健康检测报告数据报告',
                    component: () => import('./views/testReport/report/wholeBodyEcharts')
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {

    if (to.fullPath == '/') {
        if (sessionStorage.getItem('userInfo')) {
            next()
            return
        } else {
            Message({
                message: '会话已过期,请重新登录!',
                showClose: true,
                type: 'warning'
            });

            next({
                path: '/login'
            })
            return
        }
    } else if (to.fullPath == '/login'){
        next()
        return
    } else {
        if (sessionStorage.getItem('userInfo')) {
            next()
            return
        } else {
            Message({
                message: '会话已过期,请重新登录!',
                showClose: true,
                type: 'warning'
            });

            next({
                path: '/login'
            })
            return
        }
    }
})
export default router
