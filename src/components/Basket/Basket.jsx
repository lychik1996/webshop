import { useState } from 'react';
import BasketItem from './BasketItem';
import './basket.scss';
import { Link } from 'react-router-dom';

const data = [
    {
        id:1,
        name:"LCD Monitor",
        price:'650',
    },
    {
        id:2,
        name:"H1 Gamepad",
        price:'550',
    }
]
export default function Basket() {
    const [item,setItem]=useState(data);

  return (
    <>
      <div className="container">
        <div className="basket_map">
          <Link to="/" className="basket_map-home">
            Home
          </Link>
          <span>/</span>
          <Link to="/basket" className="basket_map-basket">
            Basket
          </Link>
        </div>

        <ul className="basket_products">
          <li className='basket_products_info'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </li>
          {item.map((item,index)=>(
            <BasketItem key={index} item={item}/>
          ))}
        </ul>
        <div className="basket_navigate">
          <Link to='/'>Return To Shop</Link>
          <button>Update Cart</button>
        </div>
        <div className="basket_bottom">
          <form className="basket_code">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply Coupon</button>
          </form>
          <div className="basket_total">
            <h2>Cart Total</h2>
            <div className="basket_subtotal">
              <p>Subtotal:</p>
              <p>$1750</p>
            </div>
            <div className='string'></div>
            <div className="basket_shipping">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className='string'></div>
            <div className="basket_all">
              <p>Total:</p>
              <p>$1750</p>
            </div>
            <Link>Procees to checkout</Link>
          </div>
        </div>
      </div>
    </>
  );
}
