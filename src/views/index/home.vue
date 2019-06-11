<template>
    <div>
       <el-row class="container">
           <!-- 头部 -->
           <el-col :span='24' class="topbar-wrap">
               <header-top></header-top>
           </el-col>
           <!-- 中间页 -->
           <el-col :span='24' class="main">
               <!-- 左侧导航 -->
               <user-left></user-left>
               <!-- 右侧内容区 -->
               <section class="content-container">
                   <div class="gtid-content bg-purple-light">
                       <el-col :span='24' class="content-wrapper">
                           <transition name="fade" mode="out-in">
                           <router-view></router-view>
                           </transition>
                       </el-col>
                   </div>
               </section>
           </el-col>
       </el-row>
    </div>
</template>
<script>
import headerTop  from '../../components/Header'
import userLeft  from '../../components/UserLeft'
export default {
    components:{
        headerTop,
        userLeft
    }
}
</script>