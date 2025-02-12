<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-17 10:35:09
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-25 10:06:59
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
        <div class="p-10px h-158px mb-10px">
          <div class="flex justify-between h-100%">
            <div class="w-260px">
              <div class="flex items-center justify-center">
                <div class="relative w-283px">
                  <div class="absolute left-0px top-0px">
                    <el-image class="w-283px" :src="la1" fit="fill" />
                  </div>
                  <div class="absolute left-8px top-0px ">
                    <el-image class="w-283px animate-spin-slow" :src="la2" fit="fill" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-between py-6px h-100%">
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">事件名称</div>
                </div>
                <div class="text-#FFFFFF text-10px">常德虚拟平台响应</div>
              </div>
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">时间类型</div>
                </div>
                <div class="text-#FFFFFF text-10px">一级事件</div>
              </div>
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">发电负荷</div>
                </div>
                <div class="text-#FFFFFF text-10px">845.41kW</div>
              </div>
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">获得补贴</div>
                </div>
                <div class="text-#FFFFFF text-10px">无</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="mt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
          <span>能力占比</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px h-200px flex justify-around items-center">
          <el-image class="w-185px" :src="lb2" fit="fill" />
          <div>
            <div class="flex justify-center items-center">
              <div class="round_1"></div>
            </div>
            <div class="text-9px text-#E0E0E0 text-center mt-6px">
              虚拟电厂参与额度占比
            </div>
            <div class="flex justify-center items-center mt-30px">
              <div class="round_2"></div>
            </div>
            <div class="text-9px text-#E0E0E0 text-center mt-6px">
              发电机组参与额度占比
            </div>
          </div>
          <el-image class="w-185px" :src="lb1" fit="fill" />
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="mt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
          <span>参与虚拟电厂列表</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px h-160px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" width="50" label="序号" align='center' />
            <el-table-column property="a" label="发电单元名称" align='center' />
            <el-table-column property="b" label="发电单元类型" align='center' />
            <el-table-column property="c" label="问题描述" align='center' />
          </el-table>
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">

import ExteriorShell from '@/components/exteriorShell/index.vue'
import ra from '@/assets/task-traceability/motivational-information/la_1.png'
import la1 from '@/assets/task-traceability/demand-response-details/la_1.png'
import la2 from '@/assets/task-traceability/demand-response-details/la_2.png'
import lb1 from '@/assets/task-traceability/demand-response-details/lb_1.png'
import lb2 from '@/assets/task-traceability/demand-response-details/lb_2.png'


import { ref } from 'vue';

const tableData = [
  {
    a: '金华电厂',
    b: '2024.10.01',
    c: '电厂区域电量过高',
  },
  {
    a: '路平安电厂',
    b: '2024.10.01',
    c: '电厂区域电量过高',
  },
  {
    a: '石上电厂',
    b: '2024.10.01',
    c: '电厂区域电量过高',
  },
]

</script>

<style scoped lang="scss">
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
  // transform-origin: 10px 0px;
}

.round_1 {
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background: rgba(216, 216, 216, 0.1);
  box-shadow: 0px -1 4px 0px #3e6851;
  border: 1px solid #3e6851;
}

.round_2 {
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background: rgba(216, 216, 216, 0.2);
  box-shadow: 0px -1 4px 0px rgba(199, 160, 102, 1);
  border: 1px solid #C7A066;
}
</style>
