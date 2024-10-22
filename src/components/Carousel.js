import React from 'react'

function Carousel({ images, title, description }) {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                {images && images.map((item, index) => {
                    return (
                        <div key={index} className={`carousel-item ${index === 0 && 'active'}`}>
                            <img src={item} className="d-block w-100" alt="..." />
                        </div>
                    )
                }
                )}

            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
            <div className="carousel-title">
                <h1>{title && title}</h1>
                <p>{description && description}</p>
            </div>
        </div>
    )
}

export default Carousel;