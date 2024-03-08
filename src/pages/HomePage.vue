<script setup lang="ts">
import {useRouter} from "vue-router";
import ClassicButton from "../components/utils/ClassicButton.vue";

const router = useRouter();

const goTo = (path: string) => {
  router.push({name: path});
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col gap-4">
      <ClassicButton title="Sales" @click="goTo('Sales')"></ClassicButton>
      <ClassicButton title="GenImage" @click="goTo('OpenAIImages')"></ClassicButton>
      <ClassicButton title="ChatBot" @click="goTo('ChatBot')"></ClassicButton>
    </div>
  </div>
</template>

<style scoped></style>