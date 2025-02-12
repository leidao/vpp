<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-13 09:35:57
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-13 11:20:27
-->
<template>
  <div class="pt-10px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="a" fit="fill" />
          <span>容量指标</span>
        </div>
      </template>
      <template #content>
        <div class="px-16px mb-6px">
          <div class="flex justify-between mt-6px">
            <div class="w-106px">
              <div class="bg_wrap_c text-8px text-#C2D6E5 pl-18px">注册虚拟电厂数量</div>
              <div class="text-center">
                <span class="text-18px text-#fff font-bold">432</span>
                <span class="text-12px text-#869bb0">家</span>
              </div>
            </div>
            <div class="w-106px">
              <div class="bg_wrap_c text-8px text-#C2D6E5 pl-18px">注册发电机组数量</div>
              <div class="text-center">
                <span class="text-18px text-#fff font-bold">4543</span>
                <span class="text-12px text-#869bb0">户</span>
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-6px">
            <div class="w-106px">
              <div class="bg_wrap_c text-8px text-#C2D6E5 pl-18px">注册发电单元</div>
              <div class="text-center">
                <span class="text-18px text-#fff font-bold">6436</span>
                <span class="text-12px text-#869bb0">户</span>
              </div>
            </div>
            <div class="w-106px">
              <div class="bg_wrap_c text-8px text-#C2D6E5 pl-18px">分布式额定能源装机容量</div>
              <div class="text-center">
                <span class="text-18px text-#fff font-bold">866</span>
                <span class="text-12px text-#869bb0">kW</span>
              </div>
            </div>
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>
  <div class="pt-16px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="b" fit="fill" />
          <span>运行模式:计划曲线</span>
        </div>
      </template>
      <template #content>
        <div class="px-10px my-10px">
          <div>
            <div class="h-15px flex items-center px-2px">
              <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
              <span class="text-11px text-#9AAEBF font-500">注册调控能力</span>
            </div>
            <div class="text-9px text-#5BAFCB font-500 pl-16px">
              <span>削峰：</span>
              <span class="text-15px text-#fff">18.30</span>
              <span>kW</span>
              <span class="ml-20px">填谷：</span>
              <span class="text-15px text-#fff">13.80</span>
              <span>kW</span>
            </div>
          </div>
          <div class="flex items-center px-4px my-5px">
            <div class="w-8px h-2px bg-#768e95"></div>
            <div class="flex-1 h-1px bg-#141a1e"></div>
            <div class="w-8px h-2px bg-#768e95"></div>
          </div>
          <div class="h-15px flex items-center px-2px">
            <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
            <span class="text-11px text-#9AAEBF font-500">发电负荷因子：</span>
            <span class="text-15px text-#fff font-500">25.70</span>
            <span class="text-9px text-#5BAFCB font-500 mt-2px">kW</span>
          </div>
          <div class="h-15px flex items-center px-2px mt-12px">
            <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
            <span class="text-11px text-#9AAEBF font-500">网供负荷：</span>
            <div class="bg_wrap_d w-154px flex items-center justify-center font-500">
              <span class="text-15px text-#fff ">18.52</span>
              <span class="text-9px text-#5BAFCB ">kW</span>
            </div>
          </div>
          <div class="h-15px flex items-center px-2px mt-12px">
            <el-image class="w-9px h-9px mr-6px" :src="c" fit="fill" />
            <span class="text-11px text-#9AAEBF font-500">上网负荷：</span>
            <div class="bg_wrap_d w-154px flex items-center justify-center font-500">
              <span class="text-15px text-#fff ">17.62</span>
              <span class="text-9px text-#5BAFCB ">kW</span>
            </div>
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>
  <div class="pt-16px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="e" fit="fill" />
          <span>当日累计占比</span>
        </div>
      </template>
      <template #content>
        <div class="px-16px flex items-center">
          <div class="w-88px h-92px flex items-center justify-center bg_warp_e">
            <span class="text-14px text-#fff font-700">46734</span>
          </div>
          <el-image class="w-54px h-25px" :src="f" fit="fill" />
          <div class="w-88px h-92px flex items-center justify-center bg_warp_e">
            <span class="text-14px text-#fff font-700">43241</span>
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>
  <div class="pt-16px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="h" fit="fill" />
          <span>年度平均考核指标</span>
        </div>
      </template>
      <template #content>
        <div class="px-16px my-10px">
          <div class="bg_wrap_f pt-6px">
            <div class="flex">
              <div class="w-75px flex items-center pl-12px pt-8px">
                <div class="w-2px h-2px bg-#fff mr-4px"></div>
                <span class="text-11px text-#BDD3DA">响应偏差率</span>
              </div>
              <div class="w-75px flex items-center pl-12px pt-8px">
                <div class="w-2px h-2px bg-#fff mr-4px"></div>
                <span class="text-11px text-#BDD3DA">响应完成率</span>
              </div>
            </div>
            <div class="flex">
              <div class="w-75px flex items-center pl-12px pt-8px">
                <el-image class="w-10px h-12px mr-4px" :src="x2" fit="fill" />
                <span class="text-11px text-#B8656E">41%</span>
              </div>
              <div class="w-75px flex items-center pl-12px pt-8px">
                <el-image class="w-10px h-12px mr-4px" :src="x3" fit="fill" />
                <span class="text-11px text-#74968a">44%</span>
              </div>
            </div>
          </div>
          <div class="bg_wrap_h mt-6px pl-6px pt-16px">
            <div class="flex items-center">
              <div class="w-2px h-2px bg-#fff mr-4px"></div>
              <span class="text-11px text-#BDD3DA">机组爬坡率</span>
              <el-image class="w-72px h-10px mr-4px ml-6px" :src="x5" fit="fill" />
            </div>
            <div class="flex items-center mt-10px">
              <el-image class="w-10px h-12px mr-4px" :src="x1" fit="fill" />
              <span class="text-11px text-#668cc0">39%min</span>
              <el-image class="w-72px h-10px mr-4px ml-10px" :src="x4" fit="fill" />
            </div>
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'

import a from '@/assets/home/a.png'
import b from '@/assets/home/b.png'
import c from '@/assets/home/c.png'
import e from '@/assets/home/e.png'
import f from '@/assets/home/f.png'
import h from '@/assets/home/h.png'
import x1 from '@/assets/home/x1.jpg'
import x2 from '@/assets/home/x2.jpg'
import x3 from '@/assets/home/x3.jpg'
import x4 from '@/assets/home/x4.jpg'
import x5 from '@/assets/home/x5.jpg'



</script>

<style scoped lang="scss">
.bg_wrap_c {
  width: 100%;
  height: 16px;
  background: url('@/assets/home/tb.png');
  background-size: 100px auto;
  background-repeat: no-repeat;
  padding-top: 2px;
}

.bg_wrap_d {
  // width: 100%;
  background: url('@/assets/home/d.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_warp_e {
  background: url('@/assets/home/g.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_wrap_f {
  width: 100%;
  height: 69px;
  background: url('../assets/home/d2.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.bg_wrap_h {
  width: 100%;
  height: 69px;
  background: url('../assets/home/d1.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
