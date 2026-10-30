<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { get } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const route = useRoute()
const { data: meals, status, error, load: loadMeals } = useLoad(get)

onMounted(() => {
  loadMeals(route.params.area)
})

watch(() => route.params.area, (newArea) => {
  if (newArea) loadMeals(newArea)
})
</script>

<template>
  <div style="padding: 20px;">
    <p><router-link to="/areas">← Voltar às Áreas/Origens</router-link></p>
    <h2>Receitas de Origem: {{ route.params.area }}</h2>

    <p v-if="status === 'loading'">A carregar receitas...</p>
    <p v-else-if="status === 'error'">Erro: {{ error }}</p>

    <ul v-else-if="meals && meals.length">
      <li v-for="meal in meals" :key="meal.idMeal" style="margin-bottom: 12px;">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          width="50"
          style="vertical-align: middle; margin-right: 10px; border-radius: 4px;"
        />
        <router-link :to="`/recipes/${meal.idMeal}`">
          <strong>{{ meal.strMeal }}</strong>
        </router-link>
      </li>
    </ul>
  </div>
</template>