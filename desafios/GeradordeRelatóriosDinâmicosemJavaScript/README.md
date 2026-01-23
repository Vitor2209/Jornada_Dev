📊 Gerador de Relatórios Dinâmicos em JavaScript

Este projeto foi desenvolvido como parte de um desafio prático da Escola Nova Era, com o objetivo de criar uma aplicação web capaz de gerar relatórios dinâmicos a partir de dados em formato JSON, utilizando boas práticas de programação e bibliotecas modernas.

🎯 Objetivo do Projeto

Permitir que o usuário:

Importe arquivos JSON (ex: vendas, usuários, produtos, etc.)

Escolha qual campo numérico deseja analisar

Selecione quais métricas visualizar (soma, média, contagem)

Escolha o tipo de gráfico (barra, linha ou pizza)

Visualize os dados em uma tabela de preview

Exporte o relatório em PDF e os dados em CSV

🧩 Funcionalidades

✔ Upload de arquivo JSON
✔ Seleção dinâmica do campo numérico
✔ Cálculo de métricas (soma, média, contagem)
✔ Visualização gráfica com Chart.js
✔ Preview dos dados em tabela
✔ Exportação de relatório em PDF com pdf-lib
✔ Exportação de dados em CSV
✔ Código modular e organizado

🗂 Estrutura do Projeto
/ GeradordeRelatóriosDinâmicosemJavaScript
│
├── index.html
├── style.css
└── js/
    ├── main.js
    ├── dataProcessor.js
    ├── chartManager.js
    └── pdfGenerator.js

🧠 Explicação da Solução
1. Importação do JSON

O usuário seleciona um arquivo .json, que é lido utilizando FileReader. Os dados são convertidos automaticamente para objetos JavaScript.

2. Seleção do Campo Numérico

A aplicação identifica automaticamente os campos numéricos disponíveis no JSON e permite que o usuário escolha qual deseja analisar.

3. Processamento dos Dados

O módulo dataProcessor.js calcula:

Soma

Média

Contagem

4. Visualização com Gráficos

O módulo chartManager.js utiliza Chart.js para renderizar gráficos dinâmicos, com opção de tipo (barra, linha ou pizza).

5. Preview em Tabela

Os dados importados são exibidos em uma tabela para facilitar a visualização antes da análise.

6. Geração de PDF

O módulo pdfGenerator.js gera um relatório em PDF contendo:

Campo analisado

Métricas selecionadas pelo usuário

7. Exportação em CSV

O usuário pode exportar os dados brutos em formato .csv para uso externo.

🧪 Exemplo de JSON para Teste
[
  { "id": 1, "name": "Produto A", "value": 1200, "quantity": 3 },
  { "id": 2, "name": "Produto B", "value": 850, "quantity": 5 },
  { "id": 3, "name": "Produto C", "value": 430, "quantity": 2 },
  { "id": 4, "name": "Produto D", "value": 980, "quantity": 4 },
  { "id": 5, "name": "Produto E", "value": 1500, "quantity": 6 }
]

🚀 Como Executar

Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo.git


Abra o arquivo index.html no navegador.

Importe um arquivo JSON.

Escolha o campo, métricas e tipo de gráfico.

Exporte o relatório em PDF ou os dados em CSV.

🏫 Sobre o Desafio

Este projeto foi desenvolvido como parte de um desafio prático da Escola Nova Era, com foco em:

Manipulação de dados com JavaScript

Organização modular de código

Uso de bibliotecas externas (Chart.js e pdf-lib)

Boas práticas de desenvolvimento web

👨‍💻 Autor

Desenvolvido por Vitor Dutra Melo
📍 Londres, Reino Unido
💻 Software Developer
📫 vitordutra1125@gmail.com