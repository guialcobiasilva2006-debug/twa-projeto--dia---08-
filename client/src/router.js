import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import RecipeList from './entities/recipes/RecipeList.vue'
<<<<<<< Updated upstream
import RecipeDetail from './entities/recipes/RecipeDetail.vue' // <-- Adicionado
import CategoryList from './entities/categories/CategoryList.vue'
import CategoryDetail from './entities/categories/CategoryDetail.vue'

=======
import RecipeDetail from './entities/recipes/RecipeDetail.vue'
import AreaList from './entities/areas/AreaList.vue'
import AreaDetail from './entities/areas/AreaDetail.vue'
>>>>>>> Stashed changes

const routes = [
  { path: '/', component: Home },
  { path: '/recipes', component: RecipeList },
<<<<<<< Updated upstream
  { path: '/recipes/:id', component: RecipeDetail }, // <-- Adicionado
  { path: '/categories', component: CategoryList },
  { path: '/categories/:category', component: CategoryDetail }
=======
  { path: '/recipes/:id', component: RecipeDetail },
  { path: '/areas', component: AreaList },
  { path: '/areas/:area', component: AreaDetail }
>>>>>>> Stashed changes
]

export default createRouter({ history: createWebHistory(), routes })