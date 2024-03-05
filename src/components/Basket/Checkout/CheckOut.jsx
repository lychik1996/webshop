import { useForm } from 'react-hook-form';
import './checkOut.scss';
import { Link } from 'react-router-dom';
import { useDeleteInBasketMutation, useLoadBasketQuery } from '../../../store/api/apiBasket';
import CheckOutItem from './CheckOutItem';
import { useState } from 'react';
export default function CheckOut() {
  const { handleSubmit, register, reset } = useForm();
  const {data:basketItem}=useLoadBasketQuery();
  const[clearBasket]=useDeleteInBasketMutation();
  const [coupon,setCoupon]=useState(1);
  const placeOrder = (data) => {
    console.log(data);
    for(let i=0;i<basketItem.length;i++){
        clearBasket(basketItem[i].id);
    }
    if(!data.saveInfo){
      reset();
    }
  };
  const subTotal = basketItem?basketItem.reduce((acum,item)=>acum+item.price*item.count,0):0;
  const total = subTotal*coupon;

  return (
    <>
      <div className="container">
        <div className="checkout">
          <div className="checkout_map">
            <Link to="/" className="checkout_map-home">
              Home
            </Link>
            <span>/</span>
            <Link to="/basket" className="checkout_map-basket">
              Basket
            </Link>
            <span>/</span>
            <Link to="/basket/checkout" className="checkout_map-checkout">
              CheckOut
            </Link>
          </div>
          <h1>Billing Details</h1>
          <form onSubmit={handleSubmit(placeOrder)} className="checkout_form">
            <div className="checkout_left">
              
              <div>
                <label>
                  First Name*
                  <span></span>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    placeholder="Bob"
                  />
                </label>
                <label>
                  Company Name
                  <span></span>
                  <input
                    type="text"
                    {...register('companyName')}
                    placeholder="Google"
                  />
                </label>
                <label>
                  Street Address*
                  <span></span>
                  <input
                    type="text"
                    {...register('streetAddress', { required: true })}
                    placeholder="Kreshatike"
                  />
                </label>
                <label>
                  Apartment, floor, etc. (optional)
                  <span></span>
                  <input
                    type="text"
                    {...register('appartment')}
                    placeholder="100 ap, 5 floor,..."
                  />
                </label>
                <label>
                  Town/City*
                  <span></span>
                  <input
                    type="text"
                    {...register('city', { required: true })}
                    placeholder="Kyiv"
                  />
                </label>
                <label>
                  Phone Number*
                  <span></span>
                  <input
                    type="text"
                    {...register('phone', { required: true })}
                    placeholder="+380935641394"
                  />
                </label>
                <label>
                  Email Address*
                  <span></span>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    placeholder="qer@gmail.com"
                  />
                </label>
              </div>
              <label className='save_info'>
                <input type="checkbox" {...register('saveInfo')} />
                <span></span>
                Save this information for faster check-out next time
              </label>
            </div>
            <div className="checkout_right">
              <div className="checkout_right_items">{basketItem?.map((item)=>(
                <CheckOutItem key={item.id} item={item}/>
              ))}</div>
              <div className="checkout_right_price">
                <div className="checkout_right_price_s">
                  <p>Subtotal:</p>
                  <p>${subTotal}</p>
                </div>
                <div className="string"></div>
                <div className="checkout_right_price_s">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="string"></div>
                <div className="checkout_right_price_s">
                  <p>Total:</p>
                  <p>${total}</p>
                </div>
              </div>
              <div className='checkout_right_bank'>
                <label><input type="radio" {...register('payMeth')} defaultChecked value={'Bank'}/><span></span> Bank</label>
                <ul className='checkout_right_bank_img'>
                  <li><img src="/basket/pay/1.png" alt="" /></li>
                  <li><img src="/basket/pay/2.png" alt="" /></li>
                  <li><img src="/basket/pay/3.png" alt="" /></li>
                  <li><img src="/basket/pay/4.png" alt="" /></li>
                </ul>
              </div>
              <label className='checkout_right_cash'><input type="radio" {...register('payMeth')} value={'Cash'}/><span></span> Cash on delivery</label>
              <div className='checkout_right_coupon'>
                <input type="text" {...register('coupon')} placeholder='Coupon Code' />
                <div className='apply'>Apply Coupon</div>
              </div>
              <button >Place Order</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
