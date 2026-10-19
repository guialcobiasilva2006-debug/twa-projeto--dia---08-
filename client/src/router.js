// router.js — uma rota por ecrã. Explicado na Aula 06; até lá, só acrescentar linhas como as do exemplo.
// One route per screen. Explained in Aula 06; until then, only add lines like the example ones.
import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import ItemsList from './entities/items/ItemsList.vue'
import ItemDetail from './entities/items/ItemDetail.vue'

const routes = [
  { path: '/', component: Home },
  // entidade de exemplo · example entity — list + detail
  { path: '/items', component: ItemsList },
  { path: '/items/:id', component: ItemDetail },
  // a tua entidade · your entity:
  // { path: '/<entidade>', component: <Entidade>List },
  // { path: '/<entidade>/:id', component: <Entidade>Detail },
]

export default createRouter({ history: createWebHistory(), routes })
