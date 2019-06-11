<template>
   <div>
    <el-row class="warp">
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{path:'/'}"><b>首页</b></el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="24" class="warp-main">
        <section class="chart-container">
          <el-row>
            <el-col :span="3">
              <el-card>
                <div style="padding: 14px;">
                  <span>公司LOGO</span>
                  <div class="bottom clearfix">
                    <time class="time">{{currentDate }}</time>
                  </div>
                </div>
              </el-card>

            </el-col>
          </el-row>
        </section>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    data() {
      return {
        currentDate: new Date(),
      }
    }
}
</script>