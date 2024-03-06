<script setup lang="ts">
import {ref} from "vue";
import {chatBotService} from "../services/chatbot-service.ts";
import ClassicButton from "../components/utils/ClassicButton.vue";
const currentPrompt = ref("");
interface Exchange {
  user: string;
  bot: string;
}
const exchanges = ref([] as Exchange[]);
const generate = async () => {
  exchanges.value.push({user: currentPrompt.value, bot: "Loading..."});
  const prompt = currentPrompt.value;
  currentPrompt.value = "";
  const res = await chatBotService.generateChat(prompt);
  exchanges.value[exchanges.value.length - 1].bot = res.choices[0].message.content;
}
</script>

<template>
  <div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-4 exchanges overflow-y-auto bg-white rounded p-4">
        <div v-for="exchange in exchanges" class="w-full">
          <div class="text-right  mb-4 bg-neutral-300 rounded p-4 ">
            {{exchange.user}}
          </div>
          <div class="text-white bg-neutral-800 rounded p-4">
            {{exchange.bot}}
          </div>
        </div>
      </div>
      <div class="">
        <div class="flex justify-center">
          <textarea class=" text-wrap w-full" v-model="currentPrompt" @keyup.enter="generate()"/>
          <ClassicButton title="Send" @click="generate()"></ClassicButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exchanges{
  height: calc(100vh - 200px);
}
</style>