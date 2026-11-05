# TWA 2026/27 — projeto · project template

Tecnologias Web Avançadas · Licenciatura em Engenharia Informática · ISLA Gaia · 2026/27 · David Vaz ([@davidmgvaz](https://github.com/davidmgvaz))

## Grupo · Group

Turma: Dia

| Membro · Member | Nº | Entidade · Entity | Endpoints da API pública (lista · um item) · Public API endpoints (list · one item) |
| Gonçalo Pereira | a22403631 | Receita (Recipe) | GET /search.php?s= · GET /lookup.php?i=:id |
| Guilherme Silva | a22403214 | Ingrediente (Ingredient) | GET /list.php?i=list · GET /filter.php?i=:ingrediente |
| Gonçalo Dias | a22404774 | Categoria (Category) | GET /categories.php · GET /filter.php?c=:categoria |
| David Moreira | a22408312 | Área/Origem (Area) | GET /list.php?a=list · GET /filter.php?a=:area |

*Uma entidade por membro, de ponta a ponta: ecrãs Vue (M1), modelo e endpoints (M2), secção do relatório (M3) — e as perguntas da parte B do teste são sobre a tua entidade.

## Tema · Theme

| Tema · Theme | Receitas · Recipes |
| API pública (M1) · Public API (M1) | [TheMealDB](https://www.themealdb.com/api.php) |
| URL base da API · API base URL | https://www.themealdb.com/api/json/v1/1/ |
| Entidades (uma por membro) · Entities (one per member) | Receita · Ingrediente · Categoria · Área/Origem |

## Como correr · How to run

```sh
cd client
npm install
npm run dev         # http://localhost:5173
```

Requisitos · Requirements: Node.js 22 LTS, npm 10, Git.

## Estrutura · Structure

client/                     frontend Vue 3 + Vite + Vue Router (M1)
├── src/
│   ├── main.js             createApp(App).use(router).mount('#app')
│   ├── App.vue             navegação + <RouterView> · navigation + <RouterView>
│   ├── router.js           uma rota por ecrã (Aula 06) · one route per screen
│   ├── Home.vue            página inicial: tema, grupo · home page: theme, group
│   ├── api/getJSON.js      o fetch das fichas: res.ok + JSON · the fetch from the fichas
│   └── entities
│ 
└── public/data/items.json  dados do exemplo · example data
server/                     API Express + MongoDB — a partir da Aula 08 (M2) · from Aula 08 (M2)

**Regra: uma pasta por entidade** em `client/src/entities/<entidade>/`, com `api.js`, `<Entidade>List.vue`, `<Entidade>Detail.vue` e, no M1, `<Entidade>Form.vue`. As rotas da entidade entram no `router.js` e o link na `App.vue` — ver os comentários. · **Rule: one folder per entity** in `client/src/entities/<entity>/`, with `api.js`, `<Entity>List.vue`, `<Entity>Detail.vue` and, for M1, `<Entity>Form.vue`. The entity's routes go in `router.js` and its link in `App.vue` — see the comments there.

## Calendário · Calendar

| Marco · Milestone | O quê · What | Peso · Weight | Prazo · Deadline |
|---|---|---|---|
| M1 | Vue sobre a API pública: lista, detalhe, formulário, routing — um ecrã por membro · Vue over the public API: list, detail, form, routing — one screen per member | 10% | dom. · Sun 08/11/2026 |
| M2 | API própria Node + Express + MongoDB — uma entidade por membro, com relações; o frontend passa a usá-la · your own API — one entity per member, with relations; the frontend switches to it | 15% | dom. · Sun 06/12/2026 |
| M3 | PWA + Canvas + relatório ≤ 2 páginas + apresentação no workshop de 14/01 · PWA + Canvas + report ≤ 2 pages + presentation at the 14/01 workshop | 15% | dom. · Sun 17/01/2027 |


## Declaração de IA · AI declaration

Declaramos que utilizamos ferramentas de IA generativa como apoio ao desenvolvimento e estruturação inicial do projeto, em conformidade com as regras estabelecidas.


## Perguntas Frequentes 
1. A API não tem detalhe por ID, só lista. O detalhe pode usar list() e find?

Resposta / Procedimento: Sim, o detalhe pode utilizar a função list() combinada com um find para localizar o item, devendo essa opção ser explicitamente descrita no README.   


2. A API utiliza um nome ou slug em vez de um número para identificar os itens. Como fica a rota?

Resposta / Procedimento: A rota mantém-se estruturada como /:id e o link gerado a partir da lista leva o identificador (seja nome ou slug) que a função get() espera receber.   


3. A API não suporta paginação. Como se resolve?

Resposta / Procedimento: A lista pode ficar sem paginação ou pode ser aplicado um slice diretamente no api.js. Não há perda de pontos por a API não paginar nativamente.   


4. E se a API pública falhar (problemas de CORS, chave ou limite de pedidos)?

Resposta / Procedimento: Deve ser acautelada uma alternativa de segurança: guardar uma amostra JSON estática na pasta public/data/ do projeto para servir de reserva. O api.js lê a partir daí em caso de falha, e essa situação deve ser referida no README.   


5. A utilização de Inteligência Artificial generativa é permitida?

Resposta / Procedimento: Sim, é permitida como apoio ao desenvolvimento em casa, mas exige uma declaração obrigatória no README a detalhar o quê, onde e como foi verificado. É importante garantir que dominas o código, uma vez que na Parte B do teste (a realizar a 14/01) serás questionado/a a explicar o código da tua entidade.   

