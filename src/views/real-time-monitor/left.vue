<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-13 09:35:57
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-20 13:55:29
-->
<template>
  <div class="pt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="lb" fit="fill" />
          <span>工业企业排名</span>
        </div>
      </template>
      <template #content>
        <div class="p-16px h-180px">
          <Chart height="100%" :options="chart1Options" />
        </div>
      </template>

    </ExteriorShell>
  </div>
  <div class="pt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="lb" fit="fill" />
          <span>工业企业潜力排名</span>
        </div>
      </template>
      <template #content>
        <div class="px-26px py-14px">
          <el-image class="w-440px h-115px mr-14px" :src="la" fit="fill" />
        </div>
      </template>

    </ExteriorShell>
  </div>
  <div class="pt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="lb" fit="fill" />
          <span>工业企业实测负荷排名</span>
        </div>
      </template>
      <template #content>
        <div class="px-26px pt-14px">
          <div class="h-140px">
            <Chart height="100%" :options="chart2Options" />
          </div>
          <div class="h-44px mb-20px">
            <el-image class="w-420px h-62px mr-14px" :src="lc" fit="fill" />
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>


</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'

import lb from '@/assets/resources/meta-analysis/lb.png'
import la from '@/assets/real-time-monitor/la.png'
import lc from '@/assets/real-time-monitor/lc.png'
import { createPictorialBarOption, createHBarOption } from '@/components/chart';

const chart1Options = createPictorialBarOption()
const chart2Options = createHBarOption()




</script>

<style scoped lang="scss"></style>
