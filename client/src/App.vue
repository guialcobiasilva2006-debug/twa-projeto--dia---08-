<script setup>
// Menu de navegação principal do projeto
</script>

<template>
  <div>
    <nav style="display: flex; gap: 20px; padding: 15px 20px; background-color: #f8f9fa; border-bottom: 1px solid #dee2e6; align-items: center;">
      <RouterLink to="/" style="text-decoration: none; color: #0066cc; font-weight: bold;">Home</RouterLink>
      <RouterLink to="/recipes" style="text-decoration: none; color: #0066cc;">Receitas</RouterLink>
      <RouterLink to="/categories" style="text-decoration: none; color: #0066cc;">Categorias</RouterLink>
      <RouterLink to="/areas" style="text-decoration: none; color: #0066cc;">Áreas/Origens</RouterLink>
      <RouterLink to="/ingredients" style="text-decoration: none; color: #0066cc;">Ingredientes</RouterLink>
    </nav>
    
    <main style="padding: 20px;">
      <RouterView />
    </main>
  </div>
</template>