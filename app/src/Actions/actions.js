import axios from 'axios'

export const getPokemon = () => dispatch => {
    dispatch(fetchStart())

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(resp => {
        dispatch(fetchSuccess(resp.data))
    }).catch(err => {
        dispatch(fetchFail(err))
    })
}
export const getPokemonDetail = (url) => dispatch => {
    
    axios.get(url)
        .then(resp => {
            dispatch(fetchPokemon(resp));
        })
        
}
export const FETCH_START = 'FETCH_START';
export const fetchStart = ()=> {
    return ({type:FETCH_START});
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = (pokemonData)=> {
    return ({type:FETCH_SUCCESS, payload:pokemonData.results});
}

export const FETCH_FAILED = 'FETCH_FAILED';
export const fetchFail = (error)=> {
    return ({type:FETCH_FAILED, payload:error});
}

export const FETCH_POKEMON = "FETCH_POKEMON";
export const fetchPokemon = (pokemon) => {
    return ({type:FETCH_POKEMON, payload:pokemon});
}



