<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 09:46:06
-->
<template>
  <div>
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>电网区域概括</span>
        </div>
      </template>
      <template #content>
        <div class="pl-10px my-10px h-100%">
          <div class="mt-10px">
            <div class="flex items-center justify-between">
              <div class="h-160px flex-1">
                <Chart height="100%" :options="chart2Options" />
              </div>
              <div class="h-160px flex-1">
                <Chart height="100%" :options="chart3Options" />
              </div>
              <div class="h-160px flex-1">
                <Chart height="100%" :options="chart4Options" />
              </div>
            </div>
          </div>
          <div class="h-130px mt-16px">
            <Chart height="100%" :options="chart1Options" />
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>

  <div class="mt-18px">
    <ExteriorShell>
      <template #extra>
        <el-radio-group size="small" class="ml-20px" v-model="radio">
          <el-radio-button label="虚拟电厂响应参数设置" value="1" />
          <el-radio-button label="虚拟电厂预览和设置" value="2" />
        </el-radio-group>
      </template>
      <template #content>
        <div class="p-10px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" width="50" label="序号" align='center' />
            <el-table-column property="a" label="虚拟电厂名称" align='center' />
            <el-table-column property="b" label="注册响应能力" align='center' />
            <el-table-column property="c" label="分配额度" align='center' />
            <el-table-column property="d" label="分配额度占比" align='center' />
            <el-table-column property="e" label="参与状态" align='center' />
          </el-table>
          <div class="flex justify-center mt-15px mb-0px">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" size="small"
              background="transparent" layout="total, prev, pager, next" :total="50" />
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/generation-task/price-signal/la_1.png'
import ra1 from '@/assets/generation-task/excitation-signal/ra_1.png'
import ra2 from '@/assets/generation-task/excitation-signal/ra_2.png'
import { createOption } from '@/components/chart';
import Chart from '@/components/chart/chart.vue'
import * as echarts from "echarts"
import { reactive, ref } from 'vue';

const radio = ref('1')

const currentPage = ref(1)
const pageSize = ref(10)
const tableData = [
  {
    a: '金华电厂',
    b: '35676kW',
    c: '6242kW',
    d: '445KW',
    e: '434KW',
    f: '张三',
  },
  {
    a: '路平安电厂',
    b: '35176kW',
    c: '6242kW',
    d: '38',
    e: '参与',
  },
  {
    a: '石上电厂',
    b: '31376kW',
    c: '6242kW',
    d: '33',
    e: '参与',
  },
  {
    a: '财网电厂',
    b: '29668kW',
    c: '6242kW',
    d: '31',
    e: '参与',
  },
  {
    a: '三丰电厂',
    b: '30172kW',
    c: '6242kW',
    d: '36',
    e: '参与',
  },
]

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
    name: '实测负荷',
    type: 'line',
    data: [1000, 10000, 3000, 12000, 2500, 16000, 7000],
    symbolSize: 1,
    symbol: 'circle',
    smooth: true,
    yAxisIndex: 0,
    showSymbol: false,
    lineStyle: {
      width: 1,
      color: '#4ea6c9',
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
              color: '#4ea6c9',
            },
            {
              offset: 1,
              color: 'rgba(0,0,0,0)',
            },
          ],
          false
        ),
      },
    }
  }, {
    name: '预测基线',
    type: 'line',
    data: [0.2, 0.5, 0.07, 1.3, 0.25, 0.9, 0.5],
    symbolSize: 1,
    symbol: 'circle',
    smooth: true,
    yAxisIndex: 1,
    showSymbol: false,
    lineStyle: {
      width: 1,
      color: '#999',
    },
  },

  ]
}))

const colorSet = {
  color: '#0063E7'
};

const getChartOptions = (name: string, value: number, max: number = value) => ({
  title: [{
    text: name,
    bottom: 6,
    x: 'center',
    borderColor: '#284b4a',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#284b4a',
    padding: [4, 10],
    textStyle: {
      fontWeight: 'bold',
      fontSize: 13,
      color: '#fff'
    }
  }],
  tooltip: {
    show: false
  },
  xAxis: {
    show: false
  },
  grid: {
    top: 0,
    bottom: 0
  },
  legend: {
    show: false
  },
  series: [{
    name: "最外部进度条",
    type: "gauge",
    radius: '100%',
    splitNumber: 10,
    axisLine: {
      lineStyle: {
        color: [
          [value / max, new echarts.graphic.LinearGradient(
            0, 1, 0, 0, [{
              offset: 0,
              color: 'rgba(145,207,255,0)',
            }, {
              offset: 0.5,
              color: 'rgba(145,207,255,0.2)',
            },
            {
              offset: 1,
              color: 'rgba(145,207,255,1)',
            }
          ]
          )],
          [
            1, 'rgba(28,128,245,.0)'
          ]
        ],
        width: 3

      },
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,

    },
    splitLine: {
      show: false,
    },
    itemStyle: {
      show: false,
    },
    detail: {
      show: false
    },
    title: { //标题
      show: false,
    },
    data: [{
      name: "title",
      value: value,
    }],
    pointer: {
      show: false,
    },
    animationDuration: 4000,
  }, {
    name: "内部阴影",
    type: "gauge",
    // center: ['20%', '50%'],
    radius: '85%',
    z: 4,
    splitNumber: 10,
    axisLine: {
      lineStyle: {
        color: [
          [value / max, new echarts.graphic.LinearGradient(
            0, 1, 0, 0, [{
              offset: 0,
              color: 'rgba(145,207,255,0)',
            }, {
              offset: 0.5,
              color: 'rgba(145,207,255,0.1)',
            },
            {
              offset: 1,
              color: 'rgba(145,207,255,0.3)',
            }
          ]
          )],
          [
            1, 'rgba(28,128,245,.0)'
          ]
        ],
        width: 85,
      }
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,

    },
    splitLine: {
      show: false,
    },
    itemStyle: {
      show: false,
    },
    detail: {
      formatter: function (value: number) {
        if (value !== 0) {
          return value;
        } else {
          return 0;
        }
      },
      offsetCenter: [0, -15],
      textStyle: {
        padding: [0, 0, 0, 0],
        fontSize: 18,
        color: '#EDFFFD'
      }
    },
    title: { //标题
      show: true,
      color: '#999',
      fontSize: 18,
      offsetCenter: [0, '20%']
    },
    data: [{
      name: "kW",
      value: value,
    }],
    pointer: {
      show: false,
    },
  }, {
    name: '内部圈',
    type: 'gauge',
    z: 2,
    min: 0,
    max: max,
    splitNumber: 10,
    radius: '80%',
    axisLine: {
      lineStyle: {
        color: [
          [1, colorSet.color]
        ],
        width: 3,
        shadowColor: 'rgba(145,207,255,.5)',
        shadowBlur: 6,
        shadowOffsetX: 0,
      }
    },
    tooltip: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,

    },
    splitLine: {
      show: false,
    },
    itemStyle: {
      show: false,
    },
    detail: {
      show: false
    },
    title: { //标题
      show: false,
    },
    data: [{
      name: "title",
      value: value,
    }],
    pointer: {
      show: true,
      length: '80%',
      radius: '20%',
      width: 3, //指针粗细
    },
    animationDuration: 4000,
  },
  {
    name: '内部刻度',
    type: 'gauge',
    radius: '100%',
    min: 0, //最小刻度
    max: 10, //最大刻度
    splitNumber: 10, //刻度数量
    startAngle: 225,
    endAngle: -45,
    axisLine: {
      show: false,
      lineStyle: {
        width: 5,
        color: [
          [1, '#1087e2']
        ],
      }
    }, //仪表盘轴线
    axisLabel: {
      show: true,
      color: 'rgba(172,207,255,.5)',
      distance: 2,
      fontSize: 12,
      formatter: function (v: numver) {
        switch (v + '') {
          case '0':
            return '0';
          case '1':
            return '1';
          case '2':
            return '2';
          case '3':
            return '3';
          case '4':
            return '4';
          case '5':
            return '5';
          case '6':
            return '6';
          case '7':
            return '7';
          case '8':
            return '8';
          case '9':
            return '9';
          case '10':
            return '10';
        }
      }
    }, //刻度标签。
    axisTick: {
      show: true,
      splitNumber: 7,
      lineStyle: {
        color: "#1C3164", //用颜色渐变函数不起作用
        width: 1,
      },
      length: 4
    }, //刻度样式
    splitLine: {
      show: true,
      length: 8,
      lineStyle: {
        color: '#1C3164', //用颜色渐变函数不起作用
      }
    }, //分隔线样式
    detail: {
      show: false
    },
    pointer: {
      show: false
    }
  }
  ]
})
const chart2Options = reactive(createOption(getChartOptions('网供负荷', 11999, 12000)))
const chart3Options = reactive(createOption(getChartOptions('网供负荷', 4789, 12000)))
const chart4Options = reactive(createOption(getChartOptions('调控能力', 11938, 12000)))

</script>

<style scoped lang="scss">
::v-deep(.el-radio-group) {
  .el-radio-button__inner {
    margin-right: 10px;
    padding: 5px 20px 5px 20px;
    border: 0px !important;

    &:last-child {
      clip-path: polygon(0% 0, 90% 0, 100% 100%, 10% 100%);
    }
  }
}
</style>
