<script setup>
// App.vue — a moldura: navegação + o ecrã da rota atual. · The frame: navigation + the current route's screen.
// Cada entidade acrescenta o seu link aqui. · Each entity adds its link here.
</script>

<template>
  <nav style="display: flex; gap: 15px; padding: 10px; background: #f5f5f5; margin-bottom: 20px;">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/items">Items</RouterLink>
    <RouterLink to="/recipes">Receitas</RouterLink>
<<<<<<< Updated upstream
    <RouterLink to="/categories">Categorias</RouterLink>
=======
    <Router-Link to="/areas">Áreas/Origens</Router-Link>
>>>>>>> Stashed changes
  </nav>
  <RouterView />
</template>