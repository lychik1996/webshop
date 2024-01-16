export default function WishListItem({ item }) {
  return (
    <>
      <li>
        <div className="wishList_item_top">
          {item.discount > 0 && <p className="discount">-{item.discount}%</p>}
          {item.new && <p className="new">NEW</p>}

          <div>
            <img src="wishList/icon-delete.svg" className="delete" alt="" />
          </div>

          <img src={`wishList/products/${item.id}.png`} className="item" alt="" />
        </div>
        <div className="wishList_item_btn">
          <img src="wishList/cart.svg" alt="" />
          <p>Add To Cart</p>
        </div>
        <p className="wishList_item-name">{item.name}</p>
        <div className="wishList_item_price">
          {item.discount>0 && <p className="price_discount">${Math.ceil(item.price*(1-item.discount/100))}</p>}
          <p className={`price ${item.discount>0 && "old"}`}>${item.price}</p>
        </div>
      </li>
    </>
  );
}
