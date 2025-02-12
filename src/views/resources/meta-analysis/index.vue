<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-13 15:58:18
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 10:30:13
-->
<script setup lang="ts">
import { ImageLayer, LineLayer, PointLayer, Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import { onMounted, onUnmounted } from 'vue';
import Left from './left.vue'
import Center from './center.vue'
import Right from './right.vue'
import c from '@/assets/resources/meta-analysis/c.png'
import c4 from '@/assets/resources/meta-analysis/c4.png'
import bg from '@/assets/bg.png'
import autofit from 'autofit.js';
onMounted(() => {
  autofit.init({
    el: '.wrapfit',
    dw: 1440,
    dh: 780,
  })
  const scene = new Scene({
    id: 'container',
    logoVisible: false,
    map: new GaodeMap({
      mapStyle: 'amap://styles/dark',
      // mapStyle: 'amap://styles/whitesmoke',
      center: [120.800774, 31.002606],
      pitch: 0,
      zoom: 11.8,
      dragEnable: false,
      zoomEnable: false,
      keyboardEnable: false,
      doubleClickZoom: false,
      scrollWheel: false,
      showLabel: false,
      token: '455cdb79bf8735a87862d83e16f06c94'
    }),
  });


  scene.addImage(
    'c',
    c,
  );
  scene.addImage(
    'bg',
    bg,
  );

  scene.on('loaded', () => {
    const container = document.getElementById('container')
    const a = scene.containerToLngLat([0, -10])
    const b = scene.containerToLngLat([container?.clientWidth, container?.clientHeight])


    const imageLayer = new ImageLayer({})
      .source(
        c, // 图片的 URL
        {
          parser: {
            type: 'image',
            extent: [b.lng, b.lat, a.lng, a.lat], // 图片的覆盖范围 [minX, minY, maxX, maxY]
          },
        }
      );

    scene.addLayer(imageLayer);
    const imageLayer2 = new ImageLayer({})
      .source(
        bg, // 图片的 URL
        {
          parser: {
            type: 'image',
            extent: [a.lng, a.lat, b.lng, b.lat]
          },
        }
      );

    scene.addLayer(imageLayer2);
  });


})
onUnmounted(() => {
  autofit.off()
})
</script>

<template>
  <main class="relative overflow-hidden h-100% wrapfit">
    <div id="container" />
    <div class="left z-9 absolute left-15px top-0px w-342px h-100%">
      <Left></Left>
    </div>
    <!-- <div class="center z-9 absolute bottom-79px left-0px right-0px w-100% h-234px px-15px flex">
      <div class="w-342px"></div>
      <div id="center" class="flex-1 px-15px">
        <Center></Center>
      </div>
      <div class="w-314px"></div>
    </div> -->
    <div class="center z-9 absolute top-0px left-366px right-338px h-100%">
      <el-image class="w-100% h-443px mt-18px" :src="c4" fit="fill" />
      <div id="center" class="flex-1">
        <Center></Center>
      </div>
    </div>
    <div class="right  z-9 absolute right-15px top-0px w-314px h-100%">
      <Right></Right>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  background-image: url('../assets/bg.png');
}
</style>
