import React from 'react';
import {connect} from 'react-redux';

const Title = (props) => {
    const {appTitle} = props;

    return (
        <div className='titleContainer'>
            <h1 className='title'>{appTitle}</h1>
        </div>
    )
};


const mapStateToProps = state => {
    return {
        appTitle: state.appTitle
    };
};

export default connect(mapStateToProps)(Title);