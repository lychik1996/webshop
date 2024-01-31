export default function CheckOutItem({ item }) {
  return (
    <>
      <div className="checkout_right_item">
        <div className="checkout_right_item_left">
          <div>
            <img src={`/products/${item.name}.png`} alt="" />
          </div>

          <p>{item.name}</p>
        </div>
        <p className="checkout_right_item_right">${item.price * item.count}</p>
      </div>
    </>
  );
}
