<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-16 16:57:35
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-24 16:01:39
-->
<template>
  <ExteriorShell>
    <template #title>
      <div class="h-26px flex items-center px-16px">
        <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
        <span>{{ props.title }}</span>
      </div>
    </template>
    <template #content>
      <div class="p-10px flex justify-around items-center">
        <div>
          <div class="flex justify-center items-center">
            <div class="round_1"></div>
          </div>
          <div class="text-9px text-#E0E0E0 text-center">
            各行业发电机组注册调控
          </div>
          <div class="flex justify-center items-center mt-10px">
            <div class="round_2"></div>
          </div>
          <div class="text-9px text-#E0E0E0 text-center">
            各发电单元类别注册调控
          </div>
          <div class="mt-10px">
            <el-radio-group v-model="radio" size="small">
              <el-radio-button label="类型一" value="1" />
              <el-radio-button label="类型二" value="2" />
              <el-radio-button label="类型三" value="3" />
            </el-radio-group>
          </div>
          <div class="mt-6px">
            <div v-for="item in 7" :key="item" class="flex items-center text-8px text-#A0A0A0 mt-1px">
              <span>10:00</span>
              <div class="px-2px w-66px h-12px">
                <Chart height="100%" :options="chart1Options" />
              </div>
              <span>15%</span>
            </div>
          </div>
        </div>
        <div>
          <el-image class="w-162px h-162px" :src="ra1" fit="fill" />
        </div>
      </div>
    </template>
  </ExteriorShell>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import Chart from '@/components/chart/chart.vue'
import ra from '@/assets/resources/meta-analysis/ra.png'
import ra1 from '@/assets/resources/meta-analysis/ra_1.png'
import { reactive, ref } from 'vue';
import { createOption } from '@/components/chart';

const props = defineProps({
  title: String
})
const chart1Options = reactive<any>(createOption({
  xAxis: { show: false },
  yAxis: { show: false },
  series: [{
    color: '#D4B78C',
    data: [20, 30, 5, 35, 15, 28, 4, 32, 11, 22, 10],
    type: "line",
    smooth: true,
  }],
  grid: {
    top: 2,
    left: 10,
    right: 10,
    bottom: 2
  }
}))
const radio = ref('1')
</script>

<style scoped lang="scss">
.round_1 {
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background: rgba(216, 216, 216, 0.1);
  box-shadow: 0px -1 4px 0px rgba(174, 167, 149, 1);
  border: 1px solid #BBB299;
}

.round_2 {
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background: rgba(216, 216, 216, 0.2);
  box-shadow: 0px -1 4px 0px rgba(199, 160, 102, 1);
  border: 1px solid #C7A066;
}

::v-deep(.el-radio-button__inner) {
  padding: 2px 6px;
  border-radius: 0px !important;
  font-size: 8px;
  color: #666;

  background-color: #323232 !important;
  border-color: transparent !important;
  color: #666666 !important;
}

::v-deep(.is-active) {
  .el-radio-button__inner {
    background: linear-gradient(180deg, #667173 0%, #0E181B 100%) !important;
    border-color: transparent !important;
    color: #fff !important;
  }
}
</style>
