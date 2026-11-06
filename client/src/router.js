import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import RecipeList from './entities/recipes/RecipeList.vue'
import RecipeDetail from './entities/recipes/RecipeDetail.vue'
import RecipeForm from './entities/recipes/RecipeForm.vue'
import CategoryList from './entities/categories/CategoryList.vue'
import CategoryDetail from './entities/categories/CategoryDetail.vue'
import CategoryForm from './entities/categories/CategoryForm.vue'
import AreaList from './entities/areas/AreaList.vue'
import AreaDetail from './entities/areas/AreaDetail.vue'
import AreaForm from './entities/areas/AreaForm.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/recipes', component: RecipeList },
  { path: '/recipes/new', component: RecipeForm },
  { path: '/recipes/:id', component: RecipeDetail },
  { path: '/categories', component: CategoryList },
  { path: '/categories/new', component: CategoryForm },
  { path: '/categories/:category', component: CategoryDetail },
  { path: '/areas', component: AreaList },
  { path: '/areas/new', component: AreaForm },
  { path: '/areas/:id', component: AreaDetail },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export default createRouter({ history: createWebHistory(), routes })