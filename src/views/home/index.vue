<script setup lang="ts">
import Left from './left.vue'
import Right from './right.vue'
import { ImageLayer, LineLayer, PointLayer, Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import { onMounted, onUnmounted } from 'vue';
import c1 from '@/assets/home/c1.png'
import c2 from '@/assets/home/c2.png'
import c3 from '@/assets/home/c3.png'
import c4 from '@/assets/home/c4.png'
import bg from '@/assets/bg3.png'
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
      // mapStyle: 'amap://styles/dark',
      mapStyle: 'amap://styles/grey',
      center: [121.25969, 31.177714],
      pitch: 0,
      zoom: 9.8,
      dragEnable: false,
      zoomEnable: false,
      keyboardEnable: false,
      doubleClickZoom: false,
      scrollWheel: false,
      showLabel: false,
      token: '455cdb79bf8735a87862d83e16f06c94'
    }),
  });
  // 添加数据
  const lineData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.410939, 31.206245],
            [121.401401, 31.201377],
            [121.388755, 31.194423],
            [121.358945, 31.182059],
            [121.332825, 31.166744],
            [121.331322, 31.166601],
            [121.330403, 31.16653],
            [121.329318, 31.166744],
            [121.321909, 31.172784],
            [121.316469, 31.173844],
          ],
        },
        properties: {
          name: '五角场',
          center: [121.410939, 31.206245],
          code: 'c2'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.359928, 31.288689],

            [121.359928, 31.264919],
            [121.352609, 31.251571],
            [121.347745, 31.241254],
            [121.346494, 31.233231],
            [121.348371, 31.224139],
            [121.32898, 31.222534],
            [121.326478, 31.221999],
            [121.314593, 31.219324],
            [121.307712, 31.216115],
            [121.30521, 31.21344],
            [121.303334, 31.20916],
            [121.305836, 31.196319],
            [121.316469, 31.173844],
            [121.315218, 31.172238],
            [121.312091, 31.172238],
            [121.302708, 31.173309],
            [121.293951, 31.173309],


            [121.280356, 31.168147],
          ],
        },
        properties: {
          name: '远东',
          center: [121.359928, 31.288689],
          code: 'c3'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.254852, 31.319237],

            [121.253689, 31.29778],
            [121.249707, 31.285444],
            [121.24672, 31.276085],
            [121.244231, 31.263321],
            [121.244231, 31.263321],
            [121.241742, 31.250129],
            [121.240249, 31.23651],
            [121.246223, 31.227572],
            [121.252694, 31.21991],
            [121.262152, 31.204584],
            [121.272605, 31.18457],

            [121.280356, 31.168147],
          ],
        },
        properties: {
          name: '黄渡',
          center: [121.254852, 31.319237],
          code: 'c3'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.142346, 31.291773],

            [121.153986, 31.288125],
            [121.163298, 31.288789],
            [121.176489, 31.288457],
            [121.185801, 31.286468],
            [121.198604, 31.285473],
            [121.2052, 31.286136],
            [121.206752, 31.285141],
            [121.211408, 31.282157],
            [121.218004, 31.276852],
            [121.228091, 31.273204],
            [121.239343, 31.274199],

            [121.246715, 31.275194],
          ],
        },
        properties: {
          name: '静安',
          center: [121.142346, 31.291773],
          code: 'c3'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.140109, 31.135256],

            [121.173372, 31.134545],
            [121.189172, 31.13668],
            [121.19333, 31.137392],
            [121.209129, 31.145221],
            [121.229087, 31.146644],
            [121.239066, 31.152338],
            [121.249193, 31.151594],
            [121.261764, 31.158765],
            [121.268468, 31.165219],

            [121.280356, 31.168147],
          ],
        },
        properties: {
          name: '顾路',
          center: [121.140109, 31.135256],
          code: 'c3'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.05127, 31.091884],

            [121.074863, 31.101986],
            [121.087568, 31.112086],
            [121.098457, 31.117525],
            [121.122772, 31.133269],
            [121.130266, 31.135835],

            [121.140109, 31.135256]
          ],
        },
        properties: {
          name: '五角场',
          center: [121.05127, 31.091884],
          code: 'c3'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.154185, 31.009866],

            [121.141207, 31.033592],
            [121.13342, 31.054347],
            [121.124769, 31.065464],
            [121.123904, 31.072875],
            [121.124769, 31.078803],
            [121.124769, 31.092139],
            [121.125634, 31.105474],
            [121.127364, 31.114363],
            [121.132555, 31.123251],
            [121.137746, 31.127695],

            [121.140109, 31.135256]
          ],
        },
        properties: {
          name: '三林',
          center: [121.154185, 31.009866],
          code: 'c2'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.302666, 31.059519],

            [121.299991, 31.077844],
            [121.2991, 31.09235],
            [121.2991, 31.10151],
            [121.302666, 31.113722],
            [121.304449, 31.127459],
            [121.304449, 31.13509],
            [121.3046, 31.13356],
            [121.30163, 31.139914],
            [121.297177, 31.144361],
            [121.289754, 31.151349],
            [121.280356, 31.168147]
          ],
        },
        properties: {
          name: '杨高',
          center: [121.302666, 31.059519],
          code: 'c2'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.468538, 31.127479],

            [121.456592, 31.123827],
            [121.445499, 31.123827],
            [121.426727, 31.120905],
            [121.414781, 31.118714],
            [121.398568, 31.118714],
            [121.390888, 31.118714],
            [121.373823, 31.117983],
            [121.35761, 31.112869],
            [121.34993, 31.126749],
            [121.334571, 31.146469],
            [121.334571, 31.147929],

            [121.322625, 31.139896],
            [121.305559, 31.133323],
          ],
        },
        properties: {
          name: '徐行',
          center: [121.468538, 31.127479],
          code: 'c2'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [121.441737, 31.004882],
            [121.424325, 31.041356],
            [121.415619, 31.064559],
            [121.404347, 31.085382],
            [121.39862, 31.104178],
            [121.390031, 31.118069],

          ],
        },
        properties: {
          name: '南侨',
          center: [121.441737, 31.004882],
          code: 'c3'
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [],
          ],
        },
        properties: {
          name: '新余',
          center: [121.280356, 31.168147],
          code: 'c2'
        },
      },
    ],
  };
  scene.addImage(
    'c1',
    c1,
  );
  scene.addImage(
    'c3',
    c3,
  );
  scene.addImage(
    'c2',
    c2,
  );
  scene.addImage(
    'c4',
    c4,
  );

  scene.addImage(
    'bg',
    bg,
  );

  scene.on('loaded', () => {

    const imageLayer = new ImageLayer({})
      .source(
        bg, // 图片的 URL
        {
          parser: {
            type: 'image',
            extent: [121.942224, 30.761686, 120.486256, 31.496041], // 图片的覆盖范围 [minX, minY, maxX, maxY]
          },
        }
      );

    scene.addLayer(imageLayer);

    // 创建线图层
    const lineLayer = new LineLayer({})
      .source(lineData) // 加载数据
      .size(2) // 线宽
      .shape('line') // 线形状
      .style({
        opacity: 0.8, // 不透明度
        sourceColor: '#7ac5e8',
        targetColor: '#9d6d89',
      }).animate({
        interval: 1, // 间隔
        duration: 4, // 持续时间，延时
        trailLength: 2, // 流线长度

      });

    // 添加图层到场景
    scene.addLayer(lineLayer);

    const data = lineData.features.map(item => {
      return {
        name: item.properties.name,
        lng: item.properties.center[0],
        lat: item.properties.center[1],
        code: item.properties.code
      }
    })

    const imageLayer1 = new PointLayer()
      .source(data, {
        parser: {
          type: 'json',
          x: 'lng',
          y: 'lat',
        },
      })
      .shape('code', ['c3', 'c2'])
      .size(14);
    scene.addLayer(imageLayer1);
    const imageLayer2 = new PointLayer()
      .source(data, {
        parser: {
          type: 'json',
          x: 'lng',
          y: 'lat',
        },
      })
      .shape('code', ['c4', 'c1'])
      .size(24)
      .style({
        offsets: [0, 38],
      });
    scene.addLayer(imageLayer2);

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
        textOffset: [0, 54],
      });

    scene.addLayer(imageLayerText);

  });
})
onUnmounted(() => {
  autofit.off();
})
</script>

<template>
  <main class="relative overflow-hidden h-100% wrapfit">
    <div id="container" />
    <div class="left z-9 absolute left-15px top-0px w-250px h-100%">
      <Left></Left>
    </div>
    <div class="right z-9 absolute right-16px top-0px w-250px h-100%">
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
