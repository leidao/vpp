<template>
  <div class="top flex justify-between">
    <div class="w-300px">
      <ExteriorShell>
        <template #extra>
          <div class="h-18px"></div>
        </template>
        <template #title>
          <div class="h-26px flex items-center justify-between px-16px">
            <div class="h-26px flex items-center">
              <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
              <span>具体信息</span>
            </div>
            <div>
              <el-button type="primary">导出</el-button>
              <el-button type="primary">查询</el-button>
            </div>
          </div>
        </template>
        <template #content>
          <div class="px-10px">
            <div class="flex pl-20px items-center pt-8px">
              <div class="text-#8EB9D3 text-12px">
                <div>节能成效</div>
                <div>(测试期7天)</div>
              </div>
              <div class="text-10px text-#818A90 ml-14px">
                <div class="flex items-center">
                  <div class="bold"></div>
                  <div class="ml-10px">
                    <div>数据测量周期（TO）（7天）</div>
                    <div>2020年6月22日—2020年6月28日</div>
                  </div>
                </div>
                <div class="flex items-center mt-10px">
                  <div class="bold"></div>
                  <div class="ml-10px">
                    <div>数据测量周期（T1）（7天）</div>
                    <div>2020年6月29日—2020年7月5日</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-20px py-13px">
              <div class="px-14px h-25px flex items-center justify-between bg-#103042a5">
                <span class="text-11px text-#5AB6DB">节约电量</span>
                <div class="flex  items-center ">
                  <span class="text-11px text-#fff">845.41</span>
                  <span class="text-11px text-#525E65 ml-20px">kW/h</span>
                </div>
              </div>
              <div class="mt-8px px-14px h-25px flex items-center justify-between bg-#103042a5">
                <span class="text-11px text-#5AB6DB">日均节电</span>
                <div class="flex  items-center ">
                  <span class="text-11px text-#fff">120.77</span>
                  <span class="text-11px text-#525E65 ml-20px">kW/h</span>
                </div>
              </div>
              <div class="mt-8px px-14px h-25px flex items-center justify-between bg-#103042a5">
                <span class="text-11px text-#5AB6DB">末端精密空调节能率</span>
                <div class="flex  items-center ">
                  <span class="text-11px text-#fff">29.37</span>
                  <span class="text-11px text-#525E65 ml-20px">kW/h</span>
                </div>
              </div>
              <div class="mt-8px px-14px h-25px flex items-center justify-between bg-#103042a5">
                <span class="text-11px text-#5AB6DB">机房整体节能率</span>
                <div class="flex  items-center ">
                  <span class="text-11px text-#fff">1.97</span>
                  <span class="text-11px text-#525E65 ml-20px">kW/h</span>
                </div>
              </div>
              <div class="mt-8px px-14px h-25px flex items-center justify-between bg-#103042a5">
                <span class="text-11px text-#5AB6DB">机组负荷量</span>
                <div class="flex  items-center ">
                  <span class="text-11px text-#fff">1.97</span>
                  <span class="text-11px text-#525E65 ml-20px">kW/h</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ExteriorShell>
    </div>
    <div class="flex-1 ml-20px">
      <ExteriorShell>
        <template #extra>
          <div class="ml-8px w-170px h-18px bg_wrap_extra pl-10px text-#8CE5EB text-14px">虚拟电厂审核管理</div>
        </template>
        <template #title>
          <div class="h-26px flex items-center justify-between px-16px">
            <div class="h-26px flex items-center">
              <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
              <span>虚拟电厂列表</span>
            </div>
            <div>
              <el-input v-model="search1" size="small" class="mr-30px" style="width: 160px;" />
              <el-button type="primary">导出</el-button>
              <el-button type="primary">查询</el-button>
            </div>
          </div>
        </template>
        <template #content>
          <div class="p-10px">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="index" width="50" label="序号" align='center' />
              <el-table-column property="a" label="发电单元名称" align='center' />
              <el-table-column property="b" label="发电单元类型" align='center' />
              <el-table-column property="c" label="发电单元容量" align='center' />
              <el-table-column property="d" label="削峰响应负荷" align='center' />
              <el-table-column property="e" label="填谷响应负荷" align='center' />
              <el-table-column property="f" label="所属发电机组" align='center' />
              <el-table-column label="操作" align='center'>
                <template #default>
                  <el-button type="primary" size="small">
                    关闭
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="flex justify-center mt-16px mb-7px">
              <el-pagination v-model:current-page="currentPage2" v-model:page-size="pageSize2" size="small"
                background="transparent" layout="total, prev, pager, next" :total="50" />
            </div>
          </div>
        </template>
      </ExteriorShell>
    </div>
  </div>
  <div class="bottom mt-40px">
    <ExteriorShell>
      <template #extra>
        <div class="ml-8px w-170px h-18px bg_wrap_extra pl-10px text-#8CE5EB text-14px">发电单元管理</div>
      </template>
      <template #title>
        <div class="h-26px flex items-center justify-between px-16px">
          <div class="h-26px flex items-center">
            <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
            <span>发电机组列表</span>
          </div>
          <div>
            <el-input v-model="search2" size="small" class="mr-30px" style="width: 160px;" />
            <el-button type="primary">导出</el-button>
            <el-button type="primary">查询</el-button>
          </div>
        </div>
      </template>
      <template #content>
        <div class="p-10px">
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column type="index" width="50" label="序号" align='center' />
            <el-table-column property="a" label="发电单元名称" align='center' />
            <el-table-column property="b" label="联系人" align='center' />
            <el-table-column property="c" label="联系电话" align='center' />
            <el-table-column property="d" label="营销户号" align='center' />
            <el-table-column property="e" label="发电单元类型" align='center' />
            <el-table-column property="f" label="发电单元容量" align='center' />
            <el-table-column property="g" label="所属虚拟电厂" align='center' />
            <el-table-column property="h" label="削峰响应负荷" align='center' />
            <el-table-column property="j" label="填谷响应负荷" align='center' />
            <el-table-column property="k" label="所属发电机组" align='center' />
            <el-table-column label="操作" align='center'>
              <template #default>
                <el-button type="primary" size="small">
                  关闭
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="flex justify-center mt-16px mb-7px">
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" size="small"
              background="transparent" layout="total, prev, pager, next" :total="50" />
          </div>
        </div>
      </template>
    </ExteriorShell>
  </div>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import ra from '@/assets/resources/meta-analysis/ra.png'
