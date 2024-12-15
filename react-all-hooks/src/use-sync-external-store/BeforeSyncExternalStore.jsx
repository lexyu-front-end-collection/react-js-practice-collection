import React, { useEffect, useState } from 'react';

function BeforeSyncExternalStoreExample(props) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemns = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const data = await resp.json()
            setPokemons(data.results)
        }
        getPokemns();
    }, [])

    return (
        <div>
            <h1>BeforeSyncExternalStoreExample</h1>
            <ul>
                {pokemons.length === 0 ? (
                    <h3>Loading...</h3>
                ) : (
                    pokemons.map((pokemon) => (
                        <li key={pokemon.name} style={{ textAlign: 'left' }}>
                            {pokemon.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default BeforeSyncExternalStoreExample