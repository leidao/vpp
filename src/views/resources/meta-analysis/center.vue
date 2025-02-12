<template>
  <div class="">
    <ExteriorShell>
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la" fit="fill" />
          <span>分区信息</span>
        </div>
      </template>
      <template #content>
        <div class="px-10px pt-10px">
          <div class="grid grid-cols-9 gap-y-8px">
            <div class="w-50px h-28px bg_wrap_c1" v-for="item in options" :key="item.name"
              :class="checked === item.name ? 'is_active' : ''" @click="checked = item.name">
              <div class="w_1 w-100% h-14px">{{ item.value }}</div>
              <div class="w_2 w-100% h-14px">{{ item.name }}</div>
            </div>
          </div>
          <div class="mt-16px">
            <el-image class="w-100% h-102px" :src="c3" fit="fill" />
          </div>
        </div>
      </template>

    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la from '@/assets/resources/meta-analysis/la.png'
import c3 from '@/assets/resources/meta-analysis/c3.png'
import { ref } from 'vue';

const options = [
  {
    name: '亭卫变',
    value: 'TingWeiBian'
  },
  {
    name: '远东变',
    value: 'YuanDongBian'
  },
  {
    name: '黄渡变',
    value: 'HuangDuBian'
  },
  {
    name: '练塘变',
    value: 'LianTangBian'
  },
  {
    name: '顾路变',
    value: 'GuLuBian'
  },
  {
    name: '杨高变',
    value: 'YangGaoBian'
  },
  {
    name: '三林变',
    value: 'SanLinBIan'
  },
  {
    name: '新余变',
    value: 'XinYuBian'
  },
  {
    name: '徐行变',
    value: 'XuXingBian'
  },
  {
    name: '崇明变',
    value: 'ChongMingBian'
  },
  {
    name: '南桥变',
    value: 'NanQiaoBian'
  },
  {
    name: '杨行变',
    value: 'YanXingBian'
  },
  {
    name: '泗j泾变',
    value: 'SiJingBian'
  },
  {
    name: '徐行东变',
    value: 'XuXingDongBian'
  },
  {
    name: '静安变',
    value: 'JingAnBian'
  },
  {
    name: '杨行西',
    value: 'YanXingXi'
  },
  {
    name: '远东变',
    value: 'YuanDongBian'
  },
  {
    name: '练塘变',
    value: 'LianTangBian'
  },
]
const checked = ref('亭卫变')
</script>

<style scoped lang="scss">
.bg_wrap_c1 {
  background: url('@/assets/resources/meta-analysis/c1.png');
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  cursor: pointer;
}

.w_1 {
  background: linear-gradient(180deg, #15202A 0%, #1B2F45 100%);
  font-weight: 400;
  font-size: 6px;
  color: #ABCFE3;
  line-height: 13px;
}

.w_2 {
  font-family: Source Han Sans, Source Han Sans;
  font-weight: 400;
  font-size: 9px;
  color: #84C2E4;
}

.is_active {
  &.bg_wrap_c1 {
    background: url('@/assets/resources/meta-analysis/c2.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .w_1 {
    color: #F0C893;
  }

  .w_2 {
    color: #F0C893;
  }
}
</style>
