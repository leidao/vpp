<template>
  <div class="pt-18px">
    <div class="flex items-center justify-between pl-30px">
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          实时负荷
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">109.80</span>
              <span class="text-9px text-#95A0AB ml-4px">kW</span>
            </span>
          </div>
        </div>

      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          发电负荷因子
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">109.9</span>
              <span class="text-9px text-#95A0AB ml-4px">%</span>
            </span>
          </div>
        </div>

      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          可调控负荷
        </div>
        <div class="flex items-center pl-6px">
          <span class="text-#95A0AB text-9px">削峰</span>
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px " :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">12.3</span>
              <span class="text-9px text-#95A0AB ml-4px">kW</span>
            </span>
            <el-image class="w-6px h-4px " :src="ca3" fit="fill" />
          </div>
        </div>
        <div class="flex items-center pl-6px mt-4px">
          <span class="text-#95A0AB text-9px">填谷</span>
          <div class="flex flex-col ml-6px">
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">12.3</span>
              <span class="text-9px text-#95A0AB ml-4px">kW</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          主变容量
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">109.9</span>
              <span class="text-9px text-#95A0AB ml-4px">kVA</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          发电机组
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">53568</span>
              <span class="text-9px text-#95A0AB ml-4px">户</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          发电单元
        </div>
        <div class="flex items-center pl-6px h-50px">
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px mb-8px" :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">654687</span>
              <span class="text-9px text-#95A0AB ml-4px">台</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import ca2 from '@/assets/resources/meta-overview/ca_2.png'
import ca3 from '@/assets/resources/meta-overview/ca_3.png'
</script>

<style scoped lang="scss">
.bg_wrap_ca {
  background-image: url('@/assets/resources/meta-overview/ca_1.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
