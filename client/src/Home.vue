<script setup>
// Página Inicial do Projeto M1 — Tecnologias Web Avançadas
</script>

<template>
  <div style="max-width: 900px; margin: 0 auto; padding: 30px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <!-- Cabeçalho Principal -->
    <header style="border-bottom: 2px solid #42b883; padding-bottom: 15px; margin-bottom: 30px;">
      <h1 style="color: #2c3e50; margin-bottom: 5px;">Projeto TWA — Módulo M1</h1>
      <p style="color: #666; font-size: 1.1em; margin: 0;">
        Aplicação Web para consulta e gestão de dados da API pública <strong>TheMealDB</strong>.
      </p>
    </header>

    <!-- Sobre o Projeto -->
    <section style="margin-bottom: 30px;">
      <h2 style="color: #35495e;">Sobre a Aplicação</h2>
      <p>
        Este projeto foi desenvolvido na disciplina de Tecnologias Web Avançadas. A aplicação consome a API do 
        <a href="https://www.themealdb.com/api.php" target="_blank" style="color: #42b883; font-weight: bold;">TheMealDB</a> 
        para catalogar receitas culinárias, permitindo a pesquisa por nome, visualização de detalhes completos (ingredientes e preparação) e gestão de entidades.
      </p>
    </section>

    <!-- Tabela de Elementos e Entidades -->
    <section style="margin-bottom: 35px;">
      <h2 style="color: #35495e;">Ficha Técnica do Grupo</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px; background: #fafafa; border: 1px solid #ddd; border-radius: 6px; overflow: hidden;">
        <thead>
          <tr style="background-color: #42b883; color: white; text-align: left;">
            <th style="padding: 12px; border-bottom: 1px solid #ddd;">Nome do Aluno</th>
            <th style="padding: 12px; border-bottom: 1px solid #ddd;">Número</th>
            <th style="padding: 12px; border-bottom: 1px solid #ddd;">Entidade Atribuída</th>
            <th style="padding: 12px; border-bottom: 1px solid #ddd;">Endpoint API</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px;"><strong>Gonçalo Silva</strong></td>
            <td style="padding: 12px;">a2006</td>
            <td style="padding: 12px;"><span style="background: #e6f4ea; color: #1e7e34; padding: 3px 8px; border-radius: 4px; font-weight: bold;">Receitas (Recipes)</span></td>
            <td style="padding: 12px;"><code>/search.php?s=</code> & <code>/lookup.php?i=</code></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px;">Colega 1</td>
            <td style="padding: 12px;">aXXXXX</td>
            <td style="padding: 12px;">Categorias (Categories)</td>
            <td style="padding: 12px;"><code>/categories.php</code></td>
          </tr>
          <tr>
            <td style="padding: 12px;">Colega 2</td>
            <td style="padding: 12px;">aXXXXX</td>
            <td style="padding: 12px;">Áreas / Origens (Areas)</td>
            <td style="padding: 12px;"><code>/list.php?a=list</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Navegação Rápida -->
    <section>
      <h2 style="color: #35495e;">Explorar Entidades</h2>
      <p>Utiliza os botões abaixo ou o menu superior para aceder às secções do catálogo:</p>
      <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 15px;">
        <RouterLink to="/recipes" style="padding: 12px 20px; background-color: #42b883; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          Ver Receitas ➔
        </RouterLink>
        <RouterLink to="/categories" style="padding: 12px 20px; background-color: #35495e; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Ver Categorias
        </RouterLink>
        <RouterLink to="/areas" style="padding: 12px 20px; background-color: #35495e; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
          Ver Áreas/Origens
        </RouterLink>
      </div>
    </section>
  </div>
</template>