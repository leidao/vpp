<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-20 15:43:02
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 16:43:47
-->

<template>
  <div>
    <ExteriorShell>
      <template #content>
        <div class="p-16px">
          <div class="flex justify-center relative">
            <el-image class="w-574px h-62px" :src="la1" fit="fill" />
            <div class="text-18px text-#84E1F2 font-500 absolute left-0px right-0px text-center">虚拟电厂历史数据查询</div>
          </div>
          <div class="flex justify-end mt-18px">
            <el-input v-model="search" size="small" style="width: 218px">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </div>
          <div class="flex justify-between items-center mt-12px">
            <div class="bg-#ffffff1a px-8px py-4px rounded-4px">
              <div class="text_wrap">
                用电量：1087kWh
              </div>
            </div>
            <div class="relative">
              <el-image class="w-148px h-38px" :src="la3" fit="fill" />
              <div class="text_wrap text-12px absolute left-0px top-10px right-0px text-center">
                累计发电量：1087kWh
              </div>
            </div>
          </div>
          <div class="mt-10px">
            <el-image class="w-100%" :src="la2" fit="fill" />
          </div>
          <div class="flex justify-between items-center mt-16px">
            <div class="bg-#ffffff1a px-8px py-4px rounded-4px">
              <div class="text_wrap2">
                发电量：1183kWh
              </div>
            </div>
            <div class="relative">
              <el-image class="w-148px h-38px" :src="la3" fit="fill" />
              <div class="text_wrap2 text-12px absolute left-0px top-10px right-0px text-center">
                累计发电量：1183kWh
              </div>
            </div>
          </div>
          <div class="mt-10px">
            <el-image class="w-100%" :src="la2" fit="fill" />
          </div>
          <div class="flex justify-end items-center mt-45px">
            <el-date-picker v-model="date" type="date" size="small" />
            <el-radio-group size="small" class="ml-20px" v-model="radio">
              <el-radio-button label="总负荷" value="1" />
              <el-radio-button label="用电负荷" value="2" />
              <el-radio-button label="发电负荷" value="3" />
            </el-radio-group>
            <el-button type="primary">导出</el-button>
            <el-button type="primary">查询</el-button>
          </div>
          <div>
            <el-image class="w-100%" :src="la4" fit="fill" />
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/forecast/multi-dimension/la_1.png'
import la2 from '@/assets/forecast/multi-dimension/la_2.png'
import la3 from '@/assets/forecast/multi-dimension/la_3.png'
import la4 from '@/assets/forecast/multi-dimension/la_4.png'
import { ref } from 'vue';

const radio = ref('1')

const date = ref()
const search = ref('')
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

.text_wrap {
  background-image: linear-gradient(to right, #fff, #2a8efd);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.text_wrap2 {
  background-image: linear-gradient(to right, #fff, #77baa9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
