<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-17 10:35:09
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-25 14:41:44
-->
<template>
  <div>
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
          <span>事件信息</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px flex justify-center items-center">
          <el-image class="w-317px mt-4px" :src="la1" fit="fill" />
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="mt-18px">
    <CapacityRatio title="各行业发电机组数量占比"></CapacityRatio>
  </div>
  <div class="mt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
          <span>注册能力调控占比</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px flex justify-center items-center">
          <el-image class="w-302px" :src="lc1" fit="fill" />
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">

import ExteriorShell from '@/components/exteriorShell/index.vue'
import CapacityRatio from '@/views/resources/components/capacityRatio.vue'
import ra from '@/assets/task-traceability/motivational-information/la_1.png'

import la1 from '@/assets/task-traceability/order-electric-utilization/la_1.png'
import lc1 from '@/assets/task-traceability/order-electric-utilization/lc_1.png'

import { ref } from 'vue';



</script>

<style scoped lang="scss"></style>
