import React from 'react';
import './Ring.css'

const Ring = ({cartButtonClick, ring }) => {
    const {name, price, picture, id } = ring

    return (
        <div className='ring'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>price: {price}</p>
            <button className='cart-btn' onClick={()=>cartButtonClick({ring})} >ADD TO CART</button>
        </div>
    );
};

export default Ring;