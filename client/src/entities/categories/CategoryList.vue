<script setup>
import { ref } from 'vue'
import { list } from './api.js'

const status = ref('loading')
const error = ref(null)
const categories = ref([])

async function load() {
  status.value = 'loading'
  try {
    categories.value = await list()
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    error.value = err.message
  }
}
load()
</script>

<template>
  <h2>Categories</h2>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">
    Error: {{ error }} <button type="button" @click="load">Retry</button>
  </p>
  <ul v-else>
    <li v-for="item in categories" :key="item.strCategory">
      <RouterLink :to="`/categories/${item.strCategory}`">{{ item.strCategory }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul { list-style: none; padding: 0; }
li { padding: .4rem 0; border-bottom: 1px solid #ddd; }
</style>
