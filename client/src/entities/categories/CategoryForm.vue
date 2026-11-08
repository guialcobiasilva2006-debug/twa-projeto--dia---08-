<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { create } from './api.js'

const emit = defineEmits(['save'])
const router = useRouter()

const draft = reactive({
  strCategory: '',
  strCategoryDescription: '',
  strCategoryThumb: '',
})

const errors = computed(() => {
  const e = {}
  if (!draft.strCategory.trim()) e.strCategory = 'O nome é obrigatório.'
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)

function save() {
  if (!isValid.value) return
  const id = create({ ...draft })
  emit('save', { ...draft })
  router.push(`/categories/${id}`)
}
</script>

<template>
  <p><RouterLink to="/categories">← Categories</RouterLink></p>
  <h2>Nova Categoria</h2>
  <form @submit.prevent="save" class="form">
    <label>
      Nome *
      <input v-model.trim="draft.strCategory" type="text" required placeholder="ex: Marisco" />
      <span v-if="errors.strCategory" class="error">{{ errors.strCategory }}</span>
    </label>
    <label>
      Descrição
      <textarea v-model.trim="draft.strCategoryDescription" rows="4" placeholder="Descrição da categoria…" />
    </label>
    <label>
      URL da imagem
      <input v-model.trim="draft.strCategoryThumb" type="url" placeholder="https://…" />
    </label>
    <div class="actions">
      <button type="submit" :disabled="!isValid">Guardar</button>
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
