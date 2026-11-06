<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { list } from './api.js'
import { useLoad } from '../../composables/useLoad.js'
import { store } from '../../store.js'

const PAGE_SIZE = 5
const route = useRoute()
const router = useRouter()

const { data: allCategories, status, error, load } = useLoad(list)

onMounted(() => {
  load()
})

const page = computed(() => Number(route.query.page) || 1)

const totalPages = computed(() =>
  allCategories.value ? Math.ceil(allCategories.value.length / PAGE_SIZE) : 1
)

const categories = computed(() => {
  if (!allCategories.value) return []
  const start = (page.value - 1) * PAGE_SIZE
  return allCategories.value.slice(start, start + PAGE_SIZE)
})

function goTo(p) {
  router.push({ query: { page: p } })
}
</script>

<template>
  <h2>Categories</h2>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">
    Error: {{ error }} <button type="button" @click="load">Retry</button>
  </p>
  <template v-else>
    <RouterLink to="/categories/new" class="btn-new">+ Nova Categoria</RouterLink>
    <ul v-if="store.categories.length">
      <li v-for="item in store.categories" :key="'local-' + item.strCategory" class="local">
        {{ item.strCategory }} <em>(local)</em>
      </li>
    </ul>
    <ul>
      <li v-for="item in categories" :key="item.strCategory">
        <RouterLink :to="`/categories/${item.strCategory}`">{{ item.strCategory }}</RouterLink>
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
