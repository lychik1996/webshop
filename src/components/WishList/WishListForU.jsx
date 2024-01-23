import { Rating } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function WishListForU({ item }) {
  
  const [rating, setRating] = useState(item.rating);
  return (
    <>
      <li>
        
          <div className="wishList_forU_top">
            {item.discount > 0 && <p className="discount">-{item.discount}%</p>}
            {item.new && <p className="new">NEW</p>}
            <div>
              <img src="/wishList/quick.svg" className="quick" alt="" />
            </div>
            <Link to={`/${item.name}`}>
            <img
              src={`/wishList/forU/${item.id}.png`}
              className="item"
              alt=""
            />
            </Link>
          </div>
        

        <div className="wishList_forU_btn">
          <img src="/wishList/cart.svg" alt="" />
          <p>Add To Cart</p>
        </div>
        <p className="wishList_forU-name">{item.name}</p>
        <div className="wishList_forU_price">
          {item.discount > 0 && (
            <p className="price_discount">
              ${Math.ceil(item.price * (1 - item.discount / 100))}
            </p>
          )}
          <p className={`price ${item.discount > 0 && 'old'}`}>${item.price}</p>
        </div>
        <div className="wishList_forU_rating">
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
