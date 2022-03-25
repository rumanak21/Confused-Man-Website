import React from 'react';
import './Ring.css'

const Ring = (props) => {
    const {name, price, picture, } = props.ring
    return (
        <div className='ring'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>price: {price}</p>
        </div>
    );
};

export default Ring;