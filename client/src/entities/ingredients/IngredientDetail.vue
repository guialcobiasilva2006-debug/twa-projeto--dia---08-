<script setup>
import { watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get, remove } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const route = useRoute()
const router = useRouter()
const { data: ingredient, status, error, load } = useLoad(get)

watchEffect(() => {
  if (route.params.id) load(route.params.id)
})

async function handleDelete() {
  if (confirm('Tens a certeza que pretendes eliminar este ingrediente?')) {
    await remove(route.params.id)
    router.push('/ingredients')
  }
}
</script>

<template>
  <p><RouterLink to="/ingredients">← Ingredients</RouterLink></p>
  
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">Error: {{ error }}</p>
  
  <template v-else-if="ingredient">
    <h2>{{ ingredient.name }}</h2>
    
    <div class="detail-info">
      <p><strong>Categoria:</strong> {{ ingredient.category || 'N/D' }}</p>
      <p><strong>Calorias (por 100g):</strong> {{ ingredient.caloriesPer100g !== undefined && ingredient.caloriesPer100g !== null ? ingredient.caloriesPer100g : 'N/D' }}</p>
      <p v-if="ingredient.description"><strong>Descrição:</strong> {{ ingredient.description }}</p>
    </div>

    <div class="actions">
      <RouterLink :to="`/ingredients/${route.params.id}/edit`">
        <button type="button" class="btn-edit">Editar</button>
      </RouterLink>
      
      <button type="button" @click="handleDelete" class="btn-delete">Eliminar</button>
    </div>
  </template>
</template>

<style scoped>
.detail-info { background: #f9f9f9; padding: 1rem; border-radius: 6px; border: 1px solid #ddd; display: flex; flex-direction: column; gap: 0.5rem; max-width: 480px; margin-bottom: 1rem; }
.actions { margin-top: 1rem; display: flex; gap: 1rem; }
button { padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; border: none; color: white; }
.btn-edit { background-color: #0275d8; }
.btn-edit:hover { background-color: #025aa5; }
.btn-delete { background-color: #d9534f; }
.btn-delete:hover { background-color: #c9302c; }
.status { color: #666; }
</style>