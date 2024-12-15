let state = { pokemons: [] }
let listeners = []

// Function to fetct data and update the state
const getPokemns = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await resp.json()
    state.pokemons = data.results
    listeners.forEach(listener => listener())
}

const getState = () => state

const subscribe = (listener) => {
    listeners.push(listener)
    return () => {
        listeners = listeners.filter(l => l !== listener)
    }
}

export { getState, subscribe, getPokemns }