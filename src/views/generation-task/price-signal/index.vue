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
  <main class="overflow-hidden h-100% wrapfit">
    <div id="container" class="px-20px flex justify-between">
      <div class="left w-340px pt-18px pb-44px h-100% mr-10px">
        <Left></Left>
      </div>
      <div class="center w-340px pt-18px pb-44px h-100% mx-10px ">
        <Center></Center>
      </div>
      <div class="right h-100% pt-18px pb-44px ml-10px">
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
    width: calc(100% - 680px);
  }

}
</style>
