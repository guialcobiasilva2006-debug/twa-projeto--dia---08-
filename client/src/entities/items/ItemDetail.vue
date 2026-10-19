<script setup>
// ItemDetail.vue — ecrã de detalhe: o id vem do URL (/items/:id). · Detail screen: the id comes from the URL.
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { get } from './api.js'

const route = useRoute()
const status = ref('loading')
const error = ref(null)
const item = ref(null)

async function load() {
  status.value = 'loading'
  try {
    item.value = await get(route.params.id)
    if (!item.value) throw new Error(`Item ${route.params.id} not found`)
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    error.value = err.message
  }
}
load()
</script>

<template>
  <p><RouterLink to="/items">← Items</RouterLink></p>
  <p v-if="status === 'loading'" class="status">Loading…</p>
  <p v-else-if="status === 'error'" class="status">Error: {{ error }}</p>
  <template v-else>
    <h2>{{ item.name }}</h2>
    <dl>
      <dt>Category</dt><dd>{{ item.category }}</dd>
      <dt>Price</dt><dd>{{ item.price.toFixed(2) }} €</dd>
      <dt>Tags</dt><dd>{{ item.tags.join(', ') }}</dd>
    </dl>
  </template>
</template>

<style scoped>
dl { display: grid; grid-template-columns: max-content 1fr; gap: .25rem 1rem; }
dt { color: #666; }
</style>
