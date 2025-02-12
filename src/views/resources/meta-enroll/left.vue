<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-17 10:35:09
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 16:28:42
-->
<template>
  <ExteriorShell>
    <template #extra>
      <div class="h-18px"></div>
    </template>
    <template #title>
      <div class="h-26px flex items-center px-16px">
        <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
        <span>虚拟电厂具体信息</span>
      </div>
    </template>
    <template #content>
      <div class="p-10px">
        <div class="l_wrap_a flex items-center">
          <div class="pillar"></div>
          <div class="text-11px text-#7FDFE8">2020.06.29 策略实施</div>
          <div class="pillar"></div>
          <div class="text-9px text-#fff">
            <div>通过AI算法对该机房采集数据进行分析</div>
            <div>精确计算冷负荷，识别冷量损失，定位节能点。</div>
          </div>
        </div>
        <div class="mt-10px flex items-center justify-between">
          <el-tag color="#0898AE" effect="dark">
            三洋公司
          </el-tag>
          <el-input size="small" v-model="search" style="width: 218px" placeholder="变电所实时监控画面" />
          <div class="w-18px h-18px bg-#B7D6E6 flex justify-center items-center cursor-pointer">
            <div class="w-8px h-8px bg-#123F45 rounded-8px"></div>
          </div>
        </div>
        <div class="mt-10px">
          <div class="flex items-center justify-between text-10px">
            <span class="text-#6589B5">20</span>
            <span class="text-#4FAF8F">30</span>
            <span class="text-#CEA668">40</span>
            <span class="text-#993D3E">50+</span>
          </div>
          <div class="l_bold_a w-100%"></div>
        </div>
        <div class="mt-8px py-10px flex items-center justify-center bg-#03253c96">
          <el-image class="w-312px h-118px" :src="la_3" fit="fill" />
        </div>
        <div class="mt-8px flex items-center justify-between">
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la4" fit="fill" />
          <el-image class="w-54px h-54px" :src="la4" fit="fill" />
        </div>

        <div class="mt-30px flex items-center justify-between">
          <el-tag color="#0898AE" effect="dark">
            三洋公司
          </el-tag>
          <el-input size="small" v-model="search1" style="width: 218px" placeholder="变电所实时监控画面" />
          <div class="w-20px h-20px bg-#B7D6E6 flex justify-center items-center cursor-pointer">
            <div class="w-8px h-8px bg-#123F45 rounded-8px"></div>
          </div>
        </div>
        <div class="mt-10px">
          <div class="flex items-center justify-between text-10px">
            <span class="text-#6589B5">20</span>
            <span class="text-#4FAF8F">30</span>
            <span class="text-#CEA668">40</span>
            <span class="text-#993D3E">50+</span>
          </div>
          <div class="l_bold_a w-100%"></div>
        </div>
        <div class="mt-8px py-10px flex items-center justify-center bg-#03253c96">
          <el-image class="w-312px h-118px" :src="la_4" fit="fill" />
        </div>
        <div class="mt-8px flex items-center justify-between">
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la3" fit="fill" />
          <el-image class="w-54px h-54px" :src="la4" fit="fill" />
          <el-image class="w-54px h-54px" :src="la4" fit="fill" />
        </div>
      </div>
    </template>
  </ExteriorShell>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import ra from '@/assets/resources/meta-analysis/ra.png'
import la1 from '@/assets/resources/meta-enroll/la_1.png'
import la2 from '@/assets/resources/meta-enroll/la_2.png'
import la3 from '@/assets/resources/meta-enroll/la_3.png'
import la4 from '@/assets/resources/meta-enroll/la_4.png'
import la_3 from '@/assets/task-traceability/motivational-information/la_3.png'
import la_4 from '@/assets/task-traceability/motivational-information/la_4.png'
import { ref } from 'vue';

const search = ref('')
const search1 = ref('')
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
</style>
