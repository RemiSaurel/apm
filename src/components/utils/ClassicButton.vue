<script setup lang="ts">

const props = defineProps<{
  title?: string
}>();
</script>

<template>
  <button class="bg-neutral-300 hover:bg-neutral-400 font-bold py-2 rounded flex items-center justify-center px-4">
    {{props.title}}
  </button>
</template>