<script setup lang="ts">
import {ref} from "vue";
import {chatBotService} from "../services/chatbot-service.ts";
const currentPrompt = ref("");
const messages = ref([]);
const allPrompts = ref([]);
const generate = async () => {
  allPrompts.value.push(currentPrompt.value);
  const res = await chatBotService.generateChat(currentPrompt.value);
  messages.value.push(res.choices[0].message.content)
}
</script>

<template>
  <div>
    <div>
      ChatBot
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <textarea class="w-full h-40 text-wrap" v-model="currentPrompt" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="generate()">Generate</button>
      </div>

      <div class="flex flex-col gap-4">
        <div v-for="(message, i) in messages" :key="message">
          {{allPrompts[i]}}
          <br>
          {{message}}
          <div class="border-b-2 border-gray-200 mt-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>