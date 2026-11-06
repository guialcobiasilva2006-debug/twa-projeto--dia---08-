<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLoad } from '../../composables/useLoad.js'
import { get } from './api.js'

const route = useRoute()

// Funciona quer a rota no router.js seja /areas/:id ou /areas/:area
const areaName = computed(() => route.params.id || route.params.area)

const { data: areaData, status, error, load } = useLoad(() => get(areaName.value))

onMounted(() => {
  load()
})

watch(areaName, () => {
  load()
})
</script>

<template>
  <div>
    <RouterLink to="/areas">&larr; Voltar às áreas</RouterLink>

    <h2>
      Área: {{ areaName }}
      <em v-if="areaData?.local">(local)</em>
    </h2>

    <p v-if="status === 'loading'" class="status">Loading…</p>
    <p v-else-if="status === 'error'" class="status">
      Error: {{ error }} <button type="button" @click="load">Retry</button>
    </p>

    <div v-else-if="areaData">
      <p v-if="areaData.description">
        <strong>Descrição:</strong> {{ areaData.description }}
      </p>

      <h3>Pratos desta área</h3>
      <p v-if="!areaData.meals || areaData.meals.length === 0">
        Nenhum prato encontrado para esta área.
      </p>
      <ul v-else>
        <li v-for="meal in areaData.meals" :key="meal.idMeal">
          <img
            v-if="meal.strMealThumb"
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            width="50"
          />
          <RouterLink :to="`/recipes/${meal.idMeal}`">{{ meal.strMeal }}</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul { list-style: none; padding: 0; }
li { display: flex; align-items: center; gap: 0.75rem; padding: .4rem 0; border-bottom: 1px solid #ddd; }
img { border-radius: 4px; }
</style>