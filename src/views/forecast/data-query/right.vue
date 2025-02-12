<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-20 15:43:02
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-27 17:16:20
-->
<template>
  <div class="pt-18px">
    <ExteriorShell>
      <template #content>
        <div class="py-10px px-20px mt-10px">
          <el-image class="w-100% h-68px" :src="r1" fit="fill" />
          <el-image class="w-100% h-27px mt-10px" :src="r2" fit="fill" />
          <div class="mt-20px flex justify-end items-center">
            <el-date-picker v-model="date" type="date" size="small" />
            <el-radio-group size="small" class="ml-20px" v-model="radio">
              <el-radio-button label="趋势图" value="1" />
              <el-radio-button label="柱状图" value="2" />
            </el-radio-group>
          </div>
          <!-- <el-image class="w-100% h-230px mt-26px" :src="r3" fit="fill" /> -->
          <div class="p-8px h-262px">
            <Chart height="100%" :options="chart1Options" />
          </div>
          <div class="mt-28px flex justify-between items-center">
            <el-radio-group size="small" class="ml-20px" v-model="radio2">
              <el-radio-button label="电网分区" value="1" />
              <el-radio-button label="特殊群组" value="2" />
            </el-radio-group>
            <div>
              <el-input v-model="search1" class="h-24px" size="small" style="width: 218px">
                <template #append>
                  <el-button :icon="Search" />
                </template>
              </el-input>
              <el-select size="small" style="width: 160px" class="ml-20px">
                <el-option v-for="item in []" :key="item" :label="item" :value="item" />
              </el-select>
            </div>
          </div>
          <div class="flex items-center justify-between mt-10px pl-20px">
            <div class="w-50px h-28px bg_wrap_c1 text-#84C2E4" v-for="item in options" :key="item.name"
              :class="checked === item.name ? 'is_active' : ''" @click="checked = item.name">
              <div class="w_1 w-100% h-14px text-6px">{{ item.value }}</div>
              <div class="w_2 w-100% h-14px text-9px">{{ item.name }}</div>
            </div>
          </div>
          <div class="mt-22px flex justify-between items-center">
            <el-radio-group size="small" class="ml-20px" v-model="radio3">
              <el-radio-button label="电网分区" value="1" />
              <el-radio-button label="特殊群组" value="2" />
            </el-radio-group>
            <div>
              <el-input v-model="search2" class="h-24px" size="small" style="width: 218px">
                <template #append>
                  <el-button :icon="Search" />
                </template>
              </el-input>
              <el-select size="small" style="width: 160px" class="ml-20px">
                <el-option v-for="item in []" :key="item" :label="item" :value="item" />
              </el-select>
            </div>
          </div>
          <div class="flex items-center justify-between mt-10px pl-20px">
            <div class="w-50px h-28px bg_wrap_c1 text-#84C2E4" v-for="item in options.slice(6)" :key="item.name"
              :class="checked === item.name ? 'is_active' : ''" @click="checked = item.name">
              <div class="w_1 w-100% h-14px text-6px">{{ item.value }}</div>
              <div class="w_2 w-100% h-14px text-9px">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import r1 from '@/assets/forecast/data-query/r_1.png'
import r2 from '@/assets/forecast/data-query/r_2.png'
import r3 from '@/assets/forecast/data-query/r_3.png'
import { ref } from 'vue';

const radio = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const date = ref()
const search1 = ref('')
const search2 = ref('')

const queryChartOptins = (xData: number[], a: number[], b: number[]) => {
  return {
    tooltip: {
      trigger: "axis",
      show: false,
    },
    xAxis: {
      type: "category",
      data: [],
      axisLabel: {
        interval: 0,
        color: "#909399",
        fontSize: 8
      },
    },
    legend: {
      left: "right",
      iconSize: 10,
      backgroundColor: "transparent",
      textStyle: {
        color: '#fff',
        fontSize: 8
      }
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 25000,
      splitLine: {
        show: false,
        lineStyle: {
          type: "dashed",
          dashOffset: 2
        }
      },
      axisLabel: {
        // interval: 0,
        color: "#909399",
        fontSize: 10
      },
      // scale: true //自适应
    },
    grid: {
      top: 28,
      left: 44,
      right: 10,
      bottom: 24,
      containLabel: true
    },
    series: [
      {
        name: '实测负荷',
        symbolSize: function (data: any,) {
          const size = data.length
          const value = data[2]

          if (size === 4) {
            return [20, value];
          } else {
            const max = Math.max(...a)
            return [12, value / max * 94];
          }

        },
        hoverAnimation: false,
        symbolOffset: ['0%', '-50%'], //图标位置偏移
        data: xData.map((item, i) => [[item, 11500, a[i]], [item, 12000 + a[i], 5, 't']]).flat(),
        type: 'scatter',
        symbol: "rect",
        itemStyle: {
          normal: {
            opacity: 1,
            color: '#b8b8b8'
          }
        }
      },

      {
        name: '特殊群组',
        symbolSize: function (data: any) {
          const size = data.length
          const value = data[2]
          if (size === 4) {
            return [12, value];
          } else {
            const max = Math.max(...a)
            return [12, value / max * 90];
          }

        },
        hoverAnimation: false,
        symbolOffset: ['0%', '-50%'], //图标位置偏移
        data: xData.map((item, i) => [[item, 8500, -b[i]], [item, 8400 - b[i], -5, 'b']]).flat(),
        type: 'scatter',
        symbol: "rect",
        itemStyle: {
          normal: {
            opacity: 1,
            color: '#42B6F6'
          }
        }
      }
    ]
  }
}
const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const a = [6000, 12000, 3000, 12000, 8000, 5000, 12000, 8500, 11000, 6000, 12000, 6000, 4000]
const b = [7000, 5000, 4000, 6000, 6000, 1000, 6000, 4000, 5000, 4000, 1500, 6000, 5000]
const chart1Options = queryChartOptins(xData, a, b)
const options = [
  {
    name: '亭卫变',
    value: 'TingWeiBian'
  },
  {
    name: '远东变',
    value: 'YuanDongBian'
  },
  {
    name: '黄渡变',
    value: 'HuangDuBian'
  },
  {
    name: '练塘变',
    value: 'LianTangBian'
  },
  {
    name: '顾路变',
    value: 'GuLuBian'
  },
  {
    name: '杨高变',
    value: 'YangGaoBian'
  },
  {
    name: '三林变',
    value: 'SanLinBIan'
  },
  {
    name: '新余变',
    value: 'XinYuBian'
  },
  {
    name: '徐行变',
    value: 'XuXingBian'
  },
  {
    name: '崇明变',
    value: 'ChongMingBian'
  },
  {
    name: '南桥变',
    value: 'NanQiaoBian'
  },
  {
    name: '杨行变',
    value: 'YanXingBian'
  },
  {
    name: '泗泾变',
    value: 'SiJingBian'
  },
]
const checked = ref('亭卫变')
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

::v-deep(.el-input-group__append) {
  padding: 0px 16px;

  .el-button--small {
    padding: 1px 11px;
  }
}

.bg_wrap_c1 {
  background: url('@/assets/resources/meta-analysis/c1.png');
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  cursor: pointer;
}


.is_active {
  &.bg_wrap_c1 {
    background: url('@/assets/resources/meta-analysis/c2.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .w_1 {
    color: #F0C893;
  }

  .w_2 {
    color: #F0C893;
  }
}
</style>
