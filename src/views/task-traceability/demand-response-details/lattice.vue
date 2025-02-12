<template>
  <div class="flex">
    <div class="w-5px h-5px  mr-5px" :style="{ background: (props.value || 0) >= item ? '#F9BA5B' : '#f9ba5b4d' }"
      v-for="item in (props.max || 0)" :key="item"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  max: Number,
  value: Number
})
</script>

<style scoped lang="scss"></style>
