import React from 'react';
import Card from './Card';

function Cards({ label, products, handleBuy }) {
    return (
        <div className="menu-card all">
            <h1 className="menu-title">{label}</h1>
            <div className="card-group">
                {products && products.map((item, index) => {
                    return (
                        <Card item={item} handleBuy={handleBuy} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default Cards;