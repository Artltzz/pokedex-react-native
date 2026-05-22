import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import axios from 'axios';

export default function App() {

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  async function buscarPokemonAleatorio() {

    setLoading(true);

    try {

      const numeroAleatorio = Math.floor(Math.random() * 1025) + 1;

      const resposta = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio}`
      );

      setPokemon(resposta.data);

    } catch (erro) {

      console.log(erro);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {
    buscarPokemonAleatorio();
  }, []);

  if (loading) {

    return (

      <View style={styles.container}>

        <ActivityIndicator size="large" color="#ffcb05" />

        <Text style={styles.loading}>
          Carregando Pokémon...
        </Text>

      </View>

    );

  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Pokédex Aleatória
      </Text>

      <Image
        source={{
          uri: pokemon.sprites.front_default,
        }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        {pokemon.name}
      </Text>

      <Text style={styles.info}>
        ID: {pokemon.id}
      </Text>

      <Text style={styles.info}>
        Altura: {pokemon.height}
      </Text>

      <Text style={styles.info}>
        Peso: {pokemon.weight}
      </Text>

      <Text style={styles.info}>
        Experiência: {pokemon.base_experience}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={buscarPokemonAleatorio}
      >

        <Text style={styles.botaoTexto}>
          Gerar Pokémon
        </Text>

      </TouchableOpacity>

      <StatusBar style="light" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 35,
    color: '#ffcb05',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  imagem: {
    width: 220,
    height: 220,
    marginBottom: 15,
  },

  nome: {
    fontSize: 30,
    color: '#fff',
    textTransform: 'capitalize',
    marginBottom: 15,
    fontWeight: 'bold',
  },

  info: {
    fontSize: 20,
    color: '#ddd',
    marginTop: 5,
  },

  botao: {
    marginTop: 30,
    backgroundColor: '#ffcb05',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121212',
  },

  loading: {
    color: '#fff',
    marginTop: 15,
    fontSize: 18,
  },

});