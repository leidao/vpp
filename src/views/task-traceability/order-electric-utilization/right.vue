<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 10:40:17
-->
<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="bg_wrap_ca w-128px h-78px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          目标调控负荷
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">132.81</span>
              <span class="text-9px text-#95A0AB ml-4px">kW</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-128px h-78px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          目标调控电量
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">177.64</span>
              <span class="text-9px text-#95A0AB ml-4px">kW</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-128px h-78px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          实际调控负荷
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">163.80</span>
              <span class="text-9px text-#95A0AB ml-4px">kW</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-128px h-78px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          实际调控电量
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">154.88</span>
              <span class="text-9px text-#95A0AB ml-4px">kW</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-128px h-78px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          事件收益
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">87.65</span>
              <span class="text-9px text-#95A0AB ml-4px">万元</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-128px h-78px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          开始时间
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">19:09:00</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-128px h-78px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          结束时间
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">21:09:00</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-352px w-100% flex justify-between">
    <div id="container" class="flex-1 mr-10px relative mt-14px">
      <el-image class="w-100% h-346px" :src="rb2" fit="fill" />
    </div>
    <div class="w-100px mr-8px">
      <div class="mt-14px" v-for="(controls, i) in controlData" :key="i">
        <div v-for="(control, ind) in controls" :key="control.name">
          <div class="flex justify-between items-end">
            <div class="text-#fff text-12px">
              {{ control.value }}kW
            </div>
            <div class="text-10px" :style="{ color: control.relation === 1 ? 'red' : '#57a1ba' }">
              <el-image class="w-6px h-4px mr-4px" :src="control.relation === 1 ? ca2 : ca3" fit="fill" />
              <span>{{ control.ratio }}%</span>
            </div>
          </div>
          <div class="text-8px text-#999">{{ control.name }}</div>
          <div v-if="ind !== controls.length - 1" class="w-100% h-1px bg-#3a3a3a mt-2px"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between mt-18px ">
    <div class="left flex-1 mr-8px">
      <ExteriorShell>
        <template #title>
          <div class="h-26px flex items-center px-16px">
            <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
            <span>参与虚拟电厂列表</span>
          </div>
        </template>
        <template #content>
          <div class="p-10px">
            <el-table :data="tableData" style="width: 100%" max-height="132">
              <el-table-column type="index" width="50" label="序号" align='center' />
              <el-table-column property="a" label="发电单元名称" align='center' />
              <el-table-column property="b" label="发电单元类型" align='center' />
              <el-table-column property="c" label="发电单元容量" align='center' />
              <el-table-column property="d" label="削峰响应负荷" align='center' />
              <el-table-column property="e" label="填谷响应负荷" align='center' />
              <el-table-column property="f" label="所属发电机组" align='center' />
              <el-table-column label="操作" align='center'>
                <template #default>
                  <el-button type="primary" size="small">
                    关闭
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="flex justify-center mt-10px mb-2px">
              <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" size="small"
                background="transparent" layout="total, prev, pager, next" :total="50" />
            </div>
          </div>
        </template>
      </ExteriorShell>
    </div>
    <div class="right ml-8px">
      <ExteriorShell>
        <template #title>
          <div class="h-26px flex items-center px-16px">
            <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
            <span>负荷数量占比</span>
          </div>
        </template>
        <template #content>
          <div class="p-8px h-188px">
            <Chart height="100%" :options="chart2Options" />
          </div>
        </template>
      </ExteriorShell>
    </div>
  </div>



</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import ca2 from '@/assets/resources/meta-overview/ca_2.png'
import ca3 from '@/assets/resources/meta-overview/ca_3.png'
import la1 from '@/assets/generation-task/price-signal/la_1.png'
import bg from '@/assets/task-traceability/order-electric-utilization/rb_1.png'
import { createOption } from '@/components/chart';
import Chart from '@/components/chart/chart.vue'
import * as echarts from "echarts"
import rc2 from '@/assets/home/rc_2.png'
import rb2 from '@/assets/task-traceability/order-electric-utilization/rb_2.png'
import { onMounted, reactive, ref } from 'vue';
import { GaodeMap, ImageLayer, Scene } from '@antv/l7';


const controlData = [
  [
    {
      value: 2344,
      ratio: 24,
      relation: 1,
      name: '削峰调控'
    },
    {
      value: 12.65,
      ratio: 12,
      relation: 2,
      name: '填谷调控'
    },
    {
      value: 13.85,
      ratio: 12,
      relation: 2,
      name: '发电负荷'
    },
  ],
  [
    {
      value: 1276,
      ratio: 9,
      relation: 1,
      name: '削峰调控'
    },
    {
      value: 14.89,
      ratio: 35,
      relation: 2,
      name: '填谷调控'
    },
    {
      value: 16.85,
      ratio: 16,
      relation: 1,
      name: '发电负荷'
    },
  ],
  [
    {
      value: 2387,
      ratio: 20,
      relation: 1,
      name: '削峰调控'
    },
    {
      value: 12.49,
      ratio: 17,
      relation: 2,
      name: '填谷调控'
    },
    {
      value: 14.66,
      ratio: 16,
      relation: 1,
      name: '发电负荷'
    },
  ]
]
const currentPage = ref(1)
const pageSize = ref(10)
const tableData = [
  {
    a: '金华电厂',
    b: '2024.01.09',
    c: '886KVA',
    d: '445KW',
    e: '434KW',
    f: '张三',
  },
  {
    a: '路平安电厂',
    b: '2024.01.09',
    c: '886KVA',
    d: '445KW',
    e: '434KW',
    f: '刘晓霞',
  },
  {
    a: '石上电厂',
    b: '2024.01.09',
    c: '546KVA',
    d: '245KW',
    e: '74KW',
    f: '罗晋家',
  },
  {
    a: '财网电厂',
    b: '2024.01.09',
    c: '676KVA',
    d: '475KW',
    e: '534KW',
    f: '李俊基',
  },
  {
    a: '三丰电厂',
    b: '2024.01.09',
    c: '686KVA',
    d: '445KW',
    e: '334KW',
    f: '李俊基',
  },
]

const chart2Options = reactive<any>(createOption({
  legend: { show: false },
  yAxis: { show: false },
  grid: { left: 10 }
}))

onMounted(() => {

  chart2Options.xAxis.data = ['电力负荷', '交流器', '电力负荷', '交流器', '光伏发电站', '光伏发电站']
  chart2Options.series = [
    {
      data: [30, 100, 170, 200, 118, 156],
      type: "bar",
      color: '#5cc4e9',
      barWidth: 6,
      barGap: '80%',
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
      color: '#f5ba60',
      barWidth: 6,
      // barGap: '100%',
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

  const scene = new Scene({
    id: 'container2',
    logoVisible: false,
    map: new GaodeMap({
      mapStyle: 'amap://styles/dark',
      // mapStyle: 'amap://styles/whitesmoke',
      center: [120.054228, 30.245705],
      pitch: 0,
      zoom: 11.5,
      dragEnable: false,
      zoomEnable: false,
      keyboardEnable: false,
      doubleClickZoom: false,
      scrollWheel: false,
      showLabel: false,
      token: '455cdb79bf8735a87862d83e16f06c94'
    }),
  });


  scene.addImage(
    'rb2',
    bg,
  );


  scene.on('loaded', () => {
    const container = document.getElementById('container2')
    const { left = 0, top = 0, width = 0, height = 0 } = container?.getBoundingClientRect() || {}

    const a = scene.containerToLngLat([0, 0])
    const b = scene.containerToLngLat([width, height])


    const imageLayer = new ImageLayer({})
      .source(
        bg, // 图片的 URL
        {
          parser: {
            type: 'image',
            extent: [a.lng, a.lat, b.lng, b.lat]
          },
        }
      );

    scene.addLayer(imageLayer);

  });

})


</script>

<style scoped lang="scss">
.bg_wrap_ca {
  background-image: url('@/assets/resources/meta-overview/ca_1.png');
  background-size: cover;
  background-repeat: no-repeat;
}



.right {
  flex: 1.829
}

::v-deep(.el-table) {
  th {
    .cell {
      padding: 0px 0px;
      min-width: 40px;
    }
  }
}
</style>
