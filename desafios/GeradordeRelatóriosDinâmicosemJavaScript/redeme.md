📊 Gerador de Relatórios Dinâmicos em JavaScript

Este projeto foi desenvolvido como parte de um desafio prático da Escola Nova Era, com o objetivo de aplicar conceitos fundamentais de JavaScript moderno, organização de código e integração com bibliotecas externas.

🎯 Objetivo do Projeto

Criar uma aplicação web capaz de:

Importar dados a partir de um arquivo JSON

Calcular métricas como soma, média e contagem

Exibir os dados em gráficos dinâmicos

Gerar e exportar um relatório em PDF

Organizar o código de forma modular, seguindo boas práticas

🧩 Funcionalidades

✔ Upload de arquivo JSON
✔ Processamento automático dos dados
✔ Cálculo de métricas estatísticas
✔ Visualização gráfica com Chart.js
✔ Exportação de relatório em PDF com pdf-lib
✔ Código limpo, modular e reutilizável

🗂 Estrutura do Projeto
/project
│
├── index.html
├── style.css
├── js/
│   ├── main.js
│   ├── dataProcessor.js
│   ├── chartManager.js
│   └── pdfGenerator.js

🧠 Explicação da Solução
1. Importação do JSON

O usuário seleciona um arquivo .json, que é lido pelo FileReader. Os dados são convertidos automaticamente para objetos JavaScript.

2. Processamento dos Dados

O módulo dataProcessor.js calcula:

Soma dos valores

Média

Contagem de registros

3. Visualização com Gráficos

Utilizando o Chart.js, o módulo chartManager.js renderiza gráficos dinâmicos a partir dos dados importados.

4. Geração de PDF

Com o pdf-lib, o módulo pdfGenerator.js cria um relatório em PDF contendo as métricas calculadas.

5. Organização Modular

Cada responsabilidade foi separada em módulos, facilitando manutenção, testes e escalabilidade.

🧪 Exemplo de JSON
[
  { "name": "Produto A", "value": 10 },
  { "name": "Produto B", "value": 25 },
  { "name": "Produto C", "value": 15 }
]

🚀 Como Executar

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo.git


Abra o arquivo index.html no navegador.

Importe um arquivo JSON.

Visualize as métricas, gráfico e exporte o PDF.

🏫 Sobre o Desafio

Este projeto foi desenvolvido como parte de um desafio prático da Escola Nova Era, com foco em:

Desenvolvimento web moderno

Boas práticas de programação

Aplicação prática de bibliotecas JavaScript

👨‍💻 Autor

Desenvolvido por Vitor Dutra Melo
📍 Londres, Reino Unido
💻 Software Development 
📫 vitordutra1125@gmail.com