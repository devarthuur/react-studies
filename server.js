// server.js
const jsonServer = require('json-server');
const path = require('path');

// Cria o servidor
const server = jsonServer.create();

// Configura o roteador para o db.json
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Configura os middlewares padrão (CORS, logger, etc.)
const middlewares = jsonServer.defaults();

// Usa os middlewares
server.use(middlewares);


server.patch('/tarefas/:id/status', (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const db = router.db; // Instância do lowdb
  const tarefa = db.get('tarefas').find({ id }).value();

  if (tarefa) {
    db.get('tarefas').find({ id }).assign({ status }).write();
    res.status(200).json({ ...tarefa, status });
  } else {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

// Usa o roteador padrão
server.use(router);

// Inicia o servidor na porta definida pelo ambiente ou 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}`);
});
