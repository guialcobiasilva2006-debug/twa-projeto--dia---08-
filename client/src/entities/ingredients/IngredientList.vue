<script setup>
import { onMounted } from 'vue'
import { list } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const { data: ingredients, status, error, load } = useLoad(list)

onMounted(() => load())
</script>

<template>
  <h2>Ingredients</h2>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">
    Error: {{ error }} <button type="button" @click="load">Retry</button>
  </p>
  <template v-else>
  <RouterLink to="/ingredients/new" class="btn-new">+ Novo Ingrediente</RouterLink>
  <ul>
    <li v-for="item in ingredients" :key="item.strIngredient">
      <RouterLink :to="`/ingredients/${item.strIngredient}`">
        {{ item.strIngredient }} <span v-if="item.local" style="color: green; font-size: 0.8rem;">(Local)</span>
      </RouterLink>
    </li>
  </ul>
  </template>
</template>

<style scoped>
ul { list-style: none; padding: 0; }
li { padding: .4rem 0; border-bottom: 1px solid #ddd; }
.btn-new { display: inline-block; margin-bottom: .75rem; }
</style>