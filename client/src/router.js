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
<<<<<<< HEAD
import IngredientList from './entities/ingredients/IngredientList.vue'
import IngredientDetail from './entities/ingredients/IngredientDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/recipes', name: 'RecipeList', component: RecipeList },
  { path: '/recipes/new', name: 'RecipeForm', component: RecipeForm },
  { path: '/recipes/:id', name: 'RecipeDetail', component: RecipeDetail },
  { path: '/categories', name: 'CategoryList', component: CategoryList },
  { path: '/categories/:id', name: 'CategoryDetail', component: CategoryDetail },
  { path: '/areas', name: 'AreaList', component: AreaList },
  { path: '/areas/:id', name: 'AreaDetail', component: AreaDetail },
  { path: '/ingredients', name: 'IngredientList', component: IngredientList },
  { path: '/ingredients/:id', name: 'IngredientDetail', component: IngredientDetail }
=======
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
>>>>>>> 96153fe27b01bc3c850b825c390b2ef8033cc7a5
]

export default createRouter({ history: createWebHistory(), routes })