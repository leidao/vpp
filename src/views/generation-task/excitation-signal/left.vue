<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-23 17:20:40
-->
<template>
  <div class="h-100%">
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>时间轴设置</span>
        </div>
      </template>
      <template #content>
        <div class="pl-10px my-10px h-100% flex items-center">
          <el-image class="w-210px " :src="la2" fit="fill" />
        </div>
      </template>

    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/generation-task/excitation-signal/la_1.png'
import la2 from '@/assets/generation-task/excitation-signal/la_2.png'
import { ref } from 'vue';


</script>

<style scoped lang="scss">
::v-deep(.el-input-group__append) {
  padding: 0px 16px;

  .el-button--small {
    padding: 1px 11px;
  }
}
</style>
