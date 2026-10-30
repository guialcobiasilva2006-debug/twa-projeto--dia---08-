<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { get } from './api.js'

const route = useRoute()
const status = ref('loading')
const error = ref(null)
const meals = ref([])

async function load() {
  status.value = 'loading'
  try {
    meals.value = await get(route.params.category)
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    error.value = err.message
  }
}
load()
</script>

<template>
  <p><RouterLink to="/categories">← Categories</RouterLink></p>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">Error: {{ error }}</p>
  <template v-else>
    <h2>{{ route.params.category }}</h2>
    <ul>
      <li v-for="meal in meals" :key="meal.idMeal">
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
