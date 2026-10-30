import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import RecipeList from './entities/recipes/RecipeList.vue'
import RecipeDetail from './entities/recipes/RecipeDetail.vue' // <-- Adicionado
import CategoryList from './entities/categories/CategoryList.vue'
import CategoryDetail from './entities/categories/CategoryDetail.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/recipes', component: RecipeList },
  { path: '/recipes/:id', component: RecipeDetail }, // <-- Adicionado
  { path: '/categories', component: CategoryList },
  { path: '/categories/:category', component: CategoryDetail }
]

export default createRouter({ history: createWebHistory(), routes })