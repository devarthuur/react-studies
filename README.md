React Kanban - Aplicativo de gerenciamento de tarefas
Este é um aplicativo de gestão de tarefas em formato de quadro Kanban, desenvolvido com Vite, React, TypeScript, Radix UI e Zod. O app permite a criação, atualização, exclusão e organização de tarefas em diferentes status, com diferentes níveis de prioridade. O backend é simulado utilizando o json-server, oferecendo um CRUD completo de tarefas.

imagem

Funcionalidades
CRUD de Tarefas: Crie, edite, visualize e exclua tarefas.
Status das Tarefas : As tarefas podem ser organizadas em status como "Fazendo", "Em andamento" e "Concluído".
Prioridade das Tarefas: Defina diferentes níveis de prioridade para as tarefas.
Kanban Board: Interface organizada em colunas que reflete o status das tarefas.
Simulação de Backend: Utilização do json-server para simular um backend RESTful.
Ganchos Reagem :
useState: Gerenciamento de estados locais.
useEffect: Efeitos colaterais para buscar e atualizar dados.
useContext: Compartilhamento de estados globais entre componentes.
Tecnologias Utilizadas
Vite: Ferramenta de build rápida e leve para projetos em React.
React: Biblioteca JavaScript para construção de interfaces de usuário.
TypeScript: Superconjunto de JavaScript que adiciona tipagem estática.
Radix UI : Conjunto de componentes acessíveis e não opinativos para construção da interface.
Zod: Biblioteca para validação de esquemas e tipos.
json-server: Ferramenta que simula uma API REST completa com base em um arquivo JSON.
Instalação e Execução
Pré-requisitos
Node.js (versão 14 ou superior)
npm ou yarn
Passos para executar o projeto
Clone este repositório:

git clone https://github.com/seu-usuario/kanban-task-manager.git
Navegue até o diretório do projeto:

cd kanban-task-manager
Instale as dependências:

npm install
ou

yarn install
Inicie o json-server para simular o backend:

npm run json-server
Em outra aba do terminal, execute o projeto em modo de desenvolvimento:

npm run dev
ou

yarn dev
Acesse a aplicação no navegador:

http://localhost:5173
Estrutura do Projeto
src/components: Contém os componentes reutilizáveis da aplicação.
src/entities: Contém os modelos de dados e interfaces utilizados na aplicação.
src/hooks: Contém hooks customizados.
src/contexts: Define os contextos globais da aplicação.
src/services : Funções responsáveis ​​por fazer requisições HTTP ao json-server.
db.json: Simula o banco de dados da API com as tarefas.
