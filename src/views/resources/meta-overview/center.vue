<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-16 17:07:04
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-16 17:45:14
-->
<template>
  <div class="p-18px">
    <div class="flex items-center justify-between">
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          储能
        </div>
        <div class="flex items-center pl-6px">
          <span class="text-#95A0AB text-9px">发电单元数量</span>
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px " :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">1128</span>
              <span class="text-9px text-#95A0AB ml-4px">台</span>
            </span>
            <el-image class="w-6px h-4px " :src="ca3" fit="fill" />
          </div>
        </div>
        <div class="flex items-center pl-6px mt-4px">
          <span class="text-#95A0AB text-9px">发电容量占比</span>
          <div class="flex flex-col ml-6px">
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">15</span>
              <span class="text-9px text-#95A0AB ml-4px">%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          不可控分布式能源
        </div>
        <div class="flex items-center pl-6px">
          <span class="text-#95A0AB text-9px">发电单元数量</span>
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px " :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">2198</span>
              <span class="text-9px text-#95A0AB ml-4px">台</span>
            </span>
            <el-image class="w-6px h-4px " :src="ca3" fit="fill" />
          </div>
        </div>
        <div class="flex items-center pl-6px mt-4px">
          <span class="text-#95A0AB text-9px">发电容量占比</span>
          <div class="flex flex-col ml-6px">
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">27</span>
              <span class="text-9px text-#95A0AB ml-4px">%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          可控式能源
        </div>
        <div class="flex items-center pl-6px">
          <span class="text-#95A0AB text-9px">发电单元数量</span>
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px " :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">1490</span>
              <span class="text-9px text-#95A0AB ml-4px">台</span>
            </span>
            <el-image class="w-6px h-4px " :src="ca3" fit="fill" />
          </div>
        </div>
        <div class="flex items-center pl-6px mt-4px ">
          <span class="text-#95A0AB text-9px">发电容量占比</span>
          <div class="flex flex-col ml-6px">
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">14</span>
              <span class="text-9px text-#95A0AB ml-4px">%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="bg_wrap_ca w-138px h-84px pt-4px pl-4px">
        <div class="text-#AFEBF6">
          可控负荷
        </div>
        <div class="flex items-center pl-6px">
          <span class="text-#95A0AB text-9px">发电单元数量</span>
          <div class="flex flex-col ml-6px">
            <el-image class="w-6px h-4px " :src="ca2" fit="fill" />
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">1098</span>
              <span class="text-9px text-#95A0AB ml-4px">台</span>
            </span>
            <el-image class="w-6px h-4px " :src="ca3" fit="fill" />
          </div>
        </div>
        <div class="flex items-center pl-6px mt-4px">
          <span class="text-#95A0AB text-9px">发电容量占比</span>
          <div class="flex flex-col ml-6px">
            <span class="h-18px leading-18px pl-4px">
              <span class="text-18px text-#fff font-800">18</span>
              <span class="text-9px text-#95A0AB ml-4px">%</span>
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="pt-18px">
    <div class="flex justify-center items-center">
      <el-image class="w-585px h-374px " :src="cb1" fit="fill" />
    </div>
    <div class="flex justify-center items-center mt-10px">
      <el-image class="w-19px h-14px " :src="cb2" fit="fill" />
      <div class="text-center w-127px mx-66px">
        <div class="text-30px text-#B1E0EA font-700">43.49KW</div>
        <div class="text-18px text-#F2F5F6 font-400">发电单元容量</div>
      </div>
      <el-image class="w-19px h-14px origin-center rotate-180" :src="cb2" fit="fill" />
    </div>
    <div class="flex justify-center items-center mt-10px">
      <el-image class="w-402px h-44px " :src="cb3" fit="fill" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ca2 from '@/assets/resources/meta-overview/ca_2.png'
import ca3 from '@/assets/resources/meta-overview/ca_3.png'
import cb1 from '@/assets/resources/meta-overview/cb_1.png'
import cb2 from '@/assets/resources/meta-overview/cb_2.png'
import cb3 from '@/assets/resources/meta-overview/cb_3.png'


</script>

<style scoped lang="scss">
.bg_wrap_ca {
  background-image: url('@/assets/resources/meta-overview/ca_1.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
