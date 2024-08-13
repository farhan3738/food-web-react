import React from 'react';
import './Menu.css';
import pizza from '../assets/p1.jpg';
import burger from '../assets/b1.jpg';
import momo from '../assets/m1.jpg';

const Menu = () => {
  return (
    <div className="Appp">
      <h1>Food Menu</h1>
      <div className="food-grid">
        <div className="food-card">
          <img src={pizza} alt="Pizza" />
          <div className="food-details">
            <h2>Chicken Pizza</h2>
            <p>$2.3</p>
            <p>Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="food-card">
          <img src={burger} alt="Smoky Burger" />
          <div className="food-details">
            <h2>Smoky Burger</h2>
            <p>$2.3</p>
            <p>Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="food-card">
          <img src={burger} alt="Nice Burger" />
          <div className="food-details">
            <h2>Beef Burger</h2>
            <p>$2.3</p>
            <p>Made with Italian Sauce, Beef, and organic vegetables.</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="food-card">
          <img src={pizza} alt="Food Title" />
          <div className="food-details">
            <h2>Beef Pizza</h2>
            <p>$2.3</p>
            <p>Made with Italian Sauce, Beef, and organic vegetables.</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="food-card">
          <img src={momo} alt="Chicken Steam Momo" />
          <div className="food-details">
            <h2>Chicken Steam Momo</h2>
            <p>$2.3</p>
            <p>Made with Italian Sauce, Chicken, and organic vegetables.</p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="food-card">
          <img src={pizza} alt="Pizza" />
          <div className="food-details">
            <h2>Veg Pizza</h2>
            <p>$2.3</p>
            <p>Made with Italian Sauce and organic vegetables.</p>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      <div className="see-all">
        <a href="#">See All Foods</a>
      </div>
    </div>
  );
};

export default Menu;
