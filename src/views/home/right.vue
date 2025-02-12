<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-13 09:38:18
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-13 11:07:14
-->
<template>
  <div class="pt-10px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
          <span>发电、用电负荷曲线图</span>
        </div>
      </template>
      <template #content>
        <div class="p-8px h-188px">
          <Chart height="100%" :options="chart1Options" />
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="pt-10px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="rb" fit="fill" />
          <span>发电单元类型分布</span>
        </div>
      </template>
      <template #content>
        <div class="p-8px h-188px">
          <Chart height="100%" :options="chart2Options" />
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="pt-10px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="rc" fit="fill" />
          <span>类型分布</span>
        </div>
      </template>
      <template #content>
        <div class="p-8px h-188px">
          <Chart height="100%" :options="chart3Options" />
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import ExteriorShell from '@/components/exteriorShell/index.vue'
import ra from '@/assets/home/ra.png'
import rb from '@/assets/home/rb.png'
import rc from '@/assets/home/rc.png'
import rc2 from '@/assets/home/rc_2.png'
import { createOption, createRadarOption } from '@/components/chart';
import Chart from '@/components/chart/chart.vue'
const chart1Options = reactive<any>(createOption())
const chart2Options = reactive<any>(createOption({
  legend: { show: false },
  yAxis: { show: false },
  grid: { left: 10 }
}))
const chart3Options = reactive<any>(createRadarOption())


onMounted(() => {
  chart1Options.xAxis.data = ['08:15', '08:16', '08:17', '08:18', '08:19']
  chart1Options.series = [
    {
      data: [30, 100, 20, 200, 118],
      name: "发电负荷",
      type: "line",
      smooth: true
    },
    {
      data: [100, 60, 140, 70, 180],
      name: "用电负荷",
      type: "line",
      smooth: true
    },
  ]
  chart2Options.xAxis.data = ['电力负荷', '交流器', '光伏发电站', '风力', '电池']
  chart2Options.series = [
    {
      data: [30, 100, 170, 200, 118, 156],
      type: "bar",
      color: '#fff',
      barWidth: 8,
      label: {
        show: true,
        position: 'bottom',
        offset: [5, -146],
        fontSize: 8,
        color: '#fff',
        formatter: () => '08:18',
        backgroundColor: 'rgba(180, 180, 180, 0.2)',
        padding: [3, 6, 3, 6],
        borderRadius: 2
      }
    },
    {
      data: [100, 160, 200, 70, 180, 96],
      type: "bar",
      color: '#5DA5E5',
      barWidth: 8,
      label: {
        show: true,
        position: 'bottom',
        offset: [-6, -125],
        formatter: () => '',
        width: 26,
        height: 120,
        z: -1,
        backgroundColor: {
          image: rc2
        },
        // padding: [3, 6, 3, 6],
      }
    },
  ]
})

</script>

<style scoped lang="scss"></style>
