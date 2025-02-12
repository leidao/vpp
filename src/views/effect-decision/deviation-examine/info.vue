<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 16:49:10
-->
<template>
  <div class="h-100%">
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="props.icon" fit="fill" />
          <span>{{ props.name }}</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px h-100%">
          <div class="flex items-center justify-between">
            <el-input v-model="search" size="small" style="width: 60px" />
            <el-date-picker v-model="date1" type="date" size="small" style="width: 102px" />
            <el-date-picker v-model="date2" type="date" size="small" style="width: 102px" />
          </div>
          <slot />
          <div class="px-16px mt-60px" v-for="(item, i) in (props.paramsInfo || [])" :key="i">
            <div v-for="(each, ind) in item" :key="ind"
              class="flex items-center justify-between px-10px w-100% max-w-234px h-24px bg-#103042a6 mt-10px">
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
        </div>
      </template>

    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/effect-decision/deviation-examine/la_1.png'
import { reactive, ref } from 'vue';
import Chart from '@/components/chart/chart.vue'

const search = ref('')
const date1 = ref()
const date2 = ref()
const props = defineProps({
  name: String,
  paramsInfo: Array,
  icon: String,
})




</script>

<style scoped lang="scss">
::v-deep(.el-input-group__append) {
  padding: 0px 16px;

  .el-button--small {
    padding: 1px 11px;
  }
}

::v-deep(.el-timeline) {
  padding-left: 20px;

  .el-timeline-item:last-child {
    .el-timeline-item__wrapper {
      display: flex;
      align-items: center;
      justify-content: start;
    }

    .el-timeline-item__wrapper:before {
      content: "";
      width: 2px;
      height: 100%;
      background-color: #e5e7ee;
      position: absolute;
      top: 13px;
      left: 4px;
    }
  }
}

.timeline_wrap {
  height: calc(100% - 40px);
  overflow: auto;
}
</style>