import { ref } from 'vue';
const currentPage = ref(1)
const pageSize = ref(10)
const currentPage2 = ref(1)
const pageSize2 = ref(10)
const search1 = ref('')
const search2 = ref('')
const tableData = [
  {
    a: '金华电厂',
    b: '2024.01.09',
    c: '886KVA',
    d: '445KW',
    e: '434KW',
    f: '张三',
  },
  {
    a: '路平安电厂',
    b: '2020.02.19',
    c: '886KVA',
    d: '445KW',
    e: '434KW',
    f: '刘晓霞',
  },
  {
    a: '石上电厂',
    b: '2024.04.13',
    c: '546KVA',
    d: '245KW',
    e: '74KW',
    f: '罗晋家',
  },
  {
    a: '财网电厂',
    b: '2024.04.24',
    c: '676KVA',
    d: '475KW',
    e: '534KW',
    f: '李俊基',
  },
  {
    a: '三丰电厂',
    b: '2024.01.19',
    c: '686KVA',
    d: '445KW',
    e: '334KW',
    f: '李俊基',
  },
]
const tableData2 = [
  {
    a: '企华电厂',
    b: '章小时',
    c: '17809480098',
    d: '0948',
    e: '2024.01.09',
    f: '886kVA',
    g: '三丰电厂',
    h: '445kW',
    j: '434kW',
    k: '张三',
  },
  {
    a: '路平安电厂',
    b: '刘莉莉',
    c: '17899044430',
    d: '0949',
    e: '2020.02.19',
    f: '778kVA',
    g: '三丰电厂',
    h: '474kW',
    j: '464kW',
    k: '张三',
  },
  {
    a: '石上发电厂',
    b: '郭娜娜',
    c: '13855099906',
    d: '0934',
    e: '2024.04.13',
    f: '565kVA',
    g: '三丰电厂',
    h: '565kW',
    j: '443kW',
    k: '张三',
  },
  {
    a: '财网电厂',
    b: '李克俊',
    c: '13960433343',
    d: '0935',
    e: '2024.04.24',
    f: '843kVA',
    g: '三丰电厂',
    h: '765kW',
    j: '674kW',
    k: '张三',
  },
  {
    a: '三丰电厂',
    b: '安邦才',
    c: '17769990909',
    d: '0925',
    e: '2020.01.19',
    f: '656kVA',
    g: '三丰电厂',
    h: '644kW',
    j: '634kW',
    k: '张三',
  },
];


</script>

<style scoped lang="scss">
::v-deep(.el-button--small) {
  padding: 4px 6px;
  font-size: 10px;
}


.bold {
  width: 2px;
  height: 21px;
  background: rgba(9, 60, 90, 0.84);
}

.bg_wrap_extra {
  background: url('@/assets/resources/meta-enroll/rb.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
