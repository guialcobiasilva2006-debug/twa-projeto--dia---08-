<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { list } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const PAGE_SIZE = 5
const route = useRoute()
const router = useRouter()

const { data: allAreas, status, error, load } = useLoad(list)

onMounted(() => {
  load()
})

const page = computed(() => Number(route.query.page) || 1)

const totalPages = computed(() =>
  allAreas.value ? Math.ceil(allAreas.value.length / PAGE_SIZE) : 1
)

const areas = computed(() => {
  if (!allAreas.value) return []
  const start = (page.value - 1) * PAGE_SIZE
  return allAreas.value.slice(start, start + PAGE_SIZE)
})

function goTo(p) {
  router.push({ query: { page: p } })
}
</script>

<template>
  <h2>Áreas Gastronómicas</h2>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">
    Error: {{ error }} <button type="button" @click="load">Retry</button>
  </p>
  <template v-else>
    <RouterLink to="/areas/new" class="btn-new">+ Nova Área</RouterLink>

    <ul>
      <li
        v-for="item in areas"
        :key="item.strArea"
        :class="{ local: item.local }"
      >
        <RouterLink :to="`/areas/${item.strArea}`">{{ item.strArea }}</RouterLink>
        <em v-if="item.local"> (local)</em>
      </li>
    </ul>

    <div class="pagination">
      <button :disabled="page <= 1" @click="goTo(page - 1)">Anterior</button>
      <span>página {{ page }} de {{ totalPages }}</span>
      <button :disabled="page >= totalPages" @click="goTo(page + 1)">Seguinte</button>
    </div>
  </template>
</template>

<style scoped>
ul { list-style: none; padding: 0; }
li { padding: .4rem 0; border-bottom: 1px solid #ddd; }
li.local { color: #666; font-style: italic; }
.pagination { display: flex; align-items: center; gap: 1rem; margin-top: 1rem; }
button:disabled { opacity: .4; cursor: default; }
.btn-new { display: inline-block; margin-bottom: .75rem; }
</style>