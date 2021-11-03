import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import { getPokemonDetail } from '../Actions/actions';


const PokemonDisplay = (props) => {
    const { name, url, pokemon } = props;

    useEffect(() => {
        props.getPokemonDetail(url);
        
    }, []);

    return (
        <div className='card'>
            <h2>{name}</h2>
            
            <a href={url}>View</a>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon
    };
};

export default connect(mapStateToProps, { getPokemonDetail})(PokemonDisplay);