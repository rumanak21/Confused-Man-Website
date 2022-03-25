import React, { useEffect, useState } from 'react';
import Ring from '../Ring/Ring';
import './Shop.css'

const Shop = () => {
    const [rings, setRings] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setRings(data))
    }, [])
    return (
        <div className="shopContainer">
            <div className='shop'>
                {rings.map(ring => <Ring key={ring.id} ring={ring} ></Ring>)}
            </div>
            <div className='selectItem'>
                <h3>Select Rings</h3>
                <button className='select-btn'>CHOOSE ONE</button>
                <button className='select-btn'>CHOOSE AGAIN</button>
                
            </div>
        </div>


    );
};

export default Shop;