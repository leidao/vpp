<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 16:47:23
-->
<template>
  <div>
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="ra1" fit="fill" />
          <span>发布单元类型排名</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px">
          <div class="p-8px h-250px">
            <Chart height="100%" :options="chart2Options" />
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="mt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="rb1" fit="fill" />
          <span>需求响应技术参数考核</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px h-314px">
          <div>
            <el-input v-model="search" size="small" class="mr-10px" style="width: 160px">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </div>
          <div class="mt-10px px-10px">
            <el-tree node-key="id" :default-expanded-keys="['2']" :data="data" :props="defaultProps" accordion>
              <template #default="{ node, data }">
                <div class="flex items-center">
                  <el-icon :size="22" :color="data.type === 'show' ? '#4F6A7E' : '#767676'">
                    <Folder />
                  </el-icon>
                  <span class="text-14px ml-12px" :style="computedColor(node)">
                    {{ node.label }}
                  </span>
                </div>
              </template>
            </el-tree>
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import { Search, Folder } from '@element-plus/icons-vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import ra1 from '@/assets/effect-decision/technical-examine/ra_1.png'
import rb1 from '@/assets/effect-decision/technical-examine/rb_1.png'
import rc2 from '@/assets/home/rc_2.png'
import { createOption } from '@/components/chart';
import Chart from '@/components/chart/chart.vue'
import * as echarts from "echarts"
import { onMounted, reactive, ref } from 'vue';

const search = ref('')
const chart2Options = reactive<any>(createOption({
  legend: { data: ['响应偏差率', '在线率', '爬坡率', '响应速度'] },
  yAxis: { show: false },
  grid: { left: 10 },
  tooltip: { show: false }
}))

const computedColor = (node: any) => {

  if (node.expanded) {
    return { color: '#38CEBF' }
  } else if (node.data.type === 'show') {
    return { color: '#4F6A7E' }
  } else {
    return { color: '#767676' }
  }

}
const defaultProps = {
  children: 'children',
  label: 'label',
}

const data = [
  {
    id: '1',
    label: '1#数据包文件',
    children: [
      {
        id: '1-1',
        label: '1-1#数据 AAA:R.X.C',
      },
    ],
  },
  {
    id: '2',
    label: '2#数据包文件',
    children: [
      {
        id: '2-1',
        label: '2-1#数据 AAA:R.X.C',
      },
      {
        id: '2-2',
        label: '2-2#数据 RRC:D.A.X',
      },
      {
        id: '2-3',
        label: '2-3#数据 RRC:SSS.AC',
        type: 'show'
      },
      {
        id: '2-4',
        label: '2-4#数据 FS:FSSS.CAY',
        type: 'show'
      },
      {
        id: '2-5',
        label: '2-5#数据 D:FSKYJ.CJKT',
      },
      {
        id: '2-6',
        label: '2-6#数据 ACD:GFHT.S.B',
        type: 'show'
      },
      {
        id: '2-7',
        label: '2-7#数据 RRC:SSR.T.A',
        type: 'show'
      },
    ],
  },
  {
    id: '3',
    label: '3#数据包文件',
    children: [
      {
        id: '3-1',
        label: '3-1#数据 AAA:R.X.C',
      },
      {
        id: '3-2',
        label: '3-2#数据 AAA:R.X.C',
      },
    ],
  },
]


onMounted(() => {
  const colors = ['#5ED8AF', '#31D3E8', '#fff', '#FDB74F']
  chart2Options.xAxis.data = ['电力负荷', '交流电', '电力负荷', '交流电', '光伏发电站', '光伏发电站', '电池', '风力', '电力负荷', '电力负荷']
  chart2Options.series = [
    {
      data: [30, 100, 170, 200, 118, 156, 40, 120, 180, 90],
      type: "bar",
      color: '#5cc4e9',
      barWidth: 6,
      barGap: '80%',
      label: {
        show: true,
        position: 'bottom',
        offset: [5, -213],
        fontSize: 8,
        color: '#fff',
        formatter: () => '08:18',
        backgroundColor: 'rgba(180, 180, 180, 0.2)',
        padding: [3, 6, 3, 6],
        borderRadius: 2
      }
    },
    {
      data: [100, 160, 200, 70, 180, 96, 30, 100, 140, 50],
      type: "bar",
      color: '#f5ba60',
      barWidth: 6,
      // barGap: '100%',
      label: {
        show: true,
        position: 'bottom',
        offset: [-6, -196],
        formatter: () => '',
        width: 26,
        height: 194,
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

<style scoped lang="scss">
::v-deep(.el-input-group__append) {
  padding: 0px 16px;

  .el-button--small {
    padding: 1px 11px;
  }
}
</style>
