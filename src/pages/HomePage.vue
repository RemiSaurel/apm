<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const goTo = (path: string) => {
  router.push({name: path});
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="goTo('Sales')">Go sales</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="goTo('OpenAIImages')">Go GenImages</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="goTo('ChatBot')">Go ChatBot</button>
  </div>
</template>

<style scoped></style>