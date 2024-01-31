import { Link } from "react-router-dom";
import { useDeleteInWishListMutation } from "../../store/api/apiWish";
import { useAddInBasketMutation, useChangeCountBasketMutation, useLoadBasketQuery } from "../../store/api/apiBasket";

export default function WishListItem({ item}) {
  const [deleteItem]=useDeleteInWishListMutation();
  const [addInBasket]=useAddInBasketMutation();
  const {data}= useLoadBasketQuery();
  const [changeCount]=useChangeCountBasketMutation();
  const addToBasket=()=>{
    if(data?.some((i)=>i.name===item.name)){
      const elem = data?.find((i)=>i.name===item.name);
      changeCount({id:elem.id,count:elem.count+1})
    }else{
      const itemWithOutId = {...item};
    delete itemWithOutId.id;
    addInBasket(itemWithOutId);
    }
  }
  return (
    <>
      <li>
        
          <div className="wishList_item_top">
            {item.discount > 0 && <p className="discount">-{item.discount}%</p>}
            {item.new && <p className="new">NEW</p>}

            <div onClick={()=>deleteItem(item.id)}>
              <img src="/wishList/icon-delete.svg" className="delete" alt="" />
            </div>
            <Link to={`/${item.name}`}>
            <img
              src={`/products/${item.name}.png`}
              className="item"
              alt=""
            />
            </Link>
          </div>
        
        <div className="wishList_item_btn" onClick={()=>addToBasket()}>
          <img src="/wishList/cart.svg" alt="" />
          <p>Add To Cart</p>
        </div>
        <p className="wishList_item-name">{item.name}</p>
        <div className="wishList_item_price">
          {item.discount > 0 && (
            <p className="price_discount">
              ${Math.ceil(item.price * (1 - item.discount / 100))}
            </p>
          )}
          <p className={`price ${item.discount > 0 && 'old'}`}>${item.price}</p>
        </div>
      </li>
    </>
  );
}
