import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PokemonDisplay from './PokemonDisplay';

import { getPokemon, fetchFail } from '../Actions/actions';

const Pokemon = (props) => {
    const { pokemonData, isFetching, error } = props;

    useEffect(() => {
        props.getPokemon();
    }, []);
    if (error) {
    return <h2>We got an error: {error}</h2>;
    }

    if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
    }

    return (
        <div className="pokemon-container">
            {
                pokemonData.map((pokemon, index) => <PokemonDisplay key={index} name={pokemon.name} url={pokemon.url} />)
            }
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        pokemonData: state.pokemonData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getPokemon, fetchFail })(Pokemon);