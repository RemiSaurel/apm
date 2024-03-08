<script setup lang="ts">
import {ref} from "vue";
import {genImagesService} from "../services/genimages-service.ts";
import ClassicButton from "../components/utils/ClassicButton.vue";

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
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <textarea class="w-full h-40 p-2 border border-neutral-400 rounded-lg" v-model="prompt" />
        <ClassicButton title="Generate image" @click="generateImage()"></ClassicButton>
      </div>
    </div>

    <img :src="img" />

  </div>
</template>

<style scoped>

</style>