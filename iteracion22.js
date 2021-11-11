const getCharacters = async () => {
    let resultfetch = await fetch('https://rickandmortyapi.com/api/character')
    let personajes= await resultfetch.json()
    console.log(personajes)
}

getCharacters();