<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-25 14:43:24
-->
<template>
  <div>
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>预览事件曲线</span>
        </div>
      </template>
      <template #content>
        <div class="flex justify-center items-center p-10px">
          <el-image class="h-220px mt-10px" :src="ra1" fit="fill" />
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="mt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>基本信息</span>
        </div>
      </template>
      <template #content>
        <div class="h-156px px-18px flex flex-col items-center justify-center">
          <div class="flex mt-6px" v-for="item in baseInfo" :key="item.sort">
            <div class="w-26px h-26px bg-#2E2E30 mr-6px text-#47C9DE flex justify-center items-center">{{ item.sort }}
            </div>
            <div class="w-100px h-26px bg-#2E2E30 flex justify-center items-center text-#fff text-12px">{{ item.name }}
            </div>
            <el-image class="w-4px h-25px mx-3px" :src="rb1" fit="fill" />
            <div class="text-#fff font-800 flex flex-col h-26px justify-center py-2px">
              <span class="text-10px">{{ item.a }}</span>
              <span class="text-8px">{{ item.b }}</span>
            </div>
            <div class="flex flex-col justify-around ml-16px">
              <Lattice :max="item.c" :value="item.d"></Lattice>
              <Lattice :max="item.e" :value="item.f"></Lattice>
            </div>
            <div class="h-28px w-34px mx-16px">
              <Chart height="100%" :options="item.g" />
            </div>
            <div class="h-28px w-130px">
              <Chart height="100%" :options="item.h" />
            </div>
            <div class="h-28px w-34px mx-16px">
              <Chart height="100%" :options="item.i" />
            </div>
            <div class="w-26px h-26px bg-#2E2E30 mr-6px text-#47C9DE flex justify-center items-center">{{ item.j }}
            </div>
            <div class="w-100px h-26px bg-#2E2E30 flex justify-center items-center text-#fff text-12px">{{ item.k }}
            </div>
            <el-image class="w-4px h-25px mx-3px" :src="rb1" fit="fill" />
            <div class="text-#fff font-800 flex flex-col h-26px justify-center py-2px">
              <span class="text-10px">{{ item.l }}</span>
              <span class="text-8px">{{ item.m }}</span>
            </div>
            <div class="flex flex-col justify-around ml-16px">
              <Lattice :max="item.w" :value="item.x"></Lattice>
              <Lattice :max="item.y" :value="item.z"></Lattice>
            </div>
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="mt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>时间轴设置</span>
        </div>
      </template>
      <template #content>
        <div class="flex justify-center items-center py-20px">
          <el-image class="h-74px mt-8px" :src="rc1" fit="fill" />
        </div>
      </template>
    </ExteriorShell>
  </div>



</template>

<script setup lang="ts">
import Lattice from './lattice.vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/generation-task/price-signal/la_1.png'
import ra1 from '@/assets/task-traceability/demand-response-details/ra_1.png'
import rc1 from '@/assets/task-traceability/demand-response-details/rc_1.png'
import rb1 from '@/assets/task-traceability/demand-response-details/rb_1.png'
import { createOption } from '@/components/chart';
import Chart from '@/components/chart/chart.vue'
import * as echarts from "echarts"
import { reactive, ref } from 'vue';


const pieOptions = (value: number) => {
  return {

    legend: { show: false },
    tooltip: { show: false },
    xAxis: { show: false },
    yAxis: { show: false },
    color: ['#3d3f42'],
    series: [{
      type: 'pie',
      clockWise: true,
      radius: ['80%', '100%'],
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
            color: '#949699',
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        label: {
          normal: {
            formatter: function (params: any) {
              return params.value + '%';
            },
            position: 'center',
            show: true,
            textStyle: {
              fontSize: 8,
              fontWeight: 'bold',
              color: '#949699'
            }
          }
        },
      }, {
        name: '02',
        value: 100 - value
      }]
    }]
  }
}
const pie1Options = reactive(pieOptions(34))
const pie2Options = reactive(pieOptions(12))
const pie3Options = reactive(pieOptions(43))
const pie4Options = reactive(pieOptions(34))

const barOptions = (v1: number, v2: number, v3: number) => {
  return {
    grid: {
      left: 4,
      right: 4,
      bottom: 0,
      top: 0,
    },
    tooltip: {
      show: false
    },
    xAxis: {
      show: false,
      type: 'value',
      max: 100
    },
    yAxis: {
      type: 'category',
      show: false,
    },
    series: [{
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: '#d9a96230',
        barBorderRadius: 4,
      },
      itemStyle: {
        normal: {
          show: true,
          color: '#D9A962',
          barBorderRadius: 4,
        }
      },
      barGap: '100%',
      barWidth: 4,
      data: [v1]
    }, {
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: '#d8d8d829',
        barBorderRadius: 4,
      },
      itemStyle: {
        normal: {
          show: true,
          color: '#D8D8D8',
          barBorderRadius: 4,
        }
      },
      barWidth: 4,
      barGap: '100%',
      data: [v2]
    }, {
      type: 'bar',
      barWidth: 4,
      showBackground: true,
      backgroundStyle: {
        color: '#d9a96230',
        barBorderRadius: 4,
      },
      itemStyle: {
        normal: {
          show: true,
          color: '#D9A962',
          barBorderRadius: 4,
          borderWidth: 0,
        }
      },
      barGap: '100%',
      data: [v3]
    }
    ]
  }
}
const bar1Options = reactive(barOptions(43, 34, 86))

const baseInfo = [
  {
    sort: '01',
    name: '实际消减负荷',
    a: 6453,
    b: 'kW',
    c: 8,
    d: 8,
    e: 5,
    f: 4,
    g: pie1Options,
    h: bar1Options,
    i: pie2Options,
    j: '05',
    k: '参与发电机组数量',
    l: '6383',
    m: '户',
    w: 8,
    x: 8,
    y: 5,
    z: 4
  },
  {
    sort: '02',
    name: '实际消减负荷',
    a: 7647,
    b: 'kW',
    c: 8,
    d: 5,
    e: 5,
    f: 3,
    g: pie3Options,
    h: bar1Options,
    i: pie4Options,
    j: '06',
    k: '参与发电单元数量',
    l: 7798,
    m: '台',
    w: 8,
    x: 5,
    y: 5,
    z: 3
  },
  {
    sort: '03',
    name: '累计补贴金额',
    a: 9869,
    b: '万元',
    c: 8,
    d: 6,
    e: 5,
    f: 1,
    g: pie3Options,
    h: bar1Options,
    i: pie3Options,
    j: '07',
    k: '认购额度',
    l: 9877,
    m: '万元',
    w: 8,
    x: 6,
    y: 5,
    z: 1
  },
  {
    sort: '04',
    name: '参与虚拟电厂数量',
    a: 9869,
    b: '家',
    c: 8,
    d: 3,
    e: 5,
    f: 1,
    g: pie4Options,
    h: bar1Options,
    i: pie2Options,
    j: '08',
    k: '完成额度',
    l: 9867,
    m: '万元',
    w: 8,
    x: 3,
    y: 5,
    z: 1
  },
]

</script>

<style scoped lang="scss"></style>
