import React, { useEffect, useState } from 'react';
import Ring from '../Ring/Ring';

const Shop = () => {
    const [rings, setRings] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setRings(data))
    },[])
    return (
        <div>
            <p>Total Rings: {rings.length}</p>
            {rings.map(ring =><Ring key={ring.id} ring ={ring} ></Ring>)}
        </div>
    );
};

export default Shop;