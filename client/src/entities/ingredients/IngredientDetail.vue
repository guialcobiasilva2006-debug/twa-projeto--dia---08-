<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { get } from './api.js'

const route = useRoute()
const status = ref('loading')
const error = ref(null)
const ingredientData = ref(null)

async function load() {
  status.value = 'loading'
  try {
    ingredientData.value = await get(route.params.id)
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    error.value = err.message
  }
}
load()
</script>

<template>
  <p><RouterLink to="/ingredients">← Ingredients</RouterLink></p>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">Error: {{ error }}</p>
  <template v-else>
    <h2>Ingredient: {{ route.params.id }}</h2>
    <p v-if="ingredientData.description"><strong>Description:</strong> {{ ingredientData.description }}</p>
    
    <h3 v-if="ingredientData.meals && ingredientData.meals.length">Meals with this ingredient:</h3>
    <ul>
      <li v-for="meal in ingredientData.meals" :key="meal.idMeal">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" width="60" />
        {{ meal.strMeal }}
      </li>
    </ul>
  </template>
</template>

<style scoped>
ul { list-style: none; padding: 0; }
li { display: flex; align-items: center; gap: .75rem; padding: .4rem 0; border-bottom: 1px solid #ddd; }
img { border-radius: 4px; }
</style>