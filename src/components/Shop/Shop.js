import React, { useEffect, useState } from 'react';
import Ring from '../Ring/Ring';
import './Shop.css'

const Shop = () => {
    const [rings, setRings] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setRings(data))
    }, [])

    const cartButtonClick = (ring) => {
        const newCart = [...cart, [ring]];
        setCart(newCart)

    }
    return (
        <div className="shopContainer">
            <div className='shop'>
                {rings.map(ring => <Ring
                    key={ring.id}
                    ring={ring}
                    cartButtonClick={cartButtonClick}


                ></Ring>)}
            </div>
            <div className='selectItem'>
            <h3>Select Rings: {cart.length}</h3>
                <div className='addedItem'>
                    
                    {cart.map((item) => (
                        <h2 className='selectItem-h2'><img src={item[0].ring.picture} alt="" /> {item[0].ring.name}</h2>
                    ))}
                </div>

                <button className='select-btn'>CHOOSE ONE</button>
                <button className='select-btn'>CHOOSE AGAIN</button>


            </div>
        </div>


    );
};

export default Shop;