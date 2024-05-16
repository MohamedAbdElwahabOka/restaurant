import React from 'react'
import CarouselImg from '../components/Carousel'
import Category from './Category'

const Home = () => {
    const foods = {
        Breakfast: [
          {
            name: "Pancakes",
            image: "Pizza.jpg",
            description: "A stack of pancakes with syrup"
          },
          {
            name: "French Toast",
            image: "Pizza.jpg",
            description: "French toast with powdered sugar"
          },
          {
            name: "Waffles",
            image: "Waffles.jpg",
            description: "Waffles with strawberries and syrup"
          }
        ]
      }
    return (
        <div>
            <section className='container' id='Search-results'>
                <h3>Search Results</h3>
                <div id="search-items" class="row mt-3">
                </div>
            </section>
            <div className='container'>
            <CarouselImg/>

            <Category categoryName= {"Breakfast"} foods={foods}/>
            </div>
        </div>
    )
}

export default Home