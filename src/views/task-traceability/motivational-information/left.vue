<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-17 10:35:09
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 16:46:46
-->
<template>
  <ExteriorShell>
    <template #title>
      <div class="h-26px flex items-center justify-between px-16px">
        <div>
          <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
          <span>激励型历史发电任务追溯列表</span>
        </div>
        <div>
          <el-select size="small" placeholder="日期选择" style="width: 120px" class="mr-20px">
            <el-option v-for="item in []" :key="item" :label="item" :value="item" />
          </el-select>
          <el-input v-model="search" size="small" class="h-24px" style="width: 160px">
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
      </div>
    </template>
    <template #content>
      <div class="p-10px">
        <div class="flex items-center pl-10px pt-10px">
          <div class="text-16px text-#fff mr-20px">发电任务类型</div>
          <div class="flex items-center">
            <el-checkbox-group v-model="checkedList" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="item in checkList" :key="item" :label="item" :value="item">
                {{ item }}
              </el-checkbox>
            </el-checkbox-group>
            <el-checkbox class="ml-20px" v-model="checkAll" :indeterminate="isIndeterminate"
              @change="handleCheckAllChange">
              全选
            </el-checkbox>
          </div>
        </div>
        <div class="flex items-center pl-10px pt-10px">
          <div class="text-16px text-#fff mr-20px">发电任务年限</div>
          <div class="flex items-center">
            <el-checkbox-group v-model="checkedList2" @change="handleCheckedCitiesChange2">
              <el-checkbox v-for="item in checkList2" :key="item" :label="item" :value="item">
                {{ item }}
              </el-checkbox>
            </el-checkbox-group>
            <el-checkbox class="ml-20px" v-model="checkAll2" :indeterminate="isIndeterminate2"
              @change="handleCheckAllChange2">
              全选
            </el-checkbox>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-x-28px gap-y-22px mt-20px">
          <div v-for="item in picData" :key="item.url">
            <div class="mt-10px  px-10px">
              <div class="flex items-center justify-between text-10px">
                <span class="text-#6589B5">20</span>
                <span class="text-#4FAF8F">30</span>
                <span class="text-#CEA668">40</span>
                <span class="text-#993D3E">50+</span>
              </div>
              <div class="l_bold_a w-100%"></div>
            </div>
            <div class="mt-8px p-10px flex items-center justify-center bg-#03253c96">
              <el-image class="w-100%" :src="item.url" fit="fill" />
            </div>
            <div class="flex items-center justify-center mt-10px">
              <div class="w-3px h-18px bg-#2E5269 mr-6px"></div>
              <div class="w-204px h-18px bg-#2E5269 flex text-12px text-#84c0d4 items-center justify-center">
                {{ item.name }}</div>
              <div class="w-3px h-18px bg-#2E5269 ml-6px"></div>
            </div>
          </div>
        </div>
        <div class="mt-16px flex items-center justify-between">
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
        </div>


      </div>
    </template>
  </ExteriorShell>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import ra from '@/assets/task-traceability/motivational-information/la_1.png'
import la_2 from '@/assets/task-traceability/motivational-information/la_2.png'
import la_3 from '@/assets/task-traceability/motivational-information/la_3.png'
import la_4 from '@/assets/task-traceability/motivational-information/la_4.png'
import la_5 from '@/assets/task-traceability/motivational-information/la_5.png'
import la3 from '@/assets/resources/meta-enroll/la_3.png'

import { ref } from 'vue';
const picData = [
  {
    name: '2024年迎峰度冬需求响应市场需求',
    url: la_2
  },
  {
    name: '2024年迎峰度冬需求响应市场需求',
    url: la_3
  },
  {
    name: '2024年迎峰度冬需求响应市场需求',
    url: la_4
  },
  {
    name: '2024年迎峰度冬需求响应市场需求',
    url: la_5
  },
]
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedList = ref<string[]>([])
const checkList = ['负荷控制', '有序用电', '紧急需求响应', '需求侧竞价', '容量/辅助计算']
const handleCheckAllChange = (val: boolean) => {
  checkedList.value = val ? checkList : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === checkList.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < checkList.length
}

const checkAll2 = ref(false)
const isIndeterminate2 = ref(true)
const checkedList2 = ref<string[]>([])
const checkList2 = ['2024年', '2023年', '2022年']
const handleCheckAllChange2 = (val: boolean) => {
  checkedList2.value = val ? checkList2 : []
  isIndeterminate2.value = false
}
const handleCheckedCitiesChange2 = (value: string[]) => {
  const checkedCount = value.length
  checkAll2.value = checkedCount === checkList2.length
  isIndeterminate2.value = checkedCount > 0 && checkedCount < checkList2.length
}
const search = ref('')
</script>

<style scoped lang="scss">
.l_wrap_a {
  width: 334px;
  height: 46px;
  background: rgba(37, 90, 125, 0.56);

  .pillar {
    width: 3px;
    height: 18px;
    background: #255A7D;
    margin: 0px 6px;
  }
}

.l_bold_a {
  height: 6px;
  background: linear-gradient(-90deg, #F5594A 0%, #FEB14B 33%, #67D8AE 66%, #5BAEFD 100%);
}

::v-deep(.el-tag--small) {
  height: 18px;
  font-size: 10px;
}

::v-deep(.el-input-group__append) {
  padding: 0px 16px;

  .el-button--small {
    padding: 1px 11px;
  }
}

::v-deep(.el-checkbox) {
  margin-right: 20px;

}
</style>
