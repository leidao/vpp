<template>
  <ExteriorShell>
    <template #title>
      <div class="h-26px flex items-center px-16px">
        <el-image class="w-20px h-20px mr-14px" :src="ra" fit="fill" />
        <span>数量占比</span>
      </div>
    </template>
    <template #content>
      <div class="p-10px flex justify-center items-center">
        <el-image class="w-302px h-359px" :src="rb" fit="fill" />
      </div>
    </template>
  </ExteriorShell>
</template>

<script setup lang="ts">
import ExteriorShell from '@/components/exteriorShell/index.vue'
import ra from '@/assets/resources/meta-analysis/ra.png'
import rb from '@/assets/resources/meta-analysis/rb.png'

</script>

<style scoped lang="scss"></style>
