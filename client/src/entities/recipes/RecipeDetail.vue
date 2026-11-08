<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from './api.js'
import { useLoad } from '../../composables/useLoad.js'

const route = useRoute()
const { data: recipe, status, error, load: loadRecipe } = useLoad(get)

watchEffect(() => {
  if (route.params.id) loadRecipe(route.params.id)
})
</script>

<template>
  <div style="padding: 20px; max-width: 800px;">
    <p v-if="status === 'loading'">A carregar detalhes da receita...</p>
    <p v-if="status === 'error'" style="color: red;">Erro ao carregar: {{ error }}</p>

    <div v-if="status === 'ready' && recipe">
      <h2>{{ recipe.strMeal }}</h2>
      <p><strong>Categoria:</strong> {{ recipe.strCategory }} | <strong>Origem:</strong> {{ recipe.strArea }}</p>

      <img :src="recipe.strMealThumb" alt="Imagem da receita" style="width: 250px; border-radius: 8px; margin: 15px 0;" />

      <h3>Ingredientes:</h3>
      <ul>
        <template v-for="n in 20" :key="n">
          <li v-if="recipe[`strIngredient${n}`]?.trim()">
            {{ recipe[`strMeasure${n}`]?.trim() }} {{ recipe[`strIngredient${n}`] }}
          </li>
        </template>
      </ul>

      <h3>Instruções:</h3>
      <p style="white-space: pre-line;">{{ recipe.strInstructions }}</p>

      <p style="margin-top: 20px;">
        <router-link to="/recipes">← Voltar à lista de receitas</router-link>
      </p>
    </div>

    <p v-else-if="status === 'ready' && !recipe">Receita não encontrada.</p>
  </div>
</template>