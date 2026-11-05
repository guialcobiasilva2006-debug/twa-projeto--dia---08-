<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { create } from './api.js'

const router = useRouter()
const title = ref('')
const instructions = ref('')
const thumbnail = ref('')

function handleSubmit() {
  create({
    strMeal: title.value,
    strInstructions: instructions.value,
    strMealThumb: thumbnail.value
  })
  router.push('/recipes')
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>Adicionar Nova Receita</h2>
    <form @submit.prevent="handleSubmit" style="display: flex; flex-direction: column; gap: 10px; max-width: 400px;">
      <div>
        <label>Nome da Receita:</label><br>
        <input v-model="title" required style="width: 100%; padding: 6px;" />
      </div>
      <div>
        <label>URL da Imagem:</label><br>
        <input v-model="thumbnail" style="width: 100%; padding: 6px;" />
      </div>
      <div>
        <label>Instruções:</label><br>
        <textarea v-model="instructions" rows="4" style="width: 100%; padding: 6px;"></textarea>
      </div>
      <button type="submit" style="padding: 10px; background: #42b883; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Guardar Receita
      </button>
    </form>
    <p style="margin-top: 15px;">
      <RouterLink to="/recipes">Voltar à lista</RouterLink>
    </p>
  </div>
</template>