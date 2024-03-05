<script setup lang="ts">
import {ref} from "vue";
import {genImagesService} from "../services/genimages-service.ts";

const prompt = ref("");
const img = ref("");
const generateImage = async () => {
  const res = await genImagesService.generateImage(prompt.value);
  img.value = res.data[0].url
}
</script>

<template>
  <div>
    <div>
      Image generation
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <textarea class="w-full h-40 text-wrap" v-model="prompt" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="generateImage()">Generate image</button>
      </div>
    </div>

    <img :src="img" />

  </div>
</template>

<style scoped>

</style>