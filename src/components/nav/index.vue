<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue';
const route = useRoute()
const path = ref('/')
onMounted(() => {

})
watch(() => route.path, () => {
  path.value = route.path
})
const handleSelect = () => { }
</script>

<template>
  <div class="nav w-100% h-60px">
    <div class="title">
      <span class="name">虚拟电厂运行管理与监控平台</span>
      <span class="name2">Virtual power plant operation management and monitoring platform</span>
    </div>
    <div class="decoration">
      <div class="d1"></div>
      <div class="d2"></div>
      <div class="d3"></div>
    </div>
    <div class="btn">
      <el-menu popper-class="dx-el-popper" background-color="#252628" :default-active="path" class="el-menu-demo"
        mode="horizontal" router @select="handleSelect">
        <el-menu-item index="/">
          <div class="wrap">首页</div>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <div class="wrap">资源管理</div>
          </template>
          <el-menu-item index="/resources/metaAnalysis">
            <div class="wrap">综合分析</div>
          </el-menu-item>
          <el-menu-item index="/resources/metaOverview">
            <div class="wrap">管理总览</div>
          </el-menu-item>
          <el-menu-item index="/resources/metaEnroll">
            <div class="wrap">资源注册</div>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/realTimeMonitor">
          <div class="wrap">实时状态监测</div>
        </el-menu-item>
        <el-sub-menu index="4">
          <template #title>
            <div class="wrap">负荷预测</div>
          </template>
          <el-menu-item index="/forecast/DataQuery">
            <div class="wrap">数据查询</div>
          </el-menu-item>
          <el-menu-item index="/forecast/multiDimension">
            <div class="wrap">多维度负荷预测</div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <div class="wrap">发电任务管理</div>
          </template>
          <el-menu-item index="/generationTask/priceSignal">
            <div class="wrap">价格信号</div>
          </el-menu-item>
          <el-menu-item index="/generationTask/excitationSignal">
            <div class="wrap">激励信号</div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <div class="wrap">发电任务追溯</div>
          </template>
          <el-menu-item index="/task/motivational">
            <div class="wrap">激励型信息</div>
          </el-menu-item>
          <el-menu-item index="/task/demandResponse">
            <div class="wrap">需求响应详情</div>
          </el-menu-item>
          <el-menu-item index="/task/orderElectric">
            <div class="wrap">有序用电详情</div>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <div class="wrap">运行效果决策</div>
          </template>
          <el-menu-item index="/effect/technical">
            <div class="wrap">技术参数考核</div>
          </el-menu-item>
          <el-menu-item index="/effect/deviation">
            <div class="wrap">偏差率考核</div>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;

  .title {
    width: 440px;
    height: 100%;
    background: linear-gradient(90deg, rgba(2, 153, 255, 0.59) 0%, rgba(36, 140, 210, 0.1) 100%);
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 8px 0px;

    .name {
      font-family: Source Han Sans, Source Han Sans;
      font-weight: 700;
      font-size: 21px;
      color: #FFFFFF;
      line-height: 31px;
      text-shadow: 0px 3px 8px rgba(255, 255, 255, 0.3);
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .name2 {
      font-family: Source Han Sans, Source Han Sans;
      font-weight: 400;
      font-size: 11px;
      color: #7294B9;
      line-height: 15px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .decoration {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;

    div {
      width: 20px;
      height: 45px;
      transform: skew(-20deg, 0deg);

      &.d1 {
        border: 1px solid #3B608B;
        border-right: 0px;
      }

      &.d2 {
        border: 1px solid #454545;
        margin-left: -10px;
        border-top: 0px;
        border-bottom: 0px;
      }

      &.d3 {
        border: 1px solid #3B608B;
        margin-left: -10px;
      }
    }
  }

  .btn {
    margin: 0px 20px;
    width: 894px;

    .wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #e4e4e4;
      clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%, 0% 80%);
      width: 92px;
      height: 22px;
      border: 1px solid;
      background: #30527580;
      border-image: linear-gradient(180deg, rgba(172.81004548072815, 204.5579954981804, 225.23104459047318, 0), rgba(172.81004548072815, 204.5579954981804, 225.23104459047318, 1)) 1 1;
    }

    ::v-deep(.is-active) {
      .wrap {
        color: #fff;
        background: linear-gradient(180deg, #7FCCEB 0%, rgba(38, 96, 149, 0.73) 100%);
        border-image: linear-gradient(180deg, rgba(172.81004548072815, 204.5579954981804, 225.23104459047318, 0), rgba(172.81004548072815, 204.5579954981804, 225.23104459047318, 1)) 1 1;
      }
    }

    ::v-deep(.el-menu-item) {
      padding: 0px 10px;
      border-bottom: 0px;
    }

    ::v-deep(.el-sub-menu__title) {
      border-bottom: 0px;
    }

    ::v-deep(.el-sub-menu) {
      width: 112px;


    }

    ::v-deep(.el-sub-menu__title) {
      padding: 0px 10px;

      .el-sub-menu__icon-arrow {
        display: none
      }
    }

  }
}
</style>
