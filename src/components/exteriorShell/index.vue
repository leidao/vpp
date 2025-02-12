<!--
 * @Description:
 * @Author: ldx
 * @Date: 2024-12-12 13:51:52
 * @LastEditors: ldx
 * @LastEditTime: 2024-12-26 11:31:54
-->
<template>
  <div class="h-100%">
    <slot name="extra" ref="extraSlot" />
    <div class="exterior_shell bg-#23292ab3" :style="{ height: `calc(100% - ${props.height?.extra})` }">
      <div class="flex items-center">
        <div class="dot"></div>
        <div class="flex-1 mx-6px h-2px bg-#223d4f"></div>
        <div class="dot"></div>
      </div>
      <div class="title text-12px text-#92aab4">
        <slot name="title" ref="titleSlot" />
        <div class="flex items-center px-4px">
          <div class="w-8px h-2px bg-#768e95"></div>
          <div class="flex-1 h-1px bg-#141a1e"></div>
          <div class="w-8px h-2px bg-#768e95"></div>
        </div>
      </div>
      <div class="content" :style="{ height: `calc(100% - ${props.height?.tite}px)` }">
        <slot name="content" />
      </div>
      <div class="flex items-center">
        <div class="dot"></div>
        <div class="flex-1 mx-6px h-2px bg-#223d4f"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  height: Object
})
</script>

<style scoped lang="scss">
.exterior_shell {
  .dot {
    width: 4px;
    height: 4px;
    border-radius: 4px;
    background: #abc0ce;
  }

  .content {
    height: calc(100% - 28px);
  }
}
</style>
