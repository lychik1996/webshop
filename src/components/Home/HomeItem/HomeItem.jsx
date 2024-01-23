import { useState } from 'react';
import './homeItem.scss';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
export default function HomeItem({ item }) {
  const [rating, setRating] = useState(item.rating);
  return (
    <>
      <li className='home_item'>
        <div className="home_item_top">
          {item.discount > 0 && <p className="discount">-{item.discount}%</p>}
          {item.new && <p className="new">NEW</p>}
          <div>
            <img src="/home/eyes.svg" className="eyes" alt="" />
          </div>
          <Link to={`/${item.name}`}>
            <img
              src={`/home/${item.nav}/${item.id}.png`}
              className="item"
              alt=""
            />
          </Link>
        </div>
        <div className="home_item_btn">
          <p>Add To Cart</p>
        </div>
        <p className="home_item-name">{item.name}</p>
        <div className="home_item_price">
          {item.discount > 0 && (
            <p className="price_discount">
              ${Math.ceil(item.price * (1 - item.discount / 100))}
            </p>
          )}
          <p className={`price ${item.discount > 0 && 'old'}`}>${item.price}</p>
        </div>
        <div className="home_item_rating">
          <Rating
            value={rating}
            size="medium"
            onChange={(e, newRating) => setRating(newRating)}
          />
          <p>(65)</p>
        </div>
      </li>
    </>
  );
}
