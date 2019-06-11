<!--左边（UserLeft.vue）-->
<template>
  <div style="overflow-y:scroll">
    <aside :class="collapsed?'menu-collapsed' : 'menu-expanded'" style="width:200px;">
      <!--展开折叠开关-->
      <div class="menu-toggle" @click.prevent="collapse">
        <i class="iconfont icon-menufold" v-show="!collapsed"></i>
        <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
      </div>

      <!--菜单展开时的显示情况-->
      <el-menu v-show="!collapsed" default-active="0" @open="handleOpen" @close="handleClose" router>
        <template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
          <el-submenu v-if="!item.leaf" :index="index+''" :key="index">
            <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
            <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow">
              {{term.name}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path" class="el-submenu__title" :key="index">
            <i :class="item.iconCls"></i>{{item.children[0].name}}
          </el-menu-item>
        </template>
      </el-menu>

      <!--菜单折叠后的显示情况
这里需要说明一下： $router.options.routes，其实就是从路由获取菜单数据，具体往下面看。这是重点，要不然你都不知道数据从哪里过来的。其实这里的数据可以做到数据库中，然后直接从数据库中获取。
-->
      <ul v-show="collapsed" class="el-menu collapsed" ref="menuCollapsed" >
        <template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
          <li v-if="!item.leaf" :index="index+''" style="position: relative;" :key="index">
            <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
            <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
              <li v-for="term in item.children" :key="term.path" v-if="term.menuShow" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==term.path?'is-active':''"
                  @click="$router.push(term.path)">{{term.name}}</li>
            </ul>
          </li>
          <li v-else-if="item.leaf&&item.children&&item.children.length" class="el-menu-item el-submenu__title" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)" :key="index">
            <i :class="item.iconCls"></i>
          </li>
        </template>
      </ul>

    </aside>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sysUserName: '',
        sysUserAvatar: '',
        collapsed: false
      }
    },
    mounted() {
     //初始化
    },
    methods: {
      handleOpen() {
      },
      handleClose() {
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      showMenu(i, status){
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
