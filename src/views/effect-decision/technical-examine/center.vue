<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-25 16:44:10
-->
<template>
  <div class="h-100%">
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="lb1" fit="fill" />
          <span>虚拟电厂技术参数考核</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px my-10px h-100% flex flex-col justify-between">
          <div class="flex items-center justify-between" v-for="(item, i) in paramsInfo" :key="i">
            <div>
              <div v-for="(each, ind) in item" :key="ind"
                class="flex items-center justify-between px-4px w-140px h-24px bg-#103042a6 mt-10px">
                <div class="flex items-center ">
                  <div class="w-2px h-2px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-2">{{ each.a }}</div>
                </div>
                <div class="flex items-center">
                  <span class="text-#FFFFFF text-12px">{{ each.b }}</span>
                  <span class="text-#999 text-10px ml-4px">{{ each.c }}</span>
                </div>
              </div>
            </div>
            <div>
              <el-image class="w-160px h-132px" :src="ca1" fit="fill" />
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

import lb1 from '@/assets/effect-decision/technical-examine/lb_1.png'
import ca1 from '@/assets/effect-decision/technical-examine/ca_1.png'
import { reactive, ref } from 'vue';

const paramsInfo = [
  [
    {
      a: '爬坡耗时',
      b: 845.41,
      c: 'min'
    }
  ],
  [
    {
      a: '参与机组数量',
      b: 120,
      c: '户'
    },
    {
      a: '在线机组数量',
      b: 130,
      c: '户'
    }
  ],
  [
    {
      a: '爬坡速度',
      b: 1.97,
      c: 'kW/min'
    },
    {
      a: '响应量',
      b: 1.97,
      c: 'kW'
    },
    {
      a: '完成耗时',
      b: 845.81,
      c: 'min'
    }
  ],
  [
    {
      a: '电量偏差',
      b: 120,
      c: 'kWh'
    },
    {
      a: '负荷偏差',
      b: 130,
      c: 'kW'
    },
    {
      a: '目标调控负荷',
      b: 1.97,
      c: 'kW'
    },
    {
      a: '实际调控负荷',
      b: 1.97,
      c: 'kW'
    }
  ]
]


</script>

<style scoped lang="scss"></style>
