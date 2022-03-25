import React, { useEffect, useState } from 'react';

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
            {rings.map(ring =>{console.log(ring)})}
        </div>
    );
};

export default Shop;