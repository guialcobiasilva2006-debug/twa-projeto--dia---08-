<script setup>
import { ref, computed, onMounted } from 'vue'
import { list } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const searchQuery = ref('')
const { data: areas, status, error, load: loadAreas } = useLoad(list)

onMounted(() => {
  loadAreas()
})

const filteredAreas = computed(() => {
  if (!areas.value) return []
  return areas.value.filter(a =>
    a.strArea.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div style="padding: 20px;">
    <h2>Lista de Áreas / Origens (TheMealDB)</h2>

    <div style="margin-bottom: 16px;">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Filtrar origem (ex: Italian, Portuguese)..."
        style="padding: 6px; width: 280px;"
      />
    </div>

    <p v-if="status === 'loading'">A carregar origens...</p>
    <p v-else-if="status === 'error'">Erro: {{ error }}</p>

    <ul v-else-if="filteredAreas.length">
      <li v-for="area in filteredAreas" :key="area.strArea">
        <router-link :to="`/areas/${area.strArea}`">
          <strong>{{ area.strArea }}</strong>
        </router-link>
      </li>
    </ul>
  </div>
</template>