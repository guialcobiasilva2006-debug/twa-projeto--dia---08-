<script setup>
import { ref, onMounted } from 'vue'
import { list } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const searchQuery = ref('')
const { data: recipes, status, error, load: loadRecipes } = useLoad(list)

// Carregar a lista inicial ao abrir a página
onMounted(() => {
  loadRecipes()
})

// Função para lidar com a submissão da pesquisa
function handleSearch() {
  loadRecipes(searchQuery.value)
}
</script>

<template>
  <div style="padding: 20px;">
    <h2>Lista de Receitas (TheMealDB)</h2>

    <!-- Formulário de Pesquisa (Ficha 05) -->
    <form @submit.prevent="handleSearch" style="margin: 20px 0;">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Pesquisar receita (ex: Chicken, Soup)..." 
        style="padding: 8px; width: 280px; margin-right: 10px; border: 1px solid #ccc; border-radius: 4px;"
      />
      <button type="submit" style="padding: 8px 15px; cursor: pointer;">Pesquisar</button>
    </form>

    <p v-if="status === 'loading'">A carregar receitas da API...</p>
    <p v-if="status === 'error'" style="color: red;">
      Erro ao carregar: {{ error }}
      <button type="button" @click="loadRecipes()">Retry</button>
    </p>

    <ul v-if="status === 'ready' && recipes?.length">
      <li v-for="recipe in recipes" :key="recipe.idMeal" style="margin-bottom: 10px;">
        <router-link :to="`/recipes/${recipe.idMeal}`">
          <strong>{{ recipe.strMeal }}</strong>
        </router-link>
        <span>— Categoria: {{ recipe.strCategory || 'Desconhecida' }} | Origem: {{ recipe.strArea || 'Desconhecida' }}</span>
      </li>
    </ul>

    <p v-else-if="status === 'ready'" style="color: #666;">
      Nenhuma receita encontrada para "{{ searchQuery }}".
    </p>
  </div>
</template>