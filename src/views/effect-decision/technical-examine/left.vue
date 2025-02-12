<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-25 16:06:47
-->
<template>
  <div>
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>地域信息</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px">
          <el-image class="w-320px h-280px" :src="la2" fit="fill" />
        </div>
      </template>

    </ExteriorShell>
  </div>
  <div class="mt-18px">
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="lb1" fit="fill" />
          <span>基本信息</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px">
          <el-image class="w-320px" :src="lb2" fit="fill" />
        </div>
      </template>

    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/effect-decision/technical-examine/la_1.png'
import la2 from '@/assets/effect-decision/technical-examine/la_2.png'
import lb1 from '@/assets/effect-decision/technical-examine/lb_1.png'
import lb2 from '@/assets/effect-decision/technical-examine/lb_2.png'
import { ref } from 'vue';

const radio = ref('1')

const search = ref('')


</script>

<style scoped lang="scss"></style>
