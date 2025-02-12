<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-27 17:19:59
-->
<template>
  <div>
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>2024.05.30实时电价</span>
        </div>
      </template>
      <template #content>
        <div class="pl-10px my-10px h-100%">
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <div class="px-20px">
                <el-image class="w-100%" :src="ra1" fit="fill" />
              </div>
              <div class="flex justify-between px-40px text-10px text-#CCD7E2">
                <span>日期：2024年12月5日</span>
                <span>日计划发电量：8735kWh</span>
              </div>
              <div class="flex items-center pl-16px mt-10px">
                <el-image class="w-3px h-17px" :src="ra2" fit="fill" />
                <span class="bg-#d8d8d81f text-#fff text-10px h-13px px-4px flex items-center">虚拟电厂信息</span>
              </div>
              <div class="pl-16px mt-10px">
                <div class="flex items-center text-#DF748D text-13px ">
                  <div class="bold_wrap1 flex items-center justify-center">1</div>
                  <div class="ml-14px">用户侧需求响应平台</div>
                </div>
                <div class="flex items-center text-#FAEBCC text-13px mt-6px">
                  <div class="bold_wrap2 flex items-center justify-center">2</div>
                  <div class="ml-14px">用户侧需求响应平台</div>
                </div>
                <div class="flex items-center text-#A6CCAE text-13px mt-6px">
                  <div class="bold_wrap3 flex items-center justify-center">3</div>
                  <div class="ml-14px">用户侧需求响应平台</div>
                </div>
                <div class="flex items-center text-#7B7B7B text-13px mt-6px">
                  <div class="bold_wrap4 flex items-center justify-center">4</div>
                  <div class="ml-14px">上海电力股份智慧能源管理平台</div>
                </div>
                <div class="flex items-center text-#7B7B7B text-13px mt-6px">
                  <div class="bold_wrap4 flex items-center justify-center">5</div>
                  <div class="ml-14px">国网上海综合能源服务有限公司</div>
                </div>
              </div>
              <div class="flex items-center pl-16px mt-10px">
                <el-image class="w-3px h-17px" :src="ra2" fit="fill" />
                <span class="bg-#d8d8d81f text-#fff text-10px h-13px px-4px flex items-center">平台信息-计划发电负荷</span>
              </div>
              <div class="h-130px">
                <Chart height="100%" :options="chart1Options" />
              </div>
            </div>
            <div class="flex-1">
              <div class="flex items-center pl-16px mt-10px">
                <el-image class="w-3px h-17px" :src="ra2" fit="fill" />
                <span class="bg-#d8d8d81f text-#fff text-10px h-13px px-4px flex items-center">虚拟电厂日计划发电量分配</span>
              </div>
              <div class="flex items-center justify-center">
                <div class="relative w-276px h-180px">
                  <div class="absolute left-0px top-0px">
                    <el-image class="w-276px" :src="ra3" fit="fill" />
                  </div>
                  <div class="absolute left-0px top-0px ">
                    <el-image class="w-276px animate-spin-slow" :src="ra4" fit="fill" />
                  </div>
                </div>
              </div>
              <div class="flex items-center pl-16px mt-10px">
                <el-image class="w-3px h-17px" :src="ra2" fit="fill" />
                <span class="bg-#d8d8d81f text-#fff text-10px h-13px px-4px flex items-center">虚拟电厂信息-计划发电负荷</span>
              </div>
              <div class="h-130px">
                <Chart height="100%" :options="chart1Options" />
              </div>
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
          <span>2024.05.30实时电价</span>
        </div>
      </template>
      <template #content>
        <div class="pl-10px my-10px h-100%">
          <div class="flex justify-start">
            <el-input size="small" class="mr-10px" style="width: 82px">
            </el-input>
            <el-date-picker type="date" size="small" style="width: 124px" />
          </div>
          <div class="h-158px">
            <Chart height="100%" :options="chart2Options" />
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/generation-task/price-signal/la_1.png'
import ra1 from '@/assets/generation-task/price-signal/ra_1.png'
import ra2 from '@/assets/generation-task/price-signal/ra_2.png'
import ra3 from '@/assets/generation-task/price-signal/ra_3.png'
import ra4 from '@/assets/generation-task/price-signal/ra_4.png'
import { createOption } from '@/components/chart';
import Chart from '@/components/chart/chart.vue'
import * as echarts from "echarts"
import { reactive, ref } from 'vue';
const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
const chart1Options = reactive(createOption({
  legend: {
    icon: 'circle',
    itemWidth: 6,
    itemGap: 20,
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    show: false
  },
  grid: {
    top: 24,
    left: 10,
    right: 10,
    bottom: 0,
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#999'
      },
      fontSize: 12,
      margin: 10
    },
    boundaryGap: false
  }],
  yAxis: [{
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false,
    },
    min: 0,
    interval: 5000,
    axisLabel: {
      textStyle: {
        color: '#999'
      }
    },
    splitLine: {
      show: false
    }
  }, {
    type: 'value',
    position: 'right',
    axisTick: {
      show: false
    },
    min: 0,
    interval: 0.5,
    axisLabel: {
      textStyle: {
        color: '#999'
      },
      formatter: function (value: number) {
        return value.toFixed(1);
      }
    },
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false
    }
  }],
  series: [{
    name: '负荷',
    type: 'line',
    data: [1000, 10000, 3000, 12000, 2500, 16000, 7000],
    symbolSize: 1,
    symbol: 'circle',
    smooth: true,
    yAxisIndex: 0,
    showSymbol: false,
    lineStyle: {
      width: 1,
      color: '#41838d'
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: '#41838d',
            },
            {
              offset: 1,
              color: '#202d2f',
            },
          ],
          false
        ),
      },
    }

  }, {
    name: '电量',
    type: 'line',
    data: [0.2, 0.5, 0.07, 1.3, 0.25, 1.7, 0.5],
    symbolSize: 1,
    symbol: 'circle',
    smooth: true,
    yAxisIndex: 1,
    showSymbol: false,
    lineStyle: {
      width: 1,
      color: '#999',
    }
  },
  ]
}))
const chart2Options = reactive(createOption({
  tooltip: {
    show: false
  },
  grid: {
    left: -10,
    right: 6,
    bottom: 4,
    top: 22,
    containLabel: true
  },
  legend: {
    data: ['峰谷平时段分配：峰时电价1.16元/kWh', '峰谷平时段分配：谷时电价0.254元/kWh', '峰谷平时段分配：平时电价0.728元/kWh'],
    left: 'center',
    top: 12,
    textStyle: {
      color: "#fff"
    },
    itemWidth: 12,
    itemHeight: 10,
  },
  xAxis: {
    type: 'category',
    data: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    axisLine: {
      lineStyle: {
        color: 'white'
      }
    },
    axisLabel: {
      textStyle: {
        fontFamily: 'Microsoft YaHei'
      }
    },
    axisTick: {
      show: false
    },
  },

  yAxis: {
    max: 1000,
    type: 'value',
    show: false
  },

  series: [{
    name: '峰谷平时段分配：峰时电价1.16元/kWh',
    type: 'bar',
    barWidth: '15%',
    color: '#eebb71',
    data: [400, 400, 300, 300, 300, 400, 400, 400, 300, 400, 400, 300, 300, 300, 400, 400, 400, 300, 400, 400, 300, 300, 300, 400, 200]
  },
  {
    name: '峰谷平时段分配：谷时电价0.254元/kWh',
    type: 'bar',
    barWidth: '15%',
    color: '#fff',
    data: [600, 500, 500, 500, 500, 400, 400, 500, 500, 600, 500, 500, 500, 500, 400, 400, 500, 500, 600, 500, 500, 500, 500, 400]
  },
  {
    name: '峰谷平时段分配：平时电价0.728元/kWh',
    type: 'bar',
    barWidth: '15%',
    color: '#f7ecd1',
    data: [100, 300, 700, 700, 600, 400, 400, 600, 700, 100, 300, 700, 700, 600, 400, 400, 600, 700, 100, 300, 700, 700, 600, 500]
  }]
}))



</script>

<style scoped lang="scss">
.bold_wrap1 {
  width: 26px;
  height: 18px;
  background: linear-gradient(90deg, rgba(223, 116, 141, 0.2196) 0%, rgba(223, 204, 210, 0) 50%, rgba(223, 116, 141, 0.2196) 100%);
}

.bold_wrap2 {
  width: 26px;
  height: 18px;
  background: linear-gradient(90deg, rgba(250, 235, 204, 0.2) 0%, rgba(223, 204, 210, 0) 50%, rgba(250, 235, 204, 0.2) 100%);
}

.bold_wrap3 {
  width: 26px;
  height: 18px;
  background: linear-gradient(90deg, rgba(166, 204, 174, 0.2) 0%, rgba(223, 204, 210, 0) 50%, rgba(166, 204, 174, 0.2) 100%);
}

.bold_wrap4 {
  width: 26px;
  height: 18px;
  background: linear-gradient(90deg, rgba(98, 162, 175, 0.2) 0%, rgba(223, 204, 210, 0) 50%, rgba(98, 162, 175, 0.2) 100%);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
  transform-origin: 145px 110px;
}
</style>
