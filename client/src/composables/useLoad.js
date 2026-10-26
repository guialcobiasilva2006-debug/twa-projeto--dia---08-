import { ref } from 'vue'

export function useLoad(asyncFunction) {
  const data = ref(null)
  const status = ref('idle') // 'idle', 'loading', 'ready', 'error'
  const error = ref(null)

  async function load(...args) {
    status.value = 'loading'
    error.value = null
    try {
      data.value = await asyncFunction(...args)
      status.value = 'ready'
    } catch (err) {
      error.value = err.message || 'Ocorreu um erro ao carregar os dados.'
      status.value = 'error'
    }
  }

  return {
    data,
    status,
    error,
    load
  }
}