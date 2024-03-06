<script setup lang="ts">
const props = defineProps<{
  title: string
}>();
</script>

<template>
  <button class="bg-neutral-700 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded">
    {{props.title}}
  </button>
</template>