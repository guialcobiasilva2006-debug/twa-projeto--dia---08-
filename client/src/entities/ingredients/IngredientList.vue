  <script setup>
  import { onMounted } from 'vue'
  import { list } from './api.js'
  import { useLoad } from '../../composables/useLoad.js'

  const { data: ingredients, status, error, load } = useLoad(list)

  onMounted(() => {
    load()
  })
  </script>

  <template>
    <h2>Ingredients</h2>
    <p><RouterLink to="/ingredients/new">+ Novo Ingrediente</RouterLink></p>

    <p v-if="status === 'loading'">A carregar...</p>
    <p v-else-if="status === 'error'">Erro: {{ error }}</p>

    <ul v-else-if="ingredients && ingredients.length">
      <li v-for="ingredient in ingredients" :key="ingredient._id">
        <RouterLink :to="`/ingredients/${ingredient._id}`">
          {{ ingredient.name }}
        </RouterLink>
      </li>
    </ul>
    <p v-else>Sem ingredientes registados.</p>
  </template>

  <style scoped>
  ul { list-style: none; padding: 0; margin-top: 1rem; }
  li { padding: 0.5rem 0; border-bottom: 1px solid #eee; }
  </style>