<template>
  <ExteriorShell>
    <template #title>
      <div class="h-26px flex items-center px-16px">
        <el-image class="w-20px h-20px mr-14px" :src="la" fit="fill" />
        <span>基本信息</span>
      </div>
    </template>
    <template #content>
      <div class="px-16px mb-16px">
        <div>
          <div>
            <div class="h-15px flex items-center px-2px mt-10px">
              <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
              <span class="text-11px text-#9AAEBF font-500">注册调控能力</span>
            </div>
            <div class="text-9px text-#5BAFCB font-500 pl-16px">
              <span>削峰：</span>
              <span class="text-15px text-#fff">13.80</span>
              <span>kW</span>
              <span class="ml-20px">填谷：</span>
              <span class="text-15px text-#fff">1.80</span>
              <span>kW</span>
            </div>
            <div class="text-9px text-#5BAFCB font-500 pl-16px mt-6px">
              <el-image class="w-100px h-18px" :src="la2" fit="fill" />
              <el-image class="w-100px h-18px" :src="la3" fit="fill" />
            </div>
            <div class="flex justify-between items-end">
              <div>
                <div class="h-15px flex items-center px-2px mt-12px">
                  <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
                  <span class="text-11px text-#9AAEBF font-500">发电单元数量：</span>
                  <span class="text-15px text-#fff font-500">180</span>
                  <span class="text-9px text-#5BAFCB font-500 mt-2px">台</span>
                </div>
                <div class="h-15px flex items-center px-2px mt-12px">
                  <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
                  <span class="text-11px text-#9AAEBF font-500">发电单元容量：</span>
                  <span class="text-15px text-#fff font-500">180</span>
                  <span class="text-9px text-#5BAFCB font-500 mt-2px">kW</span>
                </div>
                <div class="h-15px flex items-center px-2px mt-12px">
                  <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
                  <span class="text-11px text-#9AAEBF font-500">发电机组数量：</span>
                  <span class="text-15px text-#fff font-500">312</span>
                  <span class="text-9px text-#5BAFCB font-500 mt-2px">户</span>
                </div>
                <div class="h-15px flex items-center px-2px mt-12px">
                  <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
                  <span class="text-11px text-#9AAEBF font-500">虚拟电厂数量：</span>
                  <span class="text-15px text-#fff font-500">584920</span>
                  <span class="text-9px text-#5BAFCB font-500 mt-2px">家</span>
                </div>
              </div>
              <div class="w-105px h-90px">
                <el-carousel height="70px" arrow="never" indicator-position="outside">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <el-image class="w-95px h-64px" :src="la1" fit="fill" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

  </ExteriorShell>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la from '@/assets/resources/meta-analysis/la.png'
import la1 from '@/assets/resources/meta-analysis/la_1.png'
import la2 from '@/assets/resources/meta-analysis/la_2.png'
import la3 from '@/assets/resources/meta-analysis/la_3.png'
import c from '@/assets/home/c.png'
</script>

<style scoped lang="scss">
::v-deep(.el-carousel__indicator) {
  padding: 6px 4px;
}

::v-deep(.el-carousel__button) {
  width: 10px;
}
</style>
