<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-13 15:58:18
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-20 11:13:35
-->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import Left from './left.vue'
import Center from './center.vue'
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
  <main class="relative overflow-hidden h-100% wrapfit">
    <div id="container" />
    <div class="w-100% absolute flex justify-between left-0px top-0px z-9">
      <div class="left pl-15px w-342px h-100%">
        <Left></Left>
      </div>
      <div class="center flex-1 px-10px">
        <Center></Center>
      </div>
      <div class="right pr-15px w-314px h-100%">
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
}

.center {
  width: calc(100vw - 686px);
}
</style>
