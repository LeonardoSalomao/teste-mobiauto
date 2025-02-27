const axios = require('axios');

async function getRickAndMortyCharacters() {
  const characterIds = [1, 2, 3, 4, 5];
  const url = `https://rickandmortyapi.com/api/character/${characterIds.join(',')}`;

  try {
    const response = await axios.get(url);
    const characters = response.data.map((char) => ({
      nome: char.name,
      genero: char.gender === 'Male' ? 'Homem' : 'Mulher',
      avatar: char.image,
      especie: char.species === 'Human' ? 'Humano' : 'Alien',
    }));
    return characters;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    return [];
  }
}

module.exports = getRickAndMortyCharacters;

if (require.main === module) {
  getRickAndMortyCharacters().then(console.log);
}
