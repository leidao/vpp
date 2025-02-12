<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 10:40:55
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 16:45:44
-->
<template>
  <div>
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #title>
        <div class="h-26px flex items-center px-16px">
          <el-image class="w-20px h-20px mr-14px" :src="la1" fit="fill" />
          <span>调控模式设置</span>
        </div>
      </template>
      <template #content>
        <div class="p-10px h-100% flex justify-between">
          <div>
            <div class="flex items-center  mt-10px">
              <el-image class="w-3px h-17px" :src="ra2" fit="fill" />
              <span class="bg-#d8d8d81f text-#fff text-10px h-13px px-4px flex items-center">负荷调整模式</span>
            </div>
            <div class=" mt-10px">
              <div class="flex items-center text-13px ">
                <div class="bold_wrap flex items-center text-10px justify-center text-#C7C6E4">1</div>
                <div class="ml-14px w-78px text-#C7C6E4">实时负荷</div>
                <div class="ml-14px w-50px text-right text-#8BA1EA">20457</div>
                <div class="ml-10px w-16px text-right text-#7F8183">kW</div>
              </div>
              <div class="flex items-center text-13px text-10px mt-6px">
                <div class="bold_wrap flex items-center justify-center text-#C7C6E4">2</div>
                <div class="ml-14px w-78px text-#F6E8CE">调控比例</div>
                <div class="ml-14px w-50px text-right text-#D6AE79">24.65</div>
                <div class="ml-10px w-16px text-right text-#7F8183">%</div>
              </div>
              <div class="flex items-center text-13px text-10px mt-6px">
                <div class="bold_wrap flex items-center justify-center text-#C7C6E4">3</div>
                <div class="ml-14px w-78px text-#B7D8BC">目标调控负荷</div>
                <div class="ml-14px w-50px text-right text-#6ECCAC">24.65</div>
                <div class="ml-10px w-16px text-right text-#7F8183">%</div>
              </div>

            </div>
          </div>
          <div>
            <div class="flex items-center  mt-10px">
              <el-image class="w-3px h-17px" :src="ra2" fit="fill" />
              <span class="bg-#d8d8d81f text-#fff text-10px h-13px px-4px flex items-center">负荷控制模式</span>
            </div>
            <div class=" mt-10px">
              <div class="flex items-center text-13px ">
                <div class="bold_wrap flex items-center text-10px justify-center text-#C7C6E4">1</div>
                <div class="ml-14px w-78px text-#C7C6E4">实时负荷</div>
                <div class="ml-14px w-50px text-right text-#8BA1EA">20457</div>
                <div class="ml-10px w-16px text-right text-#7F8183">kW</div>
              </div>
              <div class="flex items-center text-13px text-10px mt-6px">
                <div class="bold_wrap flex items-center justify-center text-#C7C6E4">2</div>
                <div class="ml-14px w-78px text-#F6E8CE">调控比例</div>
                <div class="ml-14px w-50px text-right text-#D6AE79">24.65</div>
                <div class="ml-10px w-16px text-right text-#7F8183">%</div>
              </div>
              <div class="flex items-center text-13px text-10px mt-6px">
                <div class="bold_wrap flex items-center justify-center text-#C7C6E4">3</div>
                <div class="ml-14px w-78px text-#B7D8BC">目标调控负荷</div>
                <div class="ml-14px w-50px text-right text-#6ECCAC">24.65</div>
                <div class="ml-10px w-16px text-right text-#7F8183">%</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
  <div class="mt-18px wrap_lb">
    <ExteriorShell :height="{ extra: '0px', title: '26px' }">
      <template #extra>
        <div class="ml-8px w-320px h-18px bg_wrap_extra pl-10px text-#8CE5EB text-14px">隔日/中长期需求响应事件管理</div>
      </template>
      <template #content>
        <div class="p-10px h-100%">
          <div>
            <el-input v-model="search" size="small" class="mr-10px" style="width: 160px">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </div>
          <div class="mt-30px px-10px">
            <el-tree node-key="id" :default-expanded-keys="['2']" :data="data" :props="defaultProps" accordion>
              <template #default="{ node, data }">
                <div class="flex items-center">
                  <el-icon :size="22" :color="data.type === 'show' ? '#4F6A7E' : '#767676'">
                    <Folder />
                  </el-icon>
                  <span class="text-14px ml-12px" :style="computedColor(node)">
                    {{ node.label }}
                  </span>
                </div>
              </template>
            </el-tree>
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>

</template>

<script setup lang="ts">
import { Search, Folder } from '@element-plus/icons-vue'
import ra2 from '@/assets/generation-task/price-signal/ra_2.png'
import ExteriorShell from '@/components/exteriorShell/index.vue'
import la1 from '@/assets/generation-task/excitation-signal/la_1.png'
import { ref } from 'vue';
const search = ref('')
const computedColor = (node: any) => {
  console.log('node', node.type);

  if (node.expanded) {
    return { color: '#38CEBF' }
  } else if (node.data.type === 'show') {
    return { color: '#4F6A7E' }
  } else {
    return { color: '#767676' }
  }

}
const defaultProps = {
  children: 'children',
  label: 'label',
}

const data = [
  {
    id: '1',
    label: '1#数据包文件',
    children: [
      {
        id: '1-1',
        label: '1-1#数据 AAA:R.X.C',
      },
    ],
  },
  {
    id: '2',
    label: '2#数据包文件',
    children: [
      {
        id: '2-1',
        label: '2-1#数据 AAA:R.X.C',
      },
      {
        id: '2-2',
        label: '2-2#数据 RRC:D.A.X',
      },
      {
        id: '2-3',
        label: '2-3#数据 RRC:SSS.AC',
        type: 'show'
      },
      {
        id: '2-4',
        label: '2-4#数据 FS:FSSS.CAY',
        type: 'show'
      },
      {
        id: '2-5',
        label: '2-5#数据 D:FSKYJ.CJKT',
      },
      {
        id: '2-6',
        label: '2-6#数据 ACD:GFHT.S.B',
        type: 'show'
      },
      {
        id: '2-7',
        label: '2-7#数据 RRC:SSR.T.A',
        type: 'show'
      },
    ],
  },
  {
    id: '3',
    label: '3#数据包文件',
    children: [
      {
        id: '3-1',
        label: '3-1#数据 AAA:R.X.C',
      },
      {
        id: '3-2',
        label: '3-2#数据 AAA:R.X.C',
      },
    ],
  },
]
</script>

<style scoped lang="scss">
::v-deep(.el-input-group__append) {
  padding: 0px 16px;

  .el-button--small {
    padding: 1px 11px;
  }
}

::v-deep(.el-tree) {
  .el-tree-node {
    margin: 10px 0px;
  }

  .el-tree-node__expand-icon {
    display: none;
  }
}

.bold_wrap {
  width: 26px;
  height: 18px;
  background: linear-gradient(90deg, rgba(199, 198, 228, 0.2196) 0%, rgba(223, 204, 210, 0) 50%, rgba(199, 198, 228, 0.2196) 100%);
}

.bg_wrap_extra {
  background: url('@/assets/resources/meta-enroll/rb.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.wrap_lb {
  height: calc(100% - 167px);
}
</style>
