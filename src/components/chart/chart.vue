<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-01-22 18:31:10
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-13 09:43:19
-->
<template>
  <div id="chart" ref="chartRef" :style="{ height: props.height }" :class="`w-100% ${props.class}`" />
</template>

<script setup lang="ts">
import { defineProps, watch, onMounted, ref, onUnmounted, defineExpose, shallowRef } from "vue"
import _ from "lodash"
import { baseOptions } from "./baseOptions"
import * as echarts from "echarts"
const chartInstance = shallowRef<echarts.ECharts>()
defineExpose({
  chartInstance
})
const props = defineProps({
  height: String,
  options: Object,
  class: String,
  isMap: Boolean
})
const chartRef = ref()

onMounted(() => {
  const chartDom = chartRef.value
  chartInstance.value = echarts.init(chartDom)
  update(props.options)
  const resizeObserver = new ResizeObserver(() => chartInstance.value?.resize())
  resizeObserver.observe(chartDom)
})
onUnmounted(() => {
  chartInstance.value!.clear()
  chartInstance.value!.dispose()
})
const update = (value: any) => {
  const options = _.merge(_.cloneDeep({ ...baseOptions, toolbox: {} }), value)
  chartInstance.value && chartInstance.value.setOption(options, true)
}
watch(
  () => props.options,
  (value) => {
    update(value)
  },
  { deep: true }
)
</script>

<style scoped lang="scss"></style>
