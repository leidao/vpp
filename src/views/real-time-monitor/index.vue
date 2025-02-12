<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-13 15:58:18
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 16:32:58
-->
<script setup lang="ts">
import { ImageLayer, LineLayer, PointLayer, Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import { onMounted, onUnmounted, ref } from 'vue';
import Left from './left.vue'
import Right from './right.vue'
import c from '@/assets/resources/meta-analysis/c.png'
import bg from '@/assets/bg3.png'
import mb from '@/assets/real-time-monitor/m_b.png'
import m1 from '@/assets/real-time-monitor/m_1.png'
import m2 from '@/assets/real-time-monitor/m_2.png'
import autofit from 'autofit.js';
import { Search } from '@element-plus/icons-vue'

const search1 = ref('')
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
      center: [120.054228, 30.245705],
      pitch: 0,
      zoom: 11.5,
      dragEnable: false,
      zoomEnable: false,
      keyboardEnable: false,
      doubleClickZoom: false,
      scrollWheel: false,
      // showLabel: false,
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
  scene.addImage(
    'm1',
    m1,
  );
  scene.addImage(
    'm2',
    m2,
  );

  scene.on('loaded', () => {
    const left = document.getElementById('left')

    const a = scene.containerToLngLat([left?.clientWidth + 40, 120])
    const container = document.getElementById('container')
    const b = scene.containerToLngLat([container?.clientWidth - 20, container?.clientHeight - 20])

    const search = document.getElementById('search')
    if (search) {
      search.style.left = left?.clientWidth + 60 + 'px'

    }
    const imageLayer = new ImageLayer({})
      .source(
        c, // 图片的 URL
        {
          parser: {
            type: 'image',
            extent: [a.lng, a.lat, b.lng, b.lat]
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
            extent: [120.210292, 30.182067, 119.901529, 30.340115], // 图片的覆盖范围 [minX, minY, maxX, maxY]
          },
        }
      );

    scene.addLayer(imageLayer2);

    const data = [
      {
        name: '新乡电厂',
        lng: '120.115339',
        lat: '30.265585',
        code: 'm1'
      },
      {
        name: '瑞利法电厂',
        lng: '120.064814',
        lat: '30.194369',
        code: 'm1'
      },
      {
        name: '光茵茶电厂',
        lng: '120.096499',
        lat: '30.197144',
        code: 'm1'
      },
      {
        name: '浦桥南电厂',
        lng: '120.132895',
        lat: '30.204916',
        code: 'm2'
      },
      {
        name: '桥头南电厂',
        lng: '120.190057',
        lat: '30.196959',
        code: 'm2'
      },
      {
        name: '旭光蓝祛电厂',
        lng: '120.097784',
        lat: '30.241728',
        code: 'm2'
      },
      {
        name: '压铸电厂',
        lng: '120.168434',
        lat: '30.263366',
        code: 'm2'
      },
    ]
    const imageLayer3 = new PointLayer()
      .source(data, {
        parser: {
          type: 'json',
          x: 'lng',
          y: 'lat',
        },
      })
      .shape('code', ['m1', 'm2'])
      .size(12)
      .style({
        offsets: [0, 38],
      });
    scene.addLayer(imageLayer3);

    const imageLayerText = new PointLayer()
      .source(data, {
        parser: {
          type: 'json',
          x: 'lng',
          y: 'lat',
        },
      })
      .shape('name', 'text')
      .color('#fff')
      .size(10)
      .style({
        textOffset: [110, 80],
      });

    scene.addLayer(imageLayerText);
  });


})
onUnmounted(() => {
  autofit.off()
})
</script>

<template>
  <main class="relative overflow-hidden h-100% wrapfit">
    <div id="container" />
    <div id='left' class="left z-9 absolute top-0px left-15px w-528px h-100%">
      <Left></Left>
    </div>
    <div class="flex absolute top-0px left-0px z-9 w-100% h-100px">
      <div class="w-528px"></div>
      <div class="right flex-1 pr-15px h-100%">
        <Right></Right>
      </div>
    </div>
    <div id="search" class="absolute z-9 top-140px">
      <el-input v-model="search1" size="small" style="width: 218px">
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
    <div class="flex absolute bottom-90px left-0px z-9 w-100% h-46px">
      <div class="w-580px"></div>
      <div class="right flex-1 pr-40px h-100%">
        <el-image class="w-100% h-46px" :src="mb" fit="fill" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
::v-deep(.el-input-group__append) {
  padding: 0px 16px;

  .el-button--small {
    padding: 1px 11px;
  }
}

#container {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  background-image: url('../assets/bg.png');
}

.right {
  width: calc(100vw - 558px);
}
</style>
