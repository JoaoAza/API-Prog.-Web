const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

app.use(express.json());

// Carrega swagger.yaml
const swaggerDocument = YAML.load('./swagger.yaml');

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Banco fake em memória
let posts = [
    {
        id: 1,
        titulo: 'Primeiro Post',
        conteudo: 'Conteúdo do primeiro post'
    }
];

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