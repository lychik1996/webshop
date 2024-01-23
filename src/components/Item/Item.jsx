import { Link, useNavigate, useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './item.scss';
const API = 'http://localhost:3001/items';
const MOCH = 'https://65a90569219bfa3718683366.mockapi.io/items';
// const itemTest = {
//   id: 1,
//   name: 'Havic HV G-92 Gamepad',
//   category: 'Gaming',
//   description:
//     'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressuresensitive.',
//   imgsL: ['1l.png', '2l.png', '3l.png', '4l.png'],
//   imgsS: ['1s.png', '2s.png', '3s.png', '4s.png'],
//   price: 192,
//   rating: 3,
//   reviews: 150,
//   colour: ['rgba(160, 188, 224, 1)', 'rgba(224, 117, 117, 1)'],
//   sizes: ['XS', 'S', 'M', 'L', 'XL'],
// };
export default function Item() {
  const navigate = useNavigate();
  const { itemName } = useParams();
  const [itemTest, setItemTest] = useState(null);
  const { handleSubmit, register, reset, setValue, getValues } = useForm();
  const [rating, setRating] = useState(0);
  const [selectedColour, setSelectedColour] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [count, setCount] = useState(1);
  const [selectedImg, setSelectedImg] = useState('');
  console.log(itemName);
  
  useEffect(() => {
    const loadItem = async () => {
      try {
        const response = await fetch(`${MOCH}?name=${itemName}`);
        if(!response.ok){
          navigate('/notfoundpage')
          return
        }
        const data = await response.json();
        setItemTest(data[0]);
        setRating(data[0].rating);
        setSelectedColour(data[0].colour[0]);
        setSelectedSize(data[0].sizes[2]);
        setSelectedImg(data[0].imgsL[0]);
        
      } catch (error) {
        navigate('/notfoundpage')
        
      }
    };

    loadItem();
  }, [itemName]);
  
  if (!itemTest || Object.keys(itemTest).length === 0) {//if we dont have item
    return <div>Loading...</div>;
  }
  const buyItem = (data) => {
    const itemData = {
      ...data,
      name: itemTest.name,
      category: itemTest.category,
      img: itemTest.imgsS[0],
      price: itemTest.price,
      countPrice: itemTest.price * Number(data.count),
    };
    console.log('Buy now', itemData);
    setSelectedColour(itemTest.colour[0]);
    setSelectedSize(itemTest.sizes[2]);
    reset();
  };
  const addToWishlist = (data) => {
    console.log('Add to Wishlist:', data);
  };

  return (
    <>
      <div className="container">
        <div className="item_map">
          <Link to="/" className="item_map-home">
            Home
          </Link>
          <span>/</span>
          <Link to="/category" className="item_map-category">
            {itemTest.category}
          </Link>
          <span>/</span>
          <Link to="/category/item" className="item_map-item">
            {itemTest.name}
          </Link>
        </div>
        <div className="item">
          <div className="item_imgs">
            {itemTest.imgsS.map((img) => (
              <div
                key={img}
                onClick={() => setSelectedImg(img.replace('s', 'l'))}
              >
                <img
                  src={`/item/${itemTest.name}/${img}`}
                  style={{ maxWidth: 122, maxHeight: 106 }}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="item_img">
            <img src={`/item/${itemTest.name}/${selectedImg}`} alt="" />
          </div>
          <div className="item_info">
            <h1 className="item_name">{itemTest.name}</h1>
            <div className="item_rating">
              <Rating
                value={rating}
                onChange={(e, newRating) => setRating(newRating)}
              />
              <p className="item_reviews">({itemTest.reviews} Reviews)</p>
              <span className="string">|</span>
              <p className="item_stock">In Stock</p>
            </div>
            <h2 className="item_price">
              ${itemTest.price}
              {Math.floor(itemTest.price) === itemTest.price && '.00'}
            </h2>
            <div className="item_description">
              <p>{itemTest.description}</p>
            </div>

            <div className="item_string"></div>
            <form onSubmit={handleSubmit(buyItem)}>
              <div className="item_colours">
                <p>Colours:</p>
                {itemTest.colour.map((colour) => (
                  <label
                    key={colour}
                    className={`item_colour_label${
                      selectedColour === colour ? '_selected' : ''
                    }`}
                    style={{
                      background:
                        selectedColour === colour
                          ? `radial-gradient(circle, ${colour} 55%, white 55%)`
                          : `${colour}`,
                    }}
                    onClick={() => setSelectedColour(colour)}
                  >
                    <input
                      type="radio"
                      name="colour"
                      value={colour}
                      defaultChecked={selectedColour === colour}
                      {...register('colour')}
                    />
                  </label>
                ))}
              </div>
              <div className="item_sizes">
                <p>Size:</p>
                {itemTest.sizes.map((size) => (
                  <label
                    key={size}
                    className={`item_size_label${
                      selectedSize === size && '_selected'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      defaultChecked={selectedSize === size}
                      {...register('size')}
                    />
                    {size}
                  </label>
                ))}
              </div>
              <div className="item_count">
                <div className="item_count_choose">
                  <div
                    className="left"
                    onClick={() => {
                      const currentCount = Number(getValues('count'));
                      if (currentCount > 1) {
                        setValue('count', String(currentCount - 1));
                      }
                    }}
                  >
                    -
                  </div>
                  <input
                    type="text"
                    defaultValue={count}
                    onChange={(e) => setValue('count', e.target.value)}
                    {...register('count')}
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
                  <div
                    className="right"
                    onClick={() =>
                      setValue('count', String(Number(getValues('count')) + 1))
                    }
                  >
                    +
                  </div>
                </div>
                <button className="item_basket">Buy Now</button>
                <div
                  className="item_wishList"
                  onClick={() => addToWishlist(itemTest)}
                >
                  <img src="/item/Wishlist.svg" alt="" />
                </div>
              </div>
            </form>

            <div className="item_delivery">
              <img src="/item/icon-delivery.svg" alt="" />
              <div className="item_delivery_info">
                <p className="item_delivery_top">Free Delivery</p>
                <p className="item_delivery_bot">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="item_return">
              <img src="/item/Icon-return.svg" alt="" />
              <div className="item_return_info">
                <p className="item_return_top">Return Delivery</p>
                <p className="item_return_bot">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="item_releted">
          <div></div>
          <p>Related Item</p>
        </div>
      </div>
    </>
  );
}
