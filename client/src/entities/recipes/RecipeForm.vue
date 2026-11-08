<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { create } from './api.js'

const emit = defineEmits(['save'])
const router = useRouter()

const draft = reactive({
  strMeal: '',
  strInstructions: '',
  strMealThumb: '',
})

const errors = computed(() => {
  const e = {}
  if (!draft.strMeal.trim()) e.strMeal = 'O nome da receita é obrigatório.'
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)

function handleSubmit() {
  if (!isValid.value) return
  const newRecipe = create({ ...draft })
  emit('save', newRecipe)
  router.push(`/recipes/${newRecipe.idMeal}`)
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>Adicionar Nova Receita</h2>
    <form @submit.prevent="handleSubmit" style="display: flex; flex-direction: column; gap: 10px; max-width: 400px;">
      <div>
        <label>Nome da Receita: *</label><br>
        <input v-model.trim="draft.strMeal" required style="width: 100%; padding: 6px;" />
        <span v-if="errors.strMeal" style="color: red; font-size: 0.85rem;">{{ errors.strMeal }}</span>
      </div>
      <div>
        <label>URL da Imagem:</label><br>
        <input v-model.trim="draft.strMealThumb" type="url" style="width: 100%; padding: 6px;" />
      </div>
      <div>
        <label>Instruções:</label><br>
        <textarea v-model.trim="draft.strInstructions" rows="4" style="width: 100%; padding: 6px;"></textarea>
      </div>
      <button type="submit" :disabled="!isValid" style="padding: 10px; background: #42b883; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Guardar Receita
      </button>
    </form>
    <p style="margin-top: 15px;">
      <RouterLink to="/recipes">Voltar à lista</RouterLink>
    </p>
  </div>
</template>