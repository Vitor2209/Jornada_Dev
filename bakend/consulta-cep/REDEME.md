# 🌐 SpringCep - API de Consulta de CEP

[![Java](https://img.shields.io/badge/Java-17-blue?logo=java)](https://www.java.com/) 
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.4-brightgreen?logo=spring)](https://spring.io/projects/spring-boot) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Descrição
**SpringCep** é uma API REST desenvolvida em **Spring Boot** que permite consultar informações de endereços a partir de CEPs.  
O projeto consome a API pública do **ViaCEP** para fornecer dados completos de localização.

> Ideal para projetos que precisam validar ou consultar endereços de usuários de forma rápida e eficiente.

---

## 🚀 Tecnologias Utilizadas
- **Java 17**  
- **Spring Boot 3.5.4**  
- **Spring Web**  
- **Maven**  
- **RestTemplate**  

---

## 🔌 API Consumida
### ViaCEP
- **URL Base:** `https://viacep.com.br/ws/{cep}/json`  
- **Documentação:** [ViaCEP](https://viacep.com.br)  
- **Formato de Resposta:** JSON

---

## 📁 Estrutura do Projeto
SpringCep/
├── src/
│ ├── main/
│ │ ├── java/
│ │ │ └── com/brescolanovaeratech/SpringCep/
│ │ │ ├── controller/
│ │ │ │ └── ConsultaController.java
│ │ │ ├── domain/
│ │ │ │ └── CepDomain.java
│ │ │ └── SpringCepApplication.java
│ │ └── resources/
│ │ └── application.properties
└── pom.xml

yaml
Copy code

---

## 🛠️ Como Executar
### Pré-requisitos
- Java 17 ou superior  
- Maven 3.6+  

### Passos
```bash
# Clonar repositório
git clone <url-do-repositorio>

# Entrar na pasta do projeto
cd SpringCep

# Executar aplicação
./mvnw spring-boot:run
A API estará disponível em: http://localhost:8080

📡 Endpoints
Consulta de CEP
GET /consulta/{cep}

Parâmetro: cep - no formato 00000000

Exemplo: GET /consulta/01001000

Resposta: objeto JSON com informações do endereço

Exemplo de Resposta
json
Copy code
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
📈 Melhorias Futuras
 Implementar cache para consultas frequentes

 Adicionar validação de CEP

 Implementar tratamento de erros

 Adicionar documentação com Swagger

 Implementar testes unitários e de integração

 Adicionar logging estruturado

 Implementar métricas com Actuator

👨‍💻 Desenvolvido por
Vitor Dutra Melo
Nova Era Tech

📄 Licença
Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

🤝 Contribuições
Pull requests e issues são bem-vindos! Sinta-se à vontade para sugerir melhorias ou reportar bugs.
