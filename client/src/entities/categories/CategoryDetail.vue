<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { get } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const route = useRoute()
const { data: meals, status, error, load } = useLoad(get)

onMounted(() => {
  load(route.params.category)
})
</script>

<template>
  <p><RouterLink to="/categories">← Categories</RouterLink></p>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">Error: {{ error }}</p>
  <template v-else-if="status === 'ready'">
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
