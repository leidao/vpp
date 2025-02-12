<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-09 10:02:04
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-20 10:45:56
-->
<script setup lang="ts">
import Nav from '@/components/nav/index.vue'
import { RouterLink, RouterView } from 'vue-router'
import autofit from 'autofit.js'
import { onMounted } from 'vue';
onMounted(() => {

})

</script>

<template>
  <div class="bg-#252628 h-100%">
    <el-config-provider size="small">
      <Nav></Nav>
      <RouterView />
    </el-config-provider>
  </div>
</template>

<style scoped></style>
