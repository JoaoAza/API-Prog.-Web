const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

app.use(express.json());

// Carrega swagger.yaml
const swaggerDocument = YAML.load('./swagger.yaml');

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rota inicial
app.get('/', (req, res) => {
    res.send('API online');
});

// GET /posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id
app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: 'Post não encontrado'
        });
    }

    res.json(post);
});

// POST /posts
app.post('/posts', (req, res) => {
    const { titulo, conteudo } = req.body;

    const novoPost = {
        id: posts.length + 1,
        titulo,
        conteudo
    };

    posts.push(novoPost);

    res.status(201).json(novoPost);
});

// PUT /posts/:id
app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: 'Post não encontrado'
        });
    }

    const { titulo, conteudo } = req.body;

    post.titulo = titulo;
    post.conteudo = conteudo;

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

let posts =

    [
  {
    "id": 1,
    "titulo": "Minha primeira postagem",
    "conteudo": "Conteúdo completo da primeira postagem do blog.",
    "autor": "João Silva",
    "criadoEm": "2026-05-20T14:30:00Z",
    "atualizadoEm": "2026-05-20T15:00:00Z"
  },
  {
    "id": 2,
    "titulo": "Aprendendo HTML na prática",
    "conteudo": "Nesta postagem, exploramos os conceitos básicos de HTML e sua importância na construção de páginas web.",
    "autor": "Mariana Costa",
    "criadoEm": "2026-05-21T09:15:00Z",
    "atualizadoEm": "2026-05-21T10:00:00Z"
  },
  {
    "id": 3,
    "titulo": "Introdução ao CSS",
    "conteudo": "O CSS permite estilizar páginas HTML, definindo cores, tamanhos, espaçamentos e layouts responsivos.",
    "autor": "Carlos Mendes",
    "criadoEm": "2026-05-22T11:20:00Z",
    "atualizadoEm": "2026-05-22T12:05:00Z"
  },
  {
    "id": 4,
    "titulo": "JavaScript para iniciantes",
    "conteudo": "JavaScript é uma linguagem essencial para adicionar interatividade em páginas e aplicações web.",
    "autor": "Ana Pereira",
    "criadoEm": "2026-05-23T16:45:00Z",
    "atualizadoEm": "2026-05-23T17:10:00Z"
  },
  {
    "id": 5,
    "titulo": "Consumindo APIs com Fetch",
    "conteudo": "A função fetch permite realizar requisições HTTP e consumir dados externos em aplicações front-end.",
    "autor": "Lucas Almeida",
    "criadoEm": "2026-05-24T08:00:00Z",
    "atualizadoEm": "2026-05-24T08:40:00Z"
  },
  {
    "id": 6,
    "titulo": "Boas práticas em formulários",
    "conteudo": "Formulários devem possuir validação, mensagens claras e uma estrutura acessível para melhorar a experiência do usuário.",
    "autor": "Beatriz Souza",
    "criadoEm": "2026-05-25T13:30:00Z",
    "atualizadoEm": "2026-05-25T14:20:00Z"
  },
  {
    "id": 7,
    "titulo": "Responsividade no front-end",
    "conteudo": "Um site responsivo se adapta a diferentes tamanhos de tela, oferecendo boa navegação em celulares, tablets e computadores.",
    "autor": "Rafael Lima",
    "criadoEm": "2026-05-26T10:10:00Z",
    "atualizadoEm": "2026-05-26T10:55:00Z"
  },
  {
    "id": 8,
    "titulo": "Criando componentes reutilizáveis",
    "conteudo": "Separar partes do site, como header e footer, facilita a manutenção e evita repetição de código.",
    "autor": "Fernanda Rocha",
    "criadoEm": "2026-05-27T15:00:00Z",
    "atualizadoEm": "2026-05-27T15:35:00Z"
  },
  {
    "id": 9,
    "titulo": "Organização de arquivos em projetos web",
    "conteudo": "Manter arquivos HTML, CSS, JavaScript e imagens bem organizados ajuda no desenvolvimento e na manutenção do projeto.",
    "autor": "Gustavo Martins",
    "criadoEm": "2026-05-28T09:45:00Z",
    "atualizadoEm": "2026-05-28T10:30:00Z"
  },
  {
    "id": 10,
    "titulo": "Publicando um site estático",
    "conteudo": "Sites feitos apenas com HTML, CSS e JavaScript podem ser publicados facilmente como sites estáticos.",
    "autor": "Patrícia Gomes",
    "criadoEm": "2026-05-29T18:20:00Z",
    "atualizadoEm": "2026-05-29T18:50:00Z"
  },
  {
    "id": 11,
    "titulo": "Introdução ao Node.js",
    "conteudo": "Node.js permite executar JavaScript no servidor, possibilitando a criação de APIs e aplicações back-end.",
    "autor": "Eduardo Nunes",
    "criadoEm": "2026-05-30T07:30:00Z",
    "atualizadoEm": "2026-05-30T08:10:00Z"
  },
  {
    "id": 12,
    "titulo": "Criando uma API REST",
    "conteudo": "Uma API REST organiza recursos por rotas e utiliza métodos HTTP como GET, POST, PUT e DELETE.",
    "autor": "Camila Ribeiro",
    "criadoEm": "2026-05-31T12:00:00Z",
    "atualizadoEm": "2026-05-31T12:45:00Z"
  },
  {
    "id": 13,
    "titulo": "Entendendo rotas no Express",
    "conteudo": "O Express facilita a criação de rotas e o tratamento de requisições em aplicações Node.js.",
    "autor": "Henrique Barros",
    "criadoEm": "2026-06-01T14:25:00Z",
    "atualizadoEm": "2026-06-01T15:00:00Z"
  },
  {
    "id": 14,
    "titulo": "Validação de dados no back-end",
    "conteudo": "Validar dados recebidos pela API evita erros, aumenta a segurança e melhora a confiabilidade da aplicação.",
    "autor": "Larissa Teixeira",
    "criadoEm": "2026-06-02T11:40:00Z",
    "atualizadoEm": "2026-06-02T12:15:00Z"
  },
  {
    "id": 15,
    "titulo": "Tratamento de erros em APIs",
    "conteudo": "Uma boa API deve retornar mensagens de erro claras e códigos HTTP adequados para cada situação.",
    "autor": "Ricardo Oliveira",
    "criadoEm": "2026-06-03T17:10:00Z",
    "atualizadoEm": "2026-06-03T17:55:00Z"
  },
  {
    "id": 16,
    "titulo": "LocalStorage no navegador",
    "conteudo": "O LocalStorage permite armazenar dados simples no navegador, como preferências ou caches temporários.",
    "autor": "Juliana Ferreira",
    "criadoEm": "2026-06-04T08:50:00Z",
    "atualizadoEm": "2026-06-04T09:20:00Z"
  },
  {
    "id": 17,
    "titulo": "Cache no front-end",
    "conteudo": "O uso de cache pode reduzir requisições desnecessárias e melhorar a performance percebida pelo usuário.",
    "autor": "Mateus Carvalho",
    "criadoEm": "2026-06-05T13:05:00Z",
    "atualizadoEm": "2026-06-05T13:45:00Z"
  },
  {
    "id": 18,
    "titulo": "Mensagens de loading",
    "conteudo": "Indicadores de carregamento ajudam o usuário a entender que uma ação está em andamento.",
    "autor": "Aline Martins",
    "criadoEm": "2026-06-06T10:30:00Z",
    "atualizadoEm": "2026-06-06T11:00:00Z"
  },
  {
    "id": 19,
    "titulo": "Notificações de erro amigáveis",
    "conteudo": "Mensagens visuais no canto da tela podem informar falhas sem interromper completamente a navegação.",
    "autor": "Bruno Henrique",
    "criadoEm": "2026-06-07T16:15:00Z",
    "atualizadoEm": "2026-06-07T16:50:00Z"
  },
  {
    "id": 20,
    "titulo": "Deploy no Render",
    "conteudo": "O Render permite publicar sites estáticos e aplicações Node.js de forma integrada com repositórios GitHub.",
    "autor": "Sofia Andrade",
    "criadoEm": "2026-06-08T09:00:00Z",
    "atualizadoEm": "2026-06-08T09:40:00Z"
  },
  {
    "id": 21,
    "titulo": "Diferença entre Static Site e Web Service",
    "conteudo": "Static Site é indicado para HTML, CSS e JavaScript puro, enquanto Web Service é usado para aplicações com servidor.",
    "autor": "Diego Ramos",
    "criadoEm": "2026-06-09T12:35:00Z",
    "atualizadoEm": "2026-06-09T13:10:00Z"
  },
  {
    "id": 22,
    "titulo": "Versionamento com Git",
    "conteudo": "Git permite controlar versões do projeto, registrar mudanças e colaborar com outras pessoas.",
    "autor": "Natália Dias",
    "criadoEm": "2026-06-10T15:25:00Z",
    "atualizadoEm": "2026-06-10T16:00:00Z"
  },
  {
    "id": 23,
    "titulo": "Usando GitHub em projetos web",
    "conteudo": "O GitHub facilita o armazenamento do código, colaboração em equipe e integração com plataformas de deploy.",
    "autor": "Felipe Cardoso",
    "criadoEm": "2026-06-11T08:10:00Z",
    "atualizadoEm": "2026-06-11T08:55:00Z"
  },
  {
    "id": 24,
    "titulo": "Documentando APIs com Swagger",
    "conteudo": "Swagger permite documentar endpoints, schemas e respostas de uma API de forma visual e interativa.",
    "autor": "Renata Lopes",
    "criadoEm": "2026-06-12T11:50:00Z",
    "atualizadoEm": "2026-06-12T12:30:00Z"
  },
  {
    "id": 25,
    "titulo": "Testando endpoints da API",
    "conteudo": "Ferramentas como Swagger, Postman e o próprio navegador ajudam a verificar se os endpoints estão funcionando.",
    "autor": "Vitor Fernandes",
    "criadoEm": "2026-06-13T17:40:00Z",
    "atualizadoEm": "2026-06-13T18:20:00Z"
  },
  {
    "id": 26,
    "titulo": "Códigos HTTP mais usados",
    "conteudo": "Códigos como 200, 201, 400, 404 e 500 ajudam a indicar o resultado de uma requisição HTTP.",
    "autor": "Gabriela Moreira",
    "criadoEm": "2026-06-14T10:05:00Z",
    "atualizadoEm": "2026-06-14T10:45:00Z"
  },
  {
    "id": 27,
    "titulo": "Criando dados mockados",
    "conteudo": "Dados mockados são úteis para testar APIs e interfaces antes da integração com um banco de dados real.",
    "autor": "André Lopes",
    "criadoEm": "2026-06-15T13:15:00Z",
    "atualizadoEm": "2026-06-15T13:55:00Z"
  },
  {
    "id": 28,
    "titulo": "Separando responsabilidades no código",
    "conteudo": "Separar funções por responsabilidade torna o código mais legível, reutilizável e fácil de manter.",
    "autor": "Priscila Duarte",
    "criadoEm": "2026-06-16T09:35:00Z",
    "atualizadoEm": "2026-06-16T10:10:00Z"
  },
  {
    "id": 29,
    "titulo": "Melhorando a experiência do usuário",
    "conteudo": "Uma boa experiência depende de layout claro, mensagens compreensíveis, responsividade e desempenho.",
    "autor": "Marcelo Farias",
    "criadoEm": "2026-06-17T14:00:00Z",
    "atualizadoEm": "2026-06-17T14:45:00Z"
  },
  {
    "id": 30,
    "titulo": "Finalizando o projeto web",
    "conteudo": "Ao finalizar um projeto, é importante revisar o código, testar as funcionalidades e garantir que o deploy esteja funcionando.",
    "autor": "João Vitor Azambuja",
    "criadoEm": "2026-06-18T18:30:00Z",
    "atualizadoEm": "2026-06-18T19:00:00Z"
  }
];