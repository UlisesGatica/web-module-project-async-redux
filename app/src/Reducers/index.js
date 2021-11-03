import { FETCH_START, FETCH_SUCCESS, FETCH_FAILED, FETCH_POKEMON} from '../Actions/actions';

const initialState = {
    pokemonData: [],
    pokemon: [],
    appTitle: "My Pokemon App",
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                pokemonData:[],
                isFetching: true,
                error:''
              }
        case FETCH_SUCCESS:
            return {
                ...state,
                pokemonData: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAILED:
            return {
                ...state,
                pokemonData: [],
                isFetching: false,
                error: action.payload
            }
        case FETCH_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.payload.data.name]
            }
        default:
            return state
        }
};