# Pokédex Aleatória em React Native com Expo

## Descrição do Projeto

Este projeto consiste em um aplicativo mobile desenvolvido em React Native utilizando Expo. O aplicativo consome dados de uma API pública de Pokémon e exibe informações na tela de forma dinâmica.

A aplicação gera Pokémons aleatórios através de um botão e mostra:

- imagem do Pokémon
- nome
- ID
- altura
- peso
- experiência base

A API utilizada foi a PokéAPI.

---

# Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- Axios
- API REST

---

# Criação do Projeto

## 1. Criar o projeto Expo

No terminal:

```bash
npx create-expo-app meu-app
```

## 2. Entrar na pasta do projeto

```bash
cd meu-app
```

## 3. Instalar a biblioteca Axios

O Axios foi utilizado para realizar requisições HTTP para a API.

```bash
npm install axios
```

## 4. Executar o projeto

```bash
npx expo start
```

Após isso:
- escanear o QR Code com o aplicativo Expo Go
- ou pressionar `a` para abrir no Android

---

# Estrutura do Projeto

```bash
meu-app/
├── App.js
├── package.json
├── node_modules/
└── assets/
```

---

# Funcionamento do Aplicativo

## Importações Utilizadas

Foram importados componentes do React Native para construção da interface:

```javascript
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
```

Também foram utilizados:

```javascript
import React, { useEffect, useState } from 'react';
```

e:

```javascript
import axios from 'axios';
```

---

# Estados do Aplicativo

Foram utilizados dois estados:

```javascript
const [pokemon, setPokemon] = useState(null);
const [loading, setLoading] = useState(true);
```

## Explicação

- `pokemon`
  - armazena os dados do Pokémon recebido pela API

- `loading`
  - controla o carregamento da aplicação

---

# Consumo da API

Foi criada a função:

```javascript
async function buscarPokemonAleatorio()
```

Essa função:
- gera um número aleatório
- faz requisição para a API
- salva os dados recebidos

## Número Aleatório

```javascript
const numeroAleatorio = Math.floor(Math.random() * 1025) + 1;
```

Isso gera IDs aleatórios de Pokémon.

## Requisição HTTP

```javascript
const resposta = await axios.get(
  `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
);
```

A API retorna os dados completos do Pokémon.

---

# Carregamento Automático

Foi utilizado:

```javascript
useEffect(() => {
  buscarPokemonAleatorio();
}, []);
```

Isso faz com que um Pokémon seja carregado automaticamente ao abrir o aplicativo.

---

# Exibição das Informações

## Imagem

```javascript
<Image
  source={{
    uri: pokemon.sprites.front_default,
  }}
  style={styles.imagem}
/>
```

A imagem é obtida diretamente da API.

## Nome

```javascript
{pokemon.name}
```

## ID

```javascript
{pokemon.id}
```

## Altura

```javascript
{pokemon.height}
```

## Peso

```javascript
{pokemon.weight}
```

## Experiência Base

```javascript
{pokemon.base_experience}
```

---

# Botão para Gerar Novos Pokémons

Foi utilizado o componente:

```javascript
<TouchableOpacity>
```

Ao clicar:

```javascript
onPress={buscarPokemonAleatorio}
```

Um novo Pokémon aleatório é carregado.

---

# Estilização

A estilização foi feita utilizando:

```javascript
StyleSheet.create()
```

Foram aplicados:
- cores
- tamanhos
- alinhamentos
- margens
- bordas
- espaçamentos

---

# Resultado Final

O aplicativo final:
- consome uma API pública
- renderiza informações em tempo real
- possui interface visual
- possui interação através de botão
- exibe imagens dinamicamente

---

# Aprendizados Obtidos

Durante o desenvolvimento foram utilizados conceitos importantes de React Native:

- componentes
- props
- hooks
- useState
- useEffect
- consumo de API
- renderização dinâmica
- estilização
- eventos de clique
- requisições HTTP
- programação assíncrona

---

# API Utilizada

API pública:

- PokéAPI

Documentação:

- https://pokeapi.co/docs/v2
