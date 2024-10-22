import React from 'react'

function Card({ item, handleBuy, id }) {
    return (
        <div className="card" key={id}>
            <div className="sale">New</div>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"><span className="older-price">${item.price}.00</span>
                    {item.salePrice ? (<span className="new-price"> ${item?.salePrice}.00</span>) : <></>}
                </p>
                <button className="btn-lg btn-block btn-dark" onClick={() => { handleBuy(item) }}>Buy</button>
            </div>
        </div>
    )
}

export default Card;