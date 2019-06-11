import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import login from '../views/login' //登录页
import home from '../views/index/home' // 首页
import right from '../components/UserRight' // 右侧
import userlist from '../views/user/UserList' // 用户列表
import certification from '../views/user/Certification' //用户审核
import userlook from '../views/user/UserLook' //用户查看
import usercertlook from '../views/user/UserCertLook' //用户审核查看

import sellbill from '../views/ticket/SellBill' //卖票信息
import buybill from '../views/ticket/BuyBill' //买票信息
import changebill from '../views/ticket/ChangeBill' //换票信息
import billlist from '../views/bill/list' //票据列表
import billinfo from '../views/bill/info' //票据详细
import addbill from '../views/bill/add' //添加票据

import editsellbill from '../views/ticket/EditSellBill' //修改卖票信息
import editbuybill from '../views/ticket/EditBuyBill' //修改买票信息
import editchangebill from '../views/ticket/EditChangeBill' //修改换票信息
import lookbill from '../views/ticket/LookBill' //查看详细
import lookbuybill from '../views/ticket/LookBuyBill' //查看买票详细

// import ticketstatus from '../views/ticket/TicketStatus' //票据状态
// import addticket from '../views/ticket/AddTicket' //新建开票信息

import userinfo from '../views/user/UserInfo' //个人信息
import editpwd from '../views/user/EditPwd' //修改密码
import webbasic from '../views/user/WebBasic' //网站基本配置

/* 图片管理 */
import imglist from '../views/image/ImgList' //图片列表
import addimg from '../views/image/AddImg' //图片添加
import editimg from '../views/image/EditImg' //图片编辑

/* 新闻信息 */
import newtype from '../views/newstype/TypeList' //新闻分类
import addnewstype from '../views/newstype/AddType' //添加新闻分类
import editnewstype from '../views/newstype/EditType' //编辑新闻分类

import newlist from '../views/news/NewsList' //新闻列表
import addnews from '../views/news/AddNews' //添加新闻
import editnews from '../views/news/EditNews' //编辑新闻
import looknews from '../views/news/LookNews' //查看新闻


import notFound from '../views/404'


Vue.use(Router)
Vue.use(VueResource)

const router = new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '登录页'
        }
    }, {
        path: '/404',
        name: '404',
        component: notFound,
    }, {
        path: '/',
        name: 'home',
        component: home,
        leaf: true, //只有一个节点
        menuShow: true,
        meta: {
            requireAuth: true,
            title: '首页'
        },
        iconCls: 'iconfont icon-home', //图标样式
        children: [
            { path: '/home', component: right, name: '首页', menuShow: true, meta: { requireAuth: true } }
        ]
    }, {
        path: '/',
        component: home,
        name: '用户管理',
        menuShow: true,
        meta: {
            requireAuth: true,
            title: '用户管理'
        },
        iconCls: 'iconfont icon-users',
        children: [
            { path: '/userlist', component: userlist, name: '用户列表', menuShow: true, meta: { requireAuth: true } },
            { path: '/certification', component: certification, name: '用户认证审核', menuShow: true, meta: { requireAuth: true } },
            { path: '/userlook', component: userlook, name: '查看用户信息', menuShow: false, meta: { requireAuth: true } },
            { path: '/usercertlook', component: usercertlook, name: '用户审核信息', menuShow: false, meta: { requireAuth: true } },
        ]
    }, {
        path: '/',
        component: home,
        name: '信息管理',
        menuShow: true,
        iconCls: 'iconfont icon-books',
        children: [
            { path: '/sellbill', component: sellbill, name: '卖票信息', menuShow: true, meta: { requireAuth: true } },
            { path: '/buybill', component: buybill, name: '买票信息', menuShow: true, meta: { requireAuth: true } },
            { path: '/changebill', component: changebill, name: '换票信息', menuShow: true, meta: { requireAuth: true } },
            { path: '/bill/editsellbill', component: editsellbill, name: '编辑卖票信息', menuShow: false, meta: { requireAuth: true } },
            { path: '/bill/editbuybill', component: editbuybill, name: '编辑买票信息', menuShow: false, meta: { requireAuth: true } },
            { path: '/bill/editchangebill', component: editchangebill, name: '编辑换票信息', menuShow: false, meta: { requireAuth: true } },
            { path: '/bill/lookbill', component: lookbill, name: '查看票据信息', menuShow: false, meta: { requireAuth: true } },
            { path: '/bill/lookbuybill', component: lookbuybill, name: '查看买票信息', menuShow: false, meta: { requireAuth: true } }
        ]
    }, {
        path: '/bill',
        component: home,
        name: '票据管理',
        menuShow: true,
        iconCls: 'iconfont icon-books',
        children: [
            { path: '/bill/list', component: billlist, name: '已开票据列表', menuShow: true, meta: { requireAuth: true } },
            { path: '/bill/info', component: billinfo, name: '票据详细页', menuShow: false, meta: { requireAuth: true } },
            { path: '/bill/add', component: addbill, name: '新建开票信息', menuShow: true, meta: { requireAuth: true } },
            { path: '/bill/update', component: addbill, name: '修改票据信息', menuShow: false, meta: { requireAuth: true } }
        ]
    }, {
        path: '/',
        component: home,
        name: '资讯管理',
        menuShow: true,
        iconCls: 'iconfont icon-books2',
        children: [
            { path: '/newtype/newtype', component: newtype, name: '资讯分类', menuShow: true, meta: { requireAuth: true } },
            { path: '/newtype/addnewstype', component: addnewstype, name: '添加资讯分类', menuShow: false, meta: { requireAuth: true } },
            { path: '/newtype/editnewstype', component: editnewstype, name: '编辑资讯分类', menuShow: false, meta: { requireAuth: true } },
            { path: '/new/newlist', component: newlist, name: '资讯列表', menuShow: true, meta: { requireAuth: true } },
            { path: '/new/addnews', component: addnews, name: '添加新闻', menuShow: false, meta: { requireAuth: true } },
            { path: '/new/editnews', component: editnews, name: '编辑新闻', menuShow: false, meta: { requireAuth: true } },
            { path: '/new/looknews', component: looknews, name: '查看新闻', menuShow: false, meta: { requireAuth: true } }
        ]
    }, {
        path: '/',
        component: home,
        name: '图片管理',
        menuShow: true,
        iconCls: 'iconfont icon-setting1',
        children: [
            { path: '/img/addimg', component: addimg, name: '添加图片', menuShow: true, meta: { requireAuth: true } },
            { path: '/img/imglist', component: imglist, name: '图片管理', menuShow: true, meta: { requireAuth: true } },
            { path: '/img/editimg', component: editimg, name: '编辑图片', menuShow: false, meta: { requireAuth: true } }
        ]
    }, {
        path: '/',
        component: home,
        name: '系统设置',
        menuShow: true,
        iconCls: 'iconfont icon-setting1',
        children: [
            { path: '/userinfo', component: userinfo, name: '个人信息', menuShow: true, meta: { requireAuth: true } },
            { path: '/editpwd', component: editpwd, name: '修改密码', menuShow: true, meta: { requireAuth: true } },
            { path: '/webbasic', component: webbasic, name: '基本配置', menuShow: true, meta: { requireAuth: true } },
        ]
    }]
})

router.beforeEach((to, from, next) => {
    let user = localStorage.getItem('user')
        // 如果已经登录，那我不干涉你，让你随便访问
    if (user) {
        next()
    } else {
        // 如果没有登录，但你访问其他需要登录的页面，那我就让你跳到登录页面去
        if (to.path !== '/login') {
            next({ path: '/login' })
        } else {
            next()
        }
    }
    if (to.meta.title) {
        document.title = to.meta.title;
    }
});
export default router;