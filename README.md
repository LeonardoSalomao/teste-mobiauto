
# FIPE-Table

Este projeto é uma aplicação para consulta de valores de veículos baseada na Tabela FIPE, utilizando a API [Parallelum FIPE](https://parallelum.com.br/fipe/api/v1). Além disso, há um conjunto de exercícios resolvidos que fazem parte do teste para Desenvolvedor Front-end.

## Funcionalidades

- **Consulta FIPE**: Selecione a marca, modelo e ano do veículo para visualizar o valor de mercado.
- **Exercícios resolvidos**: Implementações de desafios de lógica de programação e consumo de API.

---

## Tecnologias Utilizadas

- **Front-end**: React, Next.js, Material-UI (para componentes)
- **Estado global**: Redux
- **Estilização**: CSS-in-JS (Material-UI)
- **Requisições HTTP**: Axios (usado no exercício 3)
- **Gerenciador de pacotes**: npm

---

## 🛠️ Instalação e Uso

### 🔹 Rodando a aplicação FIPE-Table

1. **Clone o repositório**  
   ```sh
   git clone https://github.com/LeonardoSalomao/teste-mobiauto.git
   cd fipe-table
   ```

2. **Instale as dependências**  
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**  
   ```sh
   npm run dev
   ```

4. **Acesse a aplicação**  
   Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

### 🔹 Executando os exercícios

Os exercícios estão organizados dentro da pasta `exercicios`.

1. **Entre na pasta**  
   ```sh
   cd exercicios
   ```

2. **Execute um exercício específico**  
   ```sh
   node nome-do-arquivo.js
   ```

3. **Para o exercício 3 (requisições com Axios)**  
   Primeiro, instale as dependências:  
   ```sh
   npm install
   ```

   Depois, execute o código:  
   ```sh
   node exercicio3.js
   ```

---

## 🌎 Deploy

A aplicação está disponível online via Vercel:  
🔗 **[Link do Deploy](https://teste-mobiauto-4hlq.vercel.app/)**