import React from 'react';

const FeaturedRecipes = () => {
  return (
    <section id="home-slider" className="container mt-4">
      <h2 className="mb-4 text-center">Featured Recipes</h2>
      <div className="carousel slide" id="myCarousel" data-ride="carousel">
        <div className="carousel-inner">
          {/* Add your carousel items here */}
          <div className="carousel-item active">
            <img src="Pizza.jpg" className="d-block w-100" alt="Recipe 1" />
          </div>
          <div className="carousel-item">
            <img src="Pizza2.jpg" className="d-block w-100" alt="Recipe 2" />
          </div>
          {/* Add more carousel items as needed */}
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default FeaturedRecipes;