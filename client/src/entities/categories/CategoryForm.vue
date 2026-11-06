<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../../store.js'

const router = useRouter()

const form = reactive({
  strCategory: '',
  strCategoryDescription: '',
  strCategoryThumb: '',
})

const errors = reactive({
  strCategory: '',
})

function validate() {
  errors.strCategory = form.strCategory.trim() ? '' : 'O nome é obrigatório.'
  return !errors.strCategory
}

function save() {
  if (!validate()) return
  store.categories.push({
    strCategory: form.strCategory.trim(),
    strCategoryDescription: form.strCategoryDescription.trim(),
    strCategoryThumb: form.strCategoryThumb.trim(),
    _local: true,
  })
  router.push('/categories')
}
</script>

<template>
  <p><RouterLink to="/categories">← Categories</RouterLink></p>
  <h2>Nova Categoria</h2>
  <form @submit.prevent="save" class="form">
    <label>
      Nome *
      <input v-model="form.strCategory" type="text" placeholder="ex: Marisco" />
      <span v-if="errors.strCategory" class="error">{{ errors.strCategory }}</span>
    </label>
    <label>
      Descrição
      <textarea v-model="form.strCategoryDescription" rows="4" placeholder="Descrição da categoria…" />
    </label>
    <label>
      URL da imagem
      <input v-model="form.strCategoryThumb" type="url" placeholder="https://…" />
    </label>
    <div class="actions">
      <button type="submit">Guardar</button>
      <RouterLink to="/categories">Cancelar</RouterLink>
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
