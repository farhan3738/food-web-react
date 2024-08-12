import React from 'react';
import './Explore.css';
import Pizza from '../assets/pizza.jpg';
import Burger from '../assets/burger.jpg';
import Wraps from '../assets/wraps.jpg';

const Items = () => {
  return (
    <div className="App">
      <h1>Explore Foods</h1>
      <div className="food-container">
        <div className="food-item">
          <img src={Pizza} alt="Pizza" />
          <div className="food-name">Pizza</div>
        </div>
        <div className="food-item">
          <img src={Burger} alt="Burger" />
          <div className="food-name">Burger</div>
        </div>
        <div className="food-item">
          <img src={Wraps}alt="Momo" />
          <div className="food-name">Momo</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
