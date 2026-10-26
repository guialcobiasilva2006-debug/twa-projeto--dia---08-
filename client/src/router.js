import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import RecipeList from './entities/recipes/RecipeList.vue'
import RecipeDetail from './entities/recipes/RecipeDetail.vue' // <-- Adicionado

const routes = [
  { path: '/', component: Home },
  { path: '/recipes', component: RecipeList },
  { path: '/recipes/:id', component: RecipeDetail } // <-- Adicionado
]

export default createRouter({ history: createWebHistory(), routes })