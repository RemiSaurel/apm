<script setup lang="ts">
import { onErrorCaptured } from "vue";

onErrorCaptured((err, vm, info) => {
  console.log(err, vm, info);
});
</script>

<template>
  <div class="m-2 md:mx-24 mt-12">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
