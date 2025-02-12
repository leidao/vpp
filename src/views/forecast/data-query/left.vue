<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-20 15:43:02
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-20 18:09:21
-->

<template>
  <div class="pt-18px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="h" fit="fill" />
          <span>辅助指标</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px">
          <div class="flex items-center justify-between px-16px">
            <div class="relative w-146px h-146px">
              <div class="absolute left-0px top-0px">
                <el-image class="w-146px h-146px" :src="la1" fit="fill" />
              </div>
              <div class="absolute left-0px top-0px">
                <el-image class="w-146px h-146px animate-spin-slow2" :src="la2" fit="fill" />
              </div>
              <div class="absolute left-0px top-0px">
                <el-image class="w-146px h-146px animate-spin-slow" :src="la3" fit="fill" />
              </div>
              <div class="absolute left-0px top-0px">
                <el-image class="w-146px h-146px animate-spin-slow" :src="la4" fit="fill" />
              </div>
            </div>
            <div class="flex flex-col justify-between h-154px py-10px">
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">不可控DG</div>
                </div>
                <div class="text-#FFFFFF">7892台</div>
              </div>
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">可控DG</div>
                </div>
                <div class="text-#FFFFFF">8252台</div>
              </div>
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">储能</div>
                </div>
                <div class="text-#FFFFFF">8979台</div>
              </div>
              <div class="flex items-center justify-between px-10px w-200px h-24px bg-#103042a6">
                <div class="flex items-center ">
                  <div class="w-4px h-4px bg-#3AB0E0"></div>
                  <div class="text-11px text-#5AB6DB ml-10px">可控负荷</div>
                </div>
                <div class="text-#FFFFFF">9856台</div>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center mt-16px">
            <div class="text-center">
              <el-image class="w-50px h-50px" :src="la5" fit="fill" />
              <div class="text-9px text-#959595">发电机组总数</div>
              <div class="text-14px text-#fff">2789台</div>
            </div>
            <div class="text-center">
              <el-image class="w-50px h-50px" :src="la6" fit="fill" />
              <div class="text-9px text-#959595">发电单元总数</div>
              <div class="text-14px text-#fff">42789台</div>
            </div>
            <div class="text-center">
              <el-image class="w-50px h-50px" :src="la7" fit="fill" />
              <div class="text-9px text-#959595">削峰能力占比</div>
              <div class="text-14px text-#fff">32%</div>
            </div>
            <div class="text-center">
              <el-image class="w-50px h-50px" :src="la7" fit="fill" />
              <div class="text-9px text-#959595">填谷能力占比</div>
              <div class="text-14px text-#fff">43%</div>
            </div>
          </div>


        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="pt-22px">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la" fit="fill" />
          <span>地理信息</span>
        </div>
      </template>
      <template #content>
        <div class="px-16px mb-16px relative">
          <div class="relative w-252px h-246px">
            <div class="absolute left-0px top-0px">
              <el-image class="w-252px h-246px" :src="lb1" fit="fill" />
            </div>
            <div class="absolute left-0px top-0px">
              <el-image class="w-252px h-246px animate-spin-slow" :src="lb2" fit="fill" />
            </div>
            <div class="absolute left-0px top-0px">
              <el-image class="w-252px h-246px animate-spin-with-offset" :src="lb2" fit="fill" />
            </div>
            <div class="absolute left-0px top-0px">
              <el-image class="w-252px h-246px animate-spin-with-offset2" :src="lb2" fit="fill" />
            </div>
          </div>
          <div class="absolute left-0px top-0px w-100% h-100%">
            <div class="flex items-center mt-20px">
              <div class="pl-90px w-280px">
                <Fly />
              </div>
              <div class="w-60px h-34px mt-8px ml-4px bg_wrap_b text-20px font-500 text-#fff text-center">XT-1</div>
              <div class="text-#959598 font-500 text-12px mt-8px ml-6px">
                <div>东经36°7'27</div>
                <div>北纬30°40'2</div>
              </div>
            </div>
            <div class="flex items-center mt-10px">
              <div class="pl-120px w-280px">
                <Fly />
              </div>
              <div class="w-60px h-34px mt-8px ml-4px bg_wrap_b text-20px font-500 text-#fff text-center">XT-2</div>
              <div class="text-#959598 font-500 text-12px mt-8px ml-6px">
                <div>东经36°7'27</div>
                <div>北纬30°40'2</div>
              </div>
            </div>
            <div class="flex items-center mt-10px">
              <div class="pl-200px w-280px">
                <Fly />
              </div>
              <div class="w-60px h-34px mt-8px ml-4px bg_wrap_b text-20px font-500 text-#fff text-center">XT-3</div>
              <div class="text-#959598 font-500 text-12px mt-8px ml-6px">
                <div>东经36°7'27</div>
                <div>北纬30°40'2</div>
              </div>
            </div>
            <div class="flex items-center mt-10px">
              <div class="pl-90px w-280px">
                <Fly />
              </div>
              <div class="w-60px h-34px mt-8px ml-4px bg_wrap_b text-20px font-500 text-#fff text-center">XT-4</div>
              <div class="text-#959598 font-500 text-12px mt-8px ml-6px">
                <div>东经36°7'27</div>
                <div>北纬30°40'2</div>
              </div>
            </div>
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import Fly from './fly.vue'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import h from '@/assets/home/h.png'
import la from '@/assets/resources/meta-analysis/la.png'
import la1 from '@/assets/forecast/data-query/la_1.png'
import la2 from '@/assets/forecast/data-query/la_2.png'
import la3 from '@/assets/forecast/data-query/la_3.png'
import la4 from '@/assets/forecast/data-query/la_4.png'
import la5 from '@/assets/forecast/data-query/la_5.png'
import la6 from '@/assets/forecast/data-query/la_6.png'
import la7 from '@/assets/forecast/data-query/la_7.png'
import lb1 from '@/assets/forecast/data-query/lb_1.png'
import lb2 from '@/assets/forecast/data-query/lb_2.png'

import { ref } from 'vue';

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
  width: 332px;
  height: 6px;
  background: linear-gradient(-90deg, #F5594A 0%, #FEB14B 33%, #67D8AE 66%, #5BAEFD 100%);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin 5s linear infinite;
}

.animate-spin-slow2 {
  animation: spin 8s linear infinite;
  animation-direction: reverse;
}

@keyframes spin-with-offset {
  from {
    transform: rotate(120deg);
  }

  to {
    transform: rotate(120deg + 360deg); // 在旋转120度基础上继续旋转完整的一圈（360度），后续每次循环都是在此基础上累加
  }
}

.animate-spin-with-offset {
  animation: spin-with-offset 5s linear infinite;
}

@keyframes spin-with-offset2 {
  from {
    transform: rotate(240deg);
  }

  to {
    transform: rotate(240deg + 360deg); // 在旋转120度基础上继续旋转完整的一圈（360度），后续每次循环都是在此基础上累加
  }
}

.animate-spin-with-offset2 {
  animation: spin-with-offset2 5s linear infinite;
}

.bg_wrap_b {
  background: url('@/assets/forecast/data-query/lb_3.png');
  background-size: cover;
  background-repeat: no-repeat;
}

::v-deep(.el-tag--small) {
  height: 18px;
  font-size: 10px;
}
</style>
