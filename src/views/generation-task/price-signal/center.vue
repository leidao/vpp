<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-27 17:19:40
-->
<template>
  <div class="h-100%">
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>分时电价设定</span>
        </div>
      </template>
      <template #content>
        <div class="pl-10px my-10px h-100%">
          <div class="flex justify-end">
            <el-input v-model="search1" size="small" class="mr-10px" style="width: 62px">
            </el-input>
            <el-input v-model="search2" size="small" class="mr-10px" style="width: 104px">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
            <el-date-picker v-model="date" type="date" size="small" style="width: 124px" />
          </div>
          <div class="h-18px"></div>
          <simplebar data-simplebar-auto-hide="false" class="timeline_wrap">
            <el-timeline class="w-100%">
              <el-timeline-item v-for="(activity, index) in timeLine" :key="index">
                <template #dot>
                  <el-image class="w-16px h-10px mr-14px" :src="la2" fit="fill" />
                </template>
                <div>
                  <div class="text-12px text-#B7D5E4">{{ activity.timestamp }}</div>
                  <div class="flex items-center" v-for="item in activity.content" :key="item.type">
                    <div class="w-2px h-2px rounded-2px bg-#7DD4D9"></div>
                    <div class="w-40px text-10px text-#606060 ml-10px">{{ item.type }}</div>
                    <div class="text-12px text-#DDDDDD ml-14px">{{ item.value }}</div>
                  </div>
                </div>
              </el-timeline-item>
            </el-timeline>
          </simplebar>
        </div>
      </template>

    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue';
import { Search } from '@element-plus/icons-vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/generation-task/price-signal/la_1.png'
import la2 from '@/assets/generation-task/price-signal/la_2.png'
import { ref } from 'vue';

const radio = ref('1')

const search1 = ref('')
const search2 = ref('')
const date = ref()

const timeLine = [
  {
    content: [
      { type: '分时电价', value: '2021年1月1日分时电价' },
      { type: '有效时间', value: '2021年1月1日-2021年4月30日' },
      { type: '峰时段', value: '2021年1月1日' },
      { type: '谷时段', value: '2020年12月20日' },
      { type: '平时段', value: '2021年2月' },
    ],
    timestamp: '2020.05.01-2021.04.30',
  },
  {
    content: [
      { type: '分时电价', value: '2021年12月01日分时电价' },
      { type: '有效时间', value: '2021年12月01日-2022年3月30日' },
      { type: '峰时段', value: '2022年01月01日' },
      { type: '谷时段', value: '2021年09月30日' },
      { type: '平时段', value: '2022年02月' },
    ],
    timestamp: '2021.05.01-2022.04.30',
  },
  {
    content: [
      { type: '分时电价', value: '2022年11月11日分时电价' },
      { type: '有效时间', value: '2022年10月01日-2022年12月20日' },
      { type: '峰时段', value: '2023年01月01日' },
      { type: '谷时段', value: '2022年09月24日' },
      { type: '平时段', value: '2022年09月' },
    ],
    timestamp: '2022.05.01-2023.04.30',
  },
  {
    content: [
      { type: '分时电价', value: '2024年01月17日分时电价' },
      { type: '有效时间', value: '2024年01月01日-2024年02月20日' },
      { type: '峰时段', value: '2023年07月01日' },
      { type: '谷时段', value: '2024年02月20日' },
      { type: '平时段', value: '2024年03月' },
    ],
    timestamp: '2023.05.01-2024.04.30',
  },
  {
    content: [
      { type: '分时电价', value: '2024年01月17日分时电价' },
      { type: '有效时间', value: '2024年01月01日-2024年02月20日' },
      { type: '峰时段', value: '2023年07月01日' },
      { type: '谷时段', value: '2024年02月20日' },
      { type: '平时段', value: '2024年03月' },
    ],
    timestamp: '2024.05.01-2025.04.30',
  },
]
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
