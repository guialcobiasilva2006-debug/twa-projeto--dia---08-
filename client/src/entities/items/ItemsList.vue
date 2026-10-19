<script setup>
// ItemsList.vue — ecrã de lista da entidade: carrega, mostra os três estados, liga ao detalhe.
// The entity's list screen: load, show the three states, link to the detail.
import { ref } from 'vue'
import { list } from './api.js'

const status = ref('loading') // 'loading' | 'error' | 'ready'
const error = ref(null)
const items = ref([])

async function load() {
  status.value = 'loading'
  try {
    items.value = await list()
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    error.value = err.message
  }
}
load()
</script>

<template>
  <h2>Items</h2>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">
    Error: {{ error }} <button type="button" @click="load">Retry</button>
  </p>
  <ul v-else>
    <li v-for="item in items" :key="item.id">
      <RouterLink :to="`/items/${item.id}`">{{ item.name }}</RouterLink> · {{ item.price.toFixed(2) }} €
    </li>
  </ul>
</template>

<style scoped>
ul { list-style: none; padding: 0; }
li { padding: .4rem 0; border-bottom: 1px solid #ddd; }
</style>
