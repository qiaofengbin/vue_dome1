<!--头部（Header.vue）-->
<template>
  <div class="topbar-header">
    <div class="topbar-logo topbar-btn">
      <a href="/">
        <img src="favicon.ico" alt>
      </a>
    </div>
    <div class="topbar-title topbar-btn">
      <span>后台管理系统</span>
    </div>
    <div class="topbar-account topbar-btn">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link userinfo-inner">
          <i class="iconfont icon-user"></i>
          {{sysUserName}}
          aaaaaaaaa
          <i class="iconfont icon-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="userinfo">个人信息</el-dropdown-item>
          <el-dropdown-item @click.native="editpwd">修改密码</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      sysUserName: "",
      sysUserAvatar: "",
      collapsed: false
    };
  },
  mounted() {
    // var userSession = this.getCookie("session");
    // if (userSession) {
    //   this.sysUserName = userSession || "";
    // }
  },
  methods: {
    //退出
    logout() {
      this.$confirm("确认要退出吗？", "提示", {})
        .then(() => {
          localStorage.removeItem('user');
           this.$router.push({
                path: "/login",
                query: { redirect: this.$router.currentRoute.fullPath }
              });
          // this.$fetch("m/logout").then(res => {
          //   if (res.errCode == 200) {
          //     this.delCookie("session");
          //     this.delCookie("u_uuid");
          //     this.$router.push({
          //       path: "/",
          //       query: { redirect: this.$router.currentRoute.fullPath }
          //     });
          //   } else {
          //     console.log(res.errMsg);
          //   }
          // });
        })
        .catch(() => {});
    },
    //个人信息
    userinfo() {
      this.$router.push("/userinfo");
    },
    //修改密码
    editpwd() {
      this.$router.push("/editpwd");
    }
  }
};
</script>
<style lang="" scope="">
.topbar-header{
  display: flex;
  padding: 0 20px;
}
.topbar-btn {
    color: #fff
}

.topbar-btn:hover {
    background-color: #58b7ff
}

.topbar-logo {
    width: 49px;
    line-height: 26px
}

.topbar-logo,
.topbar-title {
    /* float: left; */
    border-right: 1px solid #1d8ce0;
    /* text-align: center */
}

.topbar-title {
    /* width: 129px */
    flex: 1;
    text-align: left;
}

.topbar-account {
    /* float: right; */
    padding-right: 9pt;
    font-size: 9pt
}

.userinfo-inner {
    padding-left: 10px;
    color: #fff;
    cursor: pointer
}
    .topbar-logo img{
        width: 100%;
        display: block;
    }
</style>