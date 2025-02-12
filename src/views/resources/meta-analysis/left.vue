<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-13 09:35:57
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-27 10:51:36
-->
<template>
  <div class="pt-18px">
    <BaseInfo></BaseInfo>
  </div>
  <div class="pt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="lb" fit="fill" />
          <span>各虚拟电厂下排名</span>
        </div>
      </template>
      <template #content>
        <div class="px-16px pb-4px">
          <!-- <el-image class="w-300px h-200px" :src="lb1" fit="fill" /> -->
          <div class="flex mt-10px" v-for="(item, i) in sortData" :key="i">
            <div class="bg_wrap_lb2 w-64px h-42px">
              <div class="text-8px text-#DAD7D7 text-center w-100%">1#数据源</div>
              <div class="h-28px">
                <Chart height="100%" :options="item.pie" />
              </div>
            </div>
            <div class="h-44px w-192px">
              <Chart height="100%" :options="item.bar" />
            </div>
            <div class="w-50px">
              <el-image class="w-50px h-20px" :src="lb3" fit="fill" />
              <div class="w-100% h-22px text-#F0F0F0 text-8px text-center">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>
  <div class="pt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="lc" fit="fill" />
          <span>注册调控能力占比</span>
        </div>
      </template>
      <template #content>
        <div class="px-16px py-20px flex items-center justify-between">
          <div class="bg_wrap_c1 w-140px h-60px pl-50px pt-38px">
            <span class="text-#6ABACA text-14px font-600">31KW、0%</span>
          </div>
          <div class="bg_wrap_c2 w-140px h-60px pl-50px pt-38px">
            <span class="text-#6ABACA text-14px font-600">32KW、0%</span>
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import BaseInfo from '@/views/resources/components/baseInfo.vue'
import lb from '@/assets/resources/meta-analysis/lb.png'
import lc from '@/assets/resources/meta-analysis/lc.png'
import lb3 from '@/assets/resources/meta-analysis/lb_3.png'
import { reactive } from 'vue'
import * as echarts from 'echarts'
const pieOptions = (value: number) => {
  return {

    legend: { show: false },
    tooltip: { show: false },
    xAxis: { show: false },
    yAxis: { show: false },
    color: ['rgba(0,0,0,0)'],
    series: [{
      type: 'pie',
      clockWise: true,
      radius: ['55%', '70%'],
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      data: [{
        value: value,
        name: '01',
        itemStyle: {
          normal: {
            color: '#65F3DF',
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
      },

      {
        name: '02',
        value: 100 - value
      },
      ],
    },
    {
      type: 'pie',
      radius: [0, '6%'],
      itemStyle: {
        normal: {
          color: '#65F3DF',
        }
      },
      label: {
        show: false
      },
      data: [100]
    },
    ]
  }
}
const chart1Options = reactive(pieOptions(67))
const chart2Options = reactive(pieOptions(47))
const chart3Options = reactive(pieOptions(27))
const chart4Options = reactive(pieOptions(43))

const barOptions = (a: number, b: number, c: number, d: number) => {
  return {

    grid: {
      left: 6,
      right: 20,
      top: 0,
      bottom: 0,
    },

    yAxis: {
      triggerEvent: true,
      show: false,
      inverse: true,
      data: [],
    },
    xAxis: {
      show: false
    },
    series: [
      {
        name: '削峰',
        type: 'bar',
        showBackground: true,
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#34c4d930'
            }, {
              offset: 1,
              color: '#34C4D9'
            }]),
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        zlevel: 2,
        barWidth: '10%',
        data: [a]
      }, {
        name: '填谷',
        type: 'bar',
        barWidth: '10%',
        showBackground: true,
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#7ecb4430'
            }, {
              offset: 1,
              color: '#83D044'
            }]),
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        zlevel: 2,
        barGap: '140%',
        data: [b]
      }, {
        name: '发电单元',
        type: 'bar',
        barWidth: '10%',
        showBackground: true,
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#6FA6E030'
            }, {
              offset: 1,
              color: '#6FA6E0'
            }]),
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        zlevel: 2,
        barGap: '140%',
        data: [c]
      },
      {
        name: '发电机组',
        type: 'bar',
        barWidth: '10%',
        showBackground: true,
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: '#E1B97F30'
            }, {
              offset: 1,
              color: '#E5BB7D'
            }]),
            barBorderRadius: 50,
            borderWidth: 0,
          }
        },
        zlevel: 2,
        barGap: '140%',
        data: [d]
      }

    ]
  }
}
const chart5Options = reactive(barOptions(68, 78, 28, 54))
const chart6Options = reactive(barOptions(58, 88, 58, 82))
const chart7Options = reactive(barOptions(58, 78, 38, 94))
const chart8Options = reactive(barOptions(48, 78, 98, 64))

const sortData = [
  {
    pie: chart1Options,
    bar: chart5Options,
    name: 'ID-001'
  },
  {
    pie: chart2Options,
    bar: chart6Options,
    name: 'ID-002'
  },
  {
    pie: chart3Options,
    bar: chart7Options,
    name: 'ID-003'
  },
  {
    pie: chart4Options,
    bar: chart8Options,
    name: 'ID-004'
  },
]

</script>

<style scoped lang="scss">
.bg_wrap_c1 {
  background: url('@/assets/resources/meta-analysis/lc_1.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_wrap_c2 {
  background: url('@/assets/resources/meta-analysis/lc_2.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_wrap_lb2 {
  background: url('@/assets/resources/meta-analysis/lb_2.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_wrap_lb3 {
  background: url('@/assets/resources/meta-analysis/lb_3.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
