<template>
  <div class="relative w-100%">
    <div class="absolute top-0px left-0px w-10px h-10px rounded-10px round flex items-center justify-center">
      <div class="w-3px h-3px bg-#fff rounded-3px"></div>
    </div>
    <div class="absolute top-0px right-0px w-10px h-10px rounded-10px round flex items-center justify-center">
      <div class="w-3px h-3px bg-#fff rounded-3px"></div>
    </div>
    <div class="absolute fly left-5px top-4.5px"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.round {
  border: 1px solid #afafaf;
}

.fly {
  width: calc(100% - 10px);
  height: 1px;
  background: #fff;
}
</style>
