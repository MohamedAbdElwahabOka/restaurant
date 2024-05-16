import React, { useState } from 'react';

const Category = ({ categoryName, foods }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (food) => {
        setCart([...cart, food]);
    }
    return (
        <>
            <section className="container mt-4">
                <h2 className="mb-4 text-center" id="category-title">{categoryName}</h2>
            </section>

            <section id="category-foods" className="container mt-4">
                <div className="row" id="category-foods-container">
                    {Object.values(foods).map((foodGroup, index) => (
                        <div className="mb-4 col-md-4" key={index}>
                            {foodGroup.map((food, index) => (
                                <div className="card" key={index}>
                                    <img src={food.image} className="card-img-top" alt={food.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{food.name}</h5>
                                        <p className="card-text">{food.description}</p>
                                        <button className="btn btn-primary" onClick={() => addToCart(food)}>Add to Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>))}
                </div>
            </section>
        </>
    );
}

export default Category;