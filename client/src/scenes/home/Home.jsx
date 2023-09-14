import React from 'react'
import MainCarousel from './MainCarousel.jsx'
import ShoppingList from './ShopingList.jsx';
import Subscribe from './Subscribe.jsx';

function Home() {
    return (
      <div className="home">
        <MainCarousel />
        <ShoppingList/>
        <Subscribe/>
      </div>
    );
  }

export default Home