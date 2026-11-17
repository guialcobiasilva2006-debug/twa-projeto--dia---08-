<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { get, create, update } from './api.js'

const route = useRoute()
const router = useRouter()
const isEdit = !!route.params.id

const draft = reactive({
  name: '',
  category: '',
  caloriesPer100g: null,
  description: ''
})

const errors = ref({})
const serverError = ref('')

onMounted(async () => {
  if (isEdit) {
    try {
      const data = await get(route.params.id)
      draft.name = data.name
      draft.category = data.category
      draft.caloriesPer100g = data.caloriesPer100g
      draft.description = data.description
    } catch (err) {
      serverError.value = 'Erro ao carregar o ingrediente para edição.'
    }
  }
})

async function save() {
  errors.value = {}
  serverError.value = ''
  try {
    if (isEdit) {
      await update(route.params.id, draft)
    } else {
      await create(draft)
    }
    router.push('/ingredients')
  } catch (err) {
    if (err && err.errors) {
      errors.value = err.errors
    } else {
      serverError.value = err.error || 'Erro ao guardar o ingrediente.'
    }
  }
}
</script>

<template>
  <p><RouterLink to="/ingredients">← Ingredients</RouterLink></p>
  <h2>{{ isEdit ? 'Editar Ingrediente' : 'Novo Ingrediente' }}</h2>

  <p v-if="serverError" class="error-global">{{ serverError }}</p>

  <form @submit.prevent="save" class="form">
    <div class="field">
      <label>Nome:</label>
      <input v-model.trim="draft.name" type="text" />
      <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
    </div>

    <div class="field">
      <label>Categoria:</label>
      <select v-model="draft.category">
        <option disabled value="">Selecione uma categoria</option>
        <option value="Vegetal">Vegetal</option>
        <option value="Fruta">Fruta</option>
        <option value="Carne">Carne</option>
        <option value="Lacticínios">Lacticínios</option>
        <option value="Outro">Outro</option>
      </select>
      <span v-if="errors.category" class="field-error">{{ errors.category }}</span>
    </div>

    <div class="field">
      <label>Calorias (por 100g):</label>
      <input v-model.number="draft.caloriesPer100g" type="number" min="0" />
      <span v-if="errors.caloriesPer100g" class="field-error">{{ errors.caloriesPer100g }}</span>
    </div>

    <div class="field">
      <label>Descrição:</label>
      <textarea v-model.trim="draft.description"></textarea>
      <span v-if="errors.description" class="field-error">{{ errors.description }}</span>
    </div>

    <button type="submit" class="btn-save">{{ isEdit ? 'Guardar Alterações' : 'Criar' }}</button>
  </form>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; margin-top: 1rem; }
.field { display: flex; flex-direction: column; gap: 0.25rem; }
input, select, textarea { padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; }
.field-error { color: #d9534f; font-size: 0.85rem; font-weight: bold; }
.error-global { color: #d9534f; margin-bottom: 1rem; font-weight: bold; }
.btn-save { padding: 0.5rem 1rem; background-color: #5cb85c; color: white; border: none; border-radius: 4px; cursor: pointer; }
.btn-save:hover { background-color: #4cae4c; }
</style>