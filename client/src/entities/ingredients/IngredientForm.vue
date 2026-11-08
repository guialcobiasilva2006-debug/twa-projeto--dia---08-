<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { create } from './api.js'

const emit = defineEmits(['save'])
const router = useRouter()

const draft = reactive({
  name: '',
  description: '',
})

const errors = computed(() => {
  const e = {}
  if (!draft.name.trim()) e.name = 'O nome do ingrediente é obrigatório.'
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)

async function save() {
  if (!isValid.value) return
  const newItem = await create({ ...draft })
  emit('save', newItem)
  router.push(`/ingredients/${newItem.strIngredient}`)
}
</script>

<template>
  <p><RouterLink to="/ingredients">← Ingredients</RouterLink></p>
  <h2>Novo Ingrediente</h2>
  <form @submit.prevent="save" class="form">
    <label>
      Nome *
      <input v-model.trim="draft.name" type="text" required placeholder="ex: Tomato" />
      <span v-if="errors.name" class="error">{{ errors.name }}</span>
    </label>
    <label>
      Descrição
      <textarea v-model.trim="draft.description" rows="4" placeholder="Descrição do ingrediente…" />
    </label>
    <div class="actions">
      <button type="submit" :disabled="!isValid">Guardar</button>
      <RouterLink to="/ingredients">Cancelar</RouterLink>
    </div>
  </form>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 1rem; max-width: 480px; }
label { display: flex; flex-direction: column; gap: .3rem; font-weight: 600; font-size: .9rem; }
input, textarea { font-weight: 400; padding: .5rem; border: 1px solid #ccc; border-radius: 4px; font-size: 1rem; }
.error { color: #c00; font-size: .85rem; font-weight: 400; }
.actions { display: flex; gap: 1rem; align-items: center; }
button { padding: .5rem 1.2rem; cursor: pointer; }
</style>
