<script setup lang="ts">
import {ref} from "vue";
import {chatBotService} from "../services/chatbot-service.ts";
import ClassicButton from "../components/utils/ClassicButton.vue";
import { AkCircleChevronUpFill } from "@kalimahapps/vue-icons";
import IconButton from "../components/utils/IconButton.vue";
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
  exchanges.value[exchanges.value.length - 1].bot = res.choices[0].message.content
}
</script>

<template>
  <div class="max-w-[1200px] m-auto">
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
      <div class="flex justify-center rounded-lg bg-white p-2 border border-neutral-400">
        <textarea class="text-wrap w-full p-2 " v-model="currentPrompt" @keyup.enter="generate()"/>
        <IconButton class="h-10 w-10 m-auto rounded-2xl" @click="generate()">
          <AkCircleChevronUpFill class="w-full h-full"/>
        </IconButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.exchanges{
  height: calc(100vh - 200px);
}

</style>