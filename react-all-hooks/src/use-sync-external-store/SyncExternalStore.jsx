import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { getPokemns, getState, subscribe } from './pokemonStore';

function SyncExternalStoreExample(props) {

    const { pokemons } = useSyncExternalStore(subscribe, getState); // getServerSnapshot

    useEffect(() => {
        getPokemns();
    }, [])

    return (
        <div>
            <h1>SyncExternalStoreExample</h1>
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

export default SyncExternalStoreExample