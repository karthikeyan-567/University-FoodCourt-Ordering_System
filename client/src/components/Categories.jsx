import './Categories.css';
import { Router } from 'react-router-dom';
import { useState } from 'react';


const Categories = () => {
      
  return (
    <section className="categories-section">
      <h2 className="categories-heading">Top Categories</h2>
      <div className="category-buttons">
        <button className="active">All</button>
        <button>Noodle Dishes</button>
        <button>Rice Dishes</button>
        <button>Rolls and Wraps</button>
        <button>Seafood Dishes</button>
        <button>Beverages</button>
        <input type="text" placeholder="Search for food..." className="search-input" />
      </div>
      <h3 className="menu-heading">Today's Menu</h3>

   
    </section>
  );
};

export default Categories;
