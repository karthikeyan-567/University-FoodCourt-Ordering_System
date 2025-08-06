import './Categories.css';
import { useState } from 'react';
const categories = [
  { name: 'chicken Briyani', price: 'Rs250', img: '/images/briyani.png' },
  { name: 'Lollipop Chicken', price: 'Rs250', img: '/images/lloilop.png' },
  { name: 'Shawarma', price: 'Rs250', img: '/images/shawarma.png' },
  { name: 'mexicon fried Burgers', price: 'Rs250', img: '/images/salad.png' },
    { name: 'chicken Briyani', price: 'Rs250', img: '/images/briyani.png' },
  { name: 'Lollipop Chicken', price: 'Rs250', img: '/images/lloilop.png' },
  { name: 'Shawarma', price: 'Rs250', img: '/images/shawarma.png' },
  { name: 'mexicon fried Burgers', price: 'Rs250', img: '/images/salad.png' },
      { name: 'chicken Briyani', price: 'Rs250', img: '/images/briyani.png' },
  { name: 'Lollipop Chicken', price: 'Rs250', img: '/images/lloilop.png' },
  { name: 'Shawarma', price: 'Rs250', img: '/images/shawarma.png' },
  { name: 'mexicon fried Burgers', price: 'Rs250', img: '/images/salad.png' }
];

const Categories = () => {
  const [counts, setCounts] = useState(Array(categories.length).fill(0));

  const add = (index) => {
    setCounts((prevCounts) => {
      const updated = [...prevCounts];
      updated[index] += 1;
      return updated;
    });
  };

  const subtract = (index) => {
    setCounts((prevCounts) => {
      const updated = [...prevCounts];
      if (updated[index] > 0) {
        updated[index] -= 1;
      }
      return updated;
    });
  };
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

      <div className="menu-grid">
        {categories.map((item, idx) => (
          <div key={idx} className="menu-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <div className="quantity-controls">
              <button className="subtract-btn" onClick={() => subtract(idx)}>-</button>
              <span className="count">{counts[idx]}</span>
              <button className="add-btn" onClick={() => add(idx)}>+</button>
            </div>
             <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
