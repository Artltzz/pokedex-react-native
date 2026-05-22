# Pokédex Aleatória

Aplicativo mobile desenvolvido com React Native e Expo que consome a PokéAPI para gerar Pokémons aleatórios exibindo imagem, nome e informações do personagem.

## Tecnologias Utilizadas

- React Native
- Expo
- Axios
- JavaScript
- PokéAPI

## Funcionalidades

- Gerar Pokémons aleatórios
- Exibir imagem do Pokémon
- Mostrar:
  - Nome
  - ID
  - Altura
  - Peso
  - Experiência base
- Indicador de carregamento durante requisições
- Interface estilizada em tema dark

## API Utilizada

API pública:

```bash
https://pokeapi.co/api/v2/pokemon/
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/pokedex-react-native.git
```

Entre na pasta do projeto:

```bash
cd pokedex-react-native/meu-app
```

Instale as dependências:

```bash
npm install
```

Instale o Axios:

```bash
npm install axios
```

## Executando o Projeto

Inicie o servidor Expo:

```bash
npx expo start
```

Para limpar cache:

```bash
npx expo start --clear
```

## Estrutura do Projeto

```bash
meu-app/
│
├── App.js
├── package.json
├── node_modules/
├── assets/
└── .gitignore
```

## Funcionamento

O aplicativo gera um número aleatório entre 1 e 1025 para buscar informações de um Pokémon na PokéAPI.

Exemplo da requisição:

```javascript
const numeroAleatorio = Math.floor(Math.random() * 1025) + 1;

const resposta = await axios.get(
  `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
);
```

Os dados retornados são armazenados utilizando `useState` e renderizados na interface.

## Interface

A interface foi construída utilizando componentes nativos do React Native:

- View
- Text
- Image
- TouchableOpacity
- ActivityIndicator

## Aprendizados

Durante o desenvolvimento foram praticados conceitos como:

- Consumo de APIs REST
- Requisições assíncronas
- Gerenciamento de estado com Hooks
- Estilização no React Native
- Estruturação de aplicações Expo
- Tratamento de loading

## Git Ignore

Arquivos ignorados no projeto:

```gitignore
node_modules/
.expo/
dist/
web-build/
.env*.local
.claude/
claude.json
```

## Commit Utilizado

```bash
git commit -m "feat: implement random pokedex app with pokeapi integration"
```

## Autor

Arthur
