import { useEffect, useMemo, useState } from 'react';
import HomeItem from './HomeItem/HomeItem';
import './home.scss';
import { Link } from 'react-router-dom';
import PreHomeItem from './HomeItem/PreHomeItem';

const customStartDate = '2024-02-29T12:00:00';
const StartDateAdv = '2024-02-03T12:00:00';
const saleAPi = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    nav: 'sale',
    category: 'Gaming',
    price: 120,
    discount: 35,
    new: false,
    rating: 4,
    count: 1,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    nav: 'sale',
    category: 'Gaming',
    price: 1960,
    discount: 0,
    new: false,
    rating: 3,
    count: 1,
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    nav: 'sale',
    category: 'Gaming',
    price: 550,
    discount: 0,
    new: true,
    rating: 5,
    count: 1,
  },
  {
    id: 4,
    name: 'S-Series Comfort Chair',
    nav: 'sale',
    category: 'Gaming',
    price: 750,
    discount: 0,
    new: false,
    rating: 2,
    count: 1,
  },
];
const bestAPI = [
  {
    id: 1,
    name: 'The north coat',
    nav: 'best',
    category: 'Gaming',
    price: 120,
    discount: 35,
    new: false,
    rating: 4,
    count: 1,
  },
  {
    id: 2,
    name: 'Gucci duffle bag',
    nav: 'best',
    category: 'Gaming',
    price: 1960,
    discount: 0,
    new: false,
    rating: 3,
    count: 1,
  },
  {
    id: 3,
    name: 'RGB liquid CPU Cooler',
    nav: 'best',
    category: 'Gaming',
    price: 550,
    discount: 0,
    new: true,
    rating: 5,
    count: 1,
  },
  {
    id: 4,
    name: 'Small BookSelf',
    nav: 'best',
    category: 'Gaming',
    price: 750,
    discount: 0,
    new: false,
    rating: 2,
    count: 1,
  },
];
const exploreAPI = [
  {
    id: 1,
    name: 'Breed Dry Dog Food',
    nav: 'explore',
    category: 'Gaming',
    price: 120,
    discount: 35,
    new: false,
    rating: 4,
    count: 1,
  },
  {
    id: 2,
    name: 'CANON EOS DSLR Camera',
    nav: 'explore',
    category: 'Gaming',
    price: 1960,
    discount: 0,
    new: false,
    rating: 3,
    count: 1,
  },
  {
    id: 3,
    name: 'ASUS FHD Gaming Laptop',
    nav: 'explore',
    category: 'Gaming',
    price: 550,
    discount: 0,
    new: true,
    rating: 5,
    count: 1,
  },
  {
    id: 4,
    name: 'Curology Product Set',
    nav: 'explore',
    category: 'Gaming',
    price: 750,
    discount: 0,
    new: false,
    rating: 2,
    count: 1,
  },
  {
    id: 5,
    name: 'Kids Electric Car',
    nav: 'explore',
    category: 'Gaming',
    price: 120,
    discount: 35,
    new: false,
    rating: 4,
    colour: ['blue', 'red', 'gold', 'green'],
    count: 1,
  },
  {
    id: 6,
    name: 'Jr. Zoom Soccer Cleats',
    nav: 'explore',
    category: 'Gaming',
    price: 1960,
    discount: 0,
    new: false,
    rating: 3,
    colour: ['grey', 'red'],
    count: 1,
  },
  {
    id: 7,
    name: 'GP11 Shooter USB Gamepad',
    nav: 'explore',
    category: 'Gaming',
    price: 550,
    discount: 0,
    new: true,
    rating: 5,
    colour: ['green', 'red'],
    count: 1,
  },
  {
    id: 8,
    name: 'Quilted Satin Jacket',
    nav: 'explore',
    category: 'Gaming',
    price: 750,
    discount: 0,
    new: false,
    rating: 2,
    colour: ['green', 'red'],
    count: 1,
  },
];
export default function Home() {
  const [sale, setSele] = useState(saleAPi);
  const [best, setBest] = useState(bestAPI);
  const [explore, setExplore] = useState(exploreAPI);
  const [timeSales, setTimeSales] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeAdv, setTimeAdv] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //for useEffect Date
  const timerIntervalFunc = (startDate, setEffect) => {
    const timerInterval = setInterval(() => {
      const elapsedTime = startDate - new Date();

      if (elapsedTime >= 0) {
        const remainingTime = calculateTimeRemaining(elapsedTime);
        setEffect(remainingTime);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);
  };
  //calculate Date
  const calculateTimeRemaining = useMemo(() => (elapsedTime) => {
    const remainingSeconds = Math.floor(elapsedTime / 1000);

    const days = Math.floor(remainingSeconds / (24 * 60 * 60));
    const hours = Math.floor((remainingSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, []);
  //useEffect Date
  useEffect(() => {
    const startDate = new Date(customStartDate);
    timerIntervalFunc(startDate, setTimeSales);
    return () => clearInterval(timerIntervalFunc);
  }, []);
  useEffect(() => {
    const startDate = new Date(StartDateAdv);
    timerIntervalFunc(startDate, setTimeAdv);
    return () => clearInterval(timerIntervalFunc);
  }, []);

  //smooth scroll btn
  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  //sliderHead
  const [sliderHead, setSliderHead] = useState([]);
  const [curISliderHead, setCurISliderHead] = useState(0);
  useEffect(() => {
    const loadSliderHead = async () => {
       const response = await fetch('http://localhost:3001/sliderHead')
        const data =  await response.json();
        setSliderHead(data);
        setCurISliderHead(Math.floor(data.length / 2));
    };
    loadSliderHead();
  }, []);
  const clickSliderHeadLeft=()=>{
   setCurISliderHead((prevIndex)=>prevIndex===0?sliderHead.length-1:prevIndex-1);
  }
  const clickSliderHeadRight=()=>{
    setCurISliderHead((prevIndex)=>prevIndex===sliderHead.length-1?0:prevIndex+1);
  }
  
  return (
    <>
      <div className="container">
        <div className="head_home">
          <aside className="navigate">
            <ul>
              <li>
                <Link>
                  <p>Woman’s Fashion</p> <p>&gt;</p>
                </Link>
              </li>
              <li>
                <Link>
                  <p>Men’s Fashion</p> <p>&gt;</p>
                </Link>
              </li>
              <li>
                <Link>Electronics</Link>
              </li>
              <li>
                <Link>Home & Lifestyle</Link>
              </li>
              <li>
                <Link>Medicine</Link>
              </li>
              <li>
                <Link>Sports & Outdoor</Link>
              </li>
              <li>
                <Link>Baby’s & Toys</Link>
              </li>
              <li>
                <Link>Groceries & Pets</Link>
              </li>
              <li>
                <Link>Health & Beauty</Link>
              </li>
            </ul>
          </aside>
          <div className="slider_container">
            <div className="slider_left" onClick={()=>clickSliderHeadLeft()}></div>
            <div className="slider_right"onClick={()=>clickSliderHeadRight()}></div>
            <div className="slider">
              <div className="slider_items" style={{transform : `translateX(${-curISliderHead*892}px)`}}>
                {sliderHead?.map((item) => (
                  <div className="slider_item" key={item.id}>
                    <div className="slider_item_left">
                      <div className="slider_item_left-top">
                        <img src="/home/AppleLogo.png" alt="" />
                        <p>iPhone 14 Series</p>
                      </div>
                      <h3>Up to 10% off Voucher</h3>
                      <div className="slider_item_left-bot">
                        <p>Shop Now</p>
                        <img src="/home/white arrow-right.svg" alt="" />
                      </div>
                    </div>
                    <img
                      className="slider_item_right"
                      src="/home/phonelogo.png"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="slider_navigate">
              {sliderHead?.map((item,index)=>(
                <img src={index===curISliderHead?`/home/Ellipse 2.svg`:`/home/Ellipse 1.svg`} alt="" key={item.id} onClick={()=>setCurISliderHead(index)} />
              ))}
            </div>
          </div>
        </div>
        <div className="nav_home">
          <div className="nav_home_top">
            <div className="nav_home_top_block"></div>
            <p className="nav_home_top_text">Today’s</p>
          </div>
          <div className="nav_home_bot">
            <div className="nav_home_bot_left">
              <h1 className="nav_home_bot_text">Flash Sales</h1>
              <div className="nav_home_bot_time">
                <div>
                  <p className="name">Days</p>
                  <p className="time">
                    {timeSales.days < 10 && '0'}
                    {timeSales.days}
                  </p>
                </div>
                <p className="dought">:</p>
                <div>
                  <p className="name">Hours</p>
                  <p className="time">
                    {timeSales.hours < 10 && '0'}
                    {timeSales.hours}
                  </p>
                </div>
                <p className="dought">:</p>
                <div>
                  <p className="name">Minutes</p>
                  <p className="time">
                    {timeSales.minutes < 10 && '0'}
                    {timeSales.minutes}
                  </p>
                </div>
                <p className="dought">:</p>
                <div>
                  <p className="name">Seconds</p>
                  <p className="time">
                    {timeSales.seconds < 10 && '0'}
                    {timeSales.seconds}
                  </p>
                </div>
              </div>
            </div>
            <div className="nav_home_bot_arrows">
              <div>
                <img src="/home/arrow-left.svg" alt="" />
              </div>
              <div>
                <img src="/home/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sale">
          <ul className="sale_items">
            {sale.length > 1
              ? sale.map((item) => <HomeItem key={item.id} item={item} />)
              : new Array(4)
                  .fill(1)
                  .map((_, index) => <PreHomeItem key={index} />)}
          </ul>
          <Link className="sale_all">View All Products</Link>
        </div>
        <div className="nav_home">
          <div className="nav_home_top">
            <div className="nav_home_top_block"></div>
            <p className="nav_home_top_text">Categories</p>
          </div>
          <div className="nav_home_bot">
            <div className="nav_home_bot_left">
              <h1 className="nav_home_bot_text">Browse By Category</h1>
            </div>
          </div>
        </div>
        <div className="categories">
          <ul>
            <li>
              <Link>
                <img src="/home/category/phone.svg" alt="" />
                <p>Phones</p>
              </Link>
            </li>
            <li>
              <Link>
                <img src="/home/category/computer.svg" alt="" />
                <p>Computers</p>
              </Link>
            </li>
            <li>
              <Link>
                <img src="/home/category/watch.png" alt="" />
                <p>SmartWatch</p>
              </Link>
            </li>
            <li>
              <Link>
                <img src="/home/category/camera.svg" alt="" />
                <p>Camera</p>
              </Link>
            </li>
            <li>
              <Link>
                <img src="/home/category/headphone.svg" alt="" />
                <p>HeadPhone</p>
              </Link>
            </li>
            <li>
              <Link>
                <img src="/home/category/gamepad.svg" alt="" />
                <p>Gamepad</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav_home">
          <div className="nav_home_top">
            <div className="nav_home_top_block"></div>
            <p className="nav_home_top_text">This Month</p>
          </div>
          <div className="nav_home_bot">
            <div className="nav_home_bot_left">
              <h1 className="nav_home_bot_text">Best Selling Products</h1>
            </div>
            <div className="nav_home_bot_view">View All</div>
          </div>
        </div>
        <div className="best">
          <ul className="best_items">
            {best.length > 1
              ? best.map((item) => <HomeItem key={item.id} item={item} />)
              : Array(4)
                  .fill(1)
                  .map((_, index) => <PreHomeItem key={index} />)}
          </ul>
        </div>
        <div className="advertising">
          <div className="advertising_left">
            <p className="advertising_left_category">Categories</p>
            <h2 className="advertising_left_name">
              Enhance Your Music Experience
            </h2>
            <div className="advertising_left_timer">
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.days < 10 && '0'}
                  {timeAdv.days}
                </p>
                <p className="name">Days</p>
              </div>
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.hours < 10 && '0'}
                  {timeAdv.hours}
                </p>
                <p className="name">Hours</p>
              </div>
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.minutes < 10 && '0'}
                  {timeAdv.minutes}
                </p>
                <p className="name">Minutes</p>
              </div>
              <div className="advertising_left_time">
                <p className="time">
                  {timeAdv.seconds < 10 && '0'}
                  {timeAdv.seconds}
                </p>
                <p className="name">Seconds</p>
              </div>
            </div>
            <p className="advertising_left_btn">Buy Now!</p>
          </div>
          <div className="advertising_right"></div>
          <img src="/home/jbl.png" alt="" />
        </div>

        <div className="nav_home">
          <div className="nav_home_top">
            <div className="nav_home_top_block"></div>
            <p className="nav_home_top_text">Our Products</p>
          </div>
          <div className="nav_home_bot">
            <div className="nav_home_bot_left">
              <h1 className="nav_home_bot_text">Explore Our Products</h1>
            </div>
            <div className="nav_home_bot_arrows">
              <div>
                <img src="/home/arrow-left.svg" alt="" />
              </div>
              <div>
                <img src="/home/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <ul className="explore_items">
            {sale.length > 1
              ? explore.map((item) => <HomeItem key={item.id} item={item} />)
              : new Array(8)
                  .fill(1)
                  .map((_, index) => <PreHomeItem key={index} />)}
          </ul>
          <Link className="explore_all">View All Products</Link>
        </div>
        <div className="nav_home">
          <div className="nav_home_top">
            <div className="nav_home_top_block"></div>
            <p className="nav_home_top_text">Featured</p>
          </div>
          <div className="nav_home_bot">
            <div className="nav_home_bot_left">
              <h1 className="nav_home_bot_text">New Arrival</h1>
            </div>
          </div>
        </div>
        <div className="arrival">
          <div className="arrival_left">
            <div className="group_text">
              <p className="name">PlayStation 5</p>
              <p className="overview">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="shop_now">Shop Now</p>
            </div>
            <img src="/home/ps5.png" alt="" />
          </div>
          <div className="arrival_right">
            <div className="arrival_right_top">
              <div className="group_text">
                <p className="name">Women’s Collections</p>
                <p className="overview">
                  Featured woman collections that give you another vibe.
                </p>
                <p className="shop_now">Shop Now</p>
              </div>
              <img src="/home/woman.png" alt="" />
            </div>
            <div className="arrival_right_bot">
              <div className="arrival_right_bot_left">
                <div className="group_text">
                  <p className="name">Speakers</p>
                  <p className="overview">Amazon wireless speakers</p>
                  <p className="shop_now">Shop Now</p>
                </div>
                <div className="fill"></div>
                <img src="/home/likejbl.png" alt="" />
              </div>
              <div className="arrival_right_bot_right">
                <div className="group_text">
                  <p className="name">Perfume</p>
                  <p className="overview">GUCCI INTENSE OUD EDP</p>
                  <p className="shop_now">Shop Now</p>
                </div>
                <div className="fill"></div>
                <img src="/home/guchi.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="home_more">
          <div>
            <img src="/home/delivery.png" alt="" />
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div>
            <img src="/home/headphone.png" alt="" />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div>
            <img src="/home/guarante.png" alt="" />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
        <div className="arrow_slide_top" onClick={scrollToTop}>
          <img src="/home/arrow-up.svg" alt="" />
        </div>
      </div>
    </>
  );
}
