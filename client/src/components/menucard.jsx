import { useState } from 'react';
import './Menucard.css'; 

function Menucard(props) {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const subtract = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="menucard">
      <img src={props.img} alt={props.name} />
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <h3>⭐ 4.5</h3>

      <div className="quantity-controls">
        <button className="subtract-btn" onClick={subtract}>-</button>
        <span className="count">{count}</span>
        <button className="add-btn" onClick={add}>+</button>
      </div>

      <button className="order-btn">Order Now</button>
    </div>
  );
}

export default Menucard;
