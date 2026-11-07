import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import RecipeList from './entities/recipes/RecipeList.vue'
import RecipeDetail from './entities/recipes/RecipeDetail.vue'
import RecipeForm from './entities/recipes/RecipeForm.vue'
import CategoryList from './entities/categories/CategoryList.vue'
import CategoryDetail from './entities/categories/CategoryDetail.vue'
import AreaList from './entities/areas/AreaList.vue'
import AreaDetail from './entities/areas/AreaDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/recipes', name: 'RecipeList', component: RecipeList },
  { path: '/recipes/new', name: 'RecipeForm', component: RecipeForm },
  { path: '/recipes/:id', name: 'RecipeDetail', component: RecipeDetail },
  { path: '/categories', name: 'CategoryList', component: CategoryList },
  { path: '/categories/:id', name: 'CategoryDetail', component: CategoryDetail },
  { path: '/areas', name: 'AreaList', component: AreaList },
  { path: '/areas/:id', name: 'AreaDetail', component: AreaDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router