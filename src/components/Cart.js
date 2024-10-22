import React from 'react'

function Cart({ cart, handleIncrease, handleDecrease }) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body container">
                        {cart.map((product) => {
                            return (
                                <div className='row cart-item' key={product.id}>
                                    <div className="card mb-3 col-md-4 cart-item-card">
                                        <div className="row no-gutters cart-item-detail ">
                                            <div className="col-md-3">
                                                <img src={product.image} alt="..." />
                                            </div>
                                            <div className="col-md-9">
                                                <div className="card-body">
                                                    <p className="card-title">{product.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cart-item-addition-quantity col-md-3'>{product.count}</div>
                                    <div className='cart-item-addition col-md-3'>
                                        <button className='cart-item-addition-increase btn btn-primary' onClick={() => { handleIncrease(product) }}> + </button>
                                        <button className='cart-item-addition-decrease btn btn-danger' onClick={() => { handleDecrease(product) }}> - </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;