<script setup lang="ts">
import la1 from '@/assets/effect-decision/deviation-examine/la_1.png'
import ra1 from '@/assets/effect-decision/deviation-examine/ra_1.png'
import ra3 from '@/assets/generation-task/price-signal/ra_3.png'
import ra4 from '@/assets/generation-task/price-signal/ra_4.png'
import { onMounted, onUnmounted, reactive } from 'vue';
import Info from './info.vue'
import autofit from 'autofit.js';
import * as echarts from "echarts"
import { createOption } from '@/components/chart';
const queryInfo = (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => {
  return [
    [
      {
        a: '爬坡速度',
        b: a,
        c: 'kW/min'
      },
      {
        a: '响应量',
        b: b,
        c: 'kW'
      },
      {
        a: '完成耗时',
        b: c,
        c: 'min'
      },
    ],
    [
      {
        a: '电量偏差',
        b: d,
        c: 'kWh'
      },
      {
        a: '负荷偏差',
        b: e,
        c: 'kW'
      },
      {
        a: '目标调控负荷',
        b: f,
        c: 'kW'
      },
      {
        a: '实际调控负荷',
        b: g,
        c: 'kW'
      }
    ]
  ]
}
const paramsInfo1 = queryInfo(1.89, 1.89, 825.89, 132, 134, 1.87, 1.87)
const paramsInfo2 = queryInfo(1.97, 1.97, 841.87, 120, 130, 1.97, 1.97)
const paramsInfo3 = queryInfo(1.67, 1.66, 820.99, 124, 135, 1.70, 1.97)
const paramsInfo4 = queryInfo(1.78, 1.77, 866.09, 122, 129, 1.79, 1.78)

const queryChartOption = () => {
  return {
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
      top: 54,
      left: 0,
      right: 0,
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
        fontSize: 10,
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
      max: 15000,
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
      max: 1.5,
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
      data: [1000, 10000, 3000, 12000, 2500, 12000, 7000],
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
      data: [0.2, 0.5, 0.07, 1.0, 0.25, 1.4, 0.5],
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      yAxisIndex: 1,
      showSymbol: false,
      lineStyle: {
        width: 1,
        color: '#999'
      },
    },

    ]
  }
}
const chart1Options = reactive(queryChartOption())
const chart2Options = reactive(queryChartOption())
const chart3Options = reactive(queryChartOption())

onMounted(() => {
  autofit.init({
    el: '.wrapfit',
    dw: 1440,
    dh: 780,
  })
})
onUnmounted(() => {
  autofit.off()
})
</script>

<template>
  <main class="overflow-hidden h-100% wrapfit">
    <div id="container" class="px-20px flex justify-between">
      <div class="left flex-1 pt-18px pb-44px h-100% mr-30px">
        <Info name="按事件名称查询" :chartOption="chart1Options" :icon="la1" :paramsInfo="paramsInfo1">
          <div class="h-220px mt-18px">
            <Chart height="100%" :options="chart1Options" />
          </div>
        </Info>
      </div>
      <div class="center flex-1 pt-18px pb-44px h-100%  mx-30px">
        <Info name="按电厂名称查询" :icon="la1" :paramsInfo="paramsInfo2">
          <div class="h-220px mt-18px">
            <Chart height="100%" :options="chart2Options" />
          </div>
        </Info>
      </div>
      <div class="center flex-1 pt-18px pb-44px h-100%   mx-30px">
        <Info name="按日期查询" :icon="la1" :paramsInfo="paramsInfo3">
          <div class="h-220px">
            <Chart height="100%" :options="chart3Options" />
          </div>
        </Info>
      </div>
      <div class="right h-100% flex-1 pt-18px pb-44px  ml-30px">
        <Info name="按年份名称查询" :chartOption="chart1Options" :icon="ra1" :paramsInfo="paramsInfo4">
          <div class="flex items-center justify-center mt-34px mb-84px">
            <div class="relative w-276px h-180px">
              <div class="absolute left-0px top-0px">
                <el-image class="w-276px" :src="ra3" fit="fill" />
              </div>
              <div class="absolute left-0px top-0px ">
                <el-image class="w-276px animate-spin-slow" :src="ra4" fit="fill" />
              </div>
            </div>
          </div>
        </Info>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;

  .right {
    // width: calc(100% - 1000px);
  }

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
