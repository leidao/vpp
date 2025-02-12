<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-23 13:39:26
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-24 17:14:26
-->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import Left from './left.vue'
import Right from './right.vue'
import autofit from 'autofit.js';

onMounted(() => {
  autofit.init({
    el: '.wrapfit',
    dw: 1440,
    dh: 780,
  })
})
onUnmounted(() => {
  autofit.off()
})
</script>

<template>
  <main class="overflow-hidden h-100% wrapfit">
    <div id="container" class="p-20px flex justify-between">
      <div class="left w-352px h-100%">
        <Left></Left>
      </div>
      <div class="right h-100% ml-10px">
        <Right></Right>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;

  .right {
    width: calc(100% - 352px);
  }

}
</style>
