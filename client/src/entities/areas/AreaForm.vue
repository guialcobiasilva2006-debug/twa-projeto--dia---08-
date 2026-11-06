<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { create } from './api.js'

const emit = defineEmits(['save'])
const router = useRouter()

const draft = reactive({
  strArea: '',
  description: '',
  dishSample: ''
})

const errors = computed(() => {
  const e = {}
  if (!draft.strArea || draft.strArea.length < 3) {
    e.strArea = 'O nome da área deve ter pelo menos 3 caracteres.'
  }
  if (!draft.description || draft.description.length < 5) {
    e.description = 'A descrição deve ter pelo menos 5 caracteres.'
  }
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)

function onSubmit() {
  if (!isValid.value) return
  const payload = { ...draft }
  emit('save', payload)
  const id = create(payload)
  router.push(`/areas/${id}`)
}
</script>

<template>
  <div>
    <RouterLink to="/areas">&larr; Voltar às áreas</RouterLink>
    <h2>Nova Área Gastronómica</h2>

    <form @submit.prevent="onSubmit">
      <div>
        <label>
          Nome da Área:
          <input v-model.trim="draft.strArea" required minlength="3" placeholder="Ex: Portuguese" />
        </label>
        <p v-if="errors.strArea">{{ errors.strArea }}</p>
      </div>

      <div>
        <label>
          Descrição:
          <input v-model.trim="draft.description" required minlength="5" placeholder="Pratos tradicionais..." />
        </label>
        <p v-if="errors.description">{{ errors.description }}</p>
      </div>

      <div>
        <label>
          Prato Exemplo (opcional):
          <input v-model.trim="draft.dishSample" placeholder="Ex: Francesinha" />
        </label>
      </div>

      <button type="submit" :disabled="!isValid">Guardar Área</button>
    </form>
  </div>
</template>