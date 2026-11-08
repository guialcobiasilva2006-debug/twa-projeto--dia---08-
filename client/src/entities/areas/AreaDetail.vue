<script setup>
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useLoad } from '../../composables/useLoad.js'
import { get } from './api.js'

const route = useRoute()
const { data: areaData, status, error, load } = useLoad(get)

watchEffect(() => {
  if (route.params.id) load(route.params.id)
})
</script>

<template>
  <div style="padding: 20px;">
    <p><router-link to="/areas">← Voltar às Áreas/Origens</router-link></p>
    <h2>Receitas de Origem: {{ route.params.id }}</h2>

    <p v-if="status === 'loading'">A carregar receitas...</p>
    <p v-else-if="status === 'error'">Erro: {{ error }}</p>

    <ul v-else-if="areaData?.meals?.length">
      <li v-for="meal in areaData.meals" :key="meal.idMeal" style="margin-bottom: 12px;">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          width="50"
          style="vertical-align: middle; margin-right: 10px; border-radius: 4px;"
        />
        <router-link :to="`/recipes/${meal.idMeal}`">
          <strong>{{ meal.strMeal }}</strong>
        </router-link>
      </li>
    </ul>
    <p v-else-if="status === 'ready' && !areaData?.meals?.length">Nenhum prato encontrado para esta área.</p>
  </div>
</template>

