<script setup lang="ts">
import {salesService} from "../services/sales-service.ts";
import {ref} from "vue";

const trim = ref(0);
const seasonCoef = ref(0);
const seasonCost = ref(0);
const units = ref(0);
const getAll = async () => {
  const res = await salesService.getAll();
  console.log(res);
}

const getCoeff = async () => {
  const res = await salesService.getCoeff(trim.value);
  console.log(res);
}

const getUnits = async () => {
  const res = await salesService.getUnits(seasonCoef.value, seasonCost.value);
  console.log(res);
}
</script>

<template>
  <div>
    <div>
      First Sales
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getAll()">Get infos</button>
      </div>
      <div>
        <input type="number" v-model="trim" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getCoeff()">Get coef</button>
      </div>

      <div>
        <input type="number" v-model="seasonCoef" />
        <input type="number" v-model="seasonCost" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getUnits">Get units</button>
      </div>

      Units = {{units}}
    </div>

  </div>
</template>

<style scoped>

</style>