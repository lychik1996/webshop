import { useState } from "react";

export default function BasketItem({item}) {
    const [count,setCount]=useState(1);
    

  return (
    <>
      <li>
        <div className="basket_product_imgs">
          <img
            className="basket_product-cancel"
            src="/basket/icon-cancel.svg"
            alt=""
          />
          <img
            src={`/basket/products/${item.id}.png`}
            alt=""
            style={{ maxWidth: 54, maxHeight: 54 }}
          />
          <p>LCD Monitor</p>
        </div>
        <p className="basket_product_price">${item.price}</p>
        <div className="basket_product_quantity">
          <input type="text" value={count<10?`0${count}`:count} onChange={(e)=>count>=0 && setCount(Number(e.target.value))} />
          <div>
            <img src="/basket/Drop-Up-Small.svg" alt="" onClick={()=>setCount(count+1)} />
            <img src="/basket/Drop-Down-Small.svg" alt=""onClick={()=>count>1 && setCount(count-1)} />
          </div>
        </div>
        <p className="basket_product_prices">${item.price*count}</p>
      </li>
    </>
  );
}
