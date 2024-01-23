import { useEffect, useState } from 'react';
import HomeItem from './HomeItem/HomeItem';
import './home.scss';
import { Link } from 'react-router-dom';
import PreHomeItem from './HomeItem/PreHomeItem';

const customStartDate = '2024-01-29T12:00:00';
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
  },
  {
    id: 2,
    name: 'IPS LCD Gaming Monitor',
    nav: 'sale',
    category: 'Gaming',
    price: 1960,
    discount: 0,
    new: false,
    rating: 3,
  },
  {
    id: 3,
    name: 'HAVIT HV-G92 Gamepad',
    nav: 'sale',
    category: 'Gaming',
    price: 550,
    discount: 0,
    new: true,
    rating: 5,
  },
  {
    id: 4,
    name: 'AK-900 Wired Keyboard',
    nav: 'sale',
    category: 'Gaming',
    price: 750,
    discount: 0,
    new: false,
    rating: 2,
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
  },
  {
    id: 2,
    name: 'IPS LCD Gaming Monitor',
    nav: 'best',
    category: 'Gaming',
    price: 1960,
    discount: 0,
    new: false,
    rating: 3,
  },
  {
    id: 3,
    name: 'HAVIT HV-G92 Gamepad',
    nav: 'best',
    category: 'Gaming',
    price: 550,
    discount: 0,
    new: true,
    rating: 5,
  },
  {
    id: 4,
    name: 'AK-900 Wired Keyboard',
    nav: 'best',
    category: 'Gaming',
    price: 750,
    discount: 0,
    new: false,
    rating: 2,
  },
];
export default function Home() {
  const [sale, setSele] = useState(saleAPi);
  const [best, setBest] = useState(bestAPI);
  const [timeSales, setTimeSales] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    //useEffect for date
    const startDate = new Date(customStartDate);

    const timerInterval = setInterval(() => {
      const elapsedTime = startDate - new Date();

      if (elapsedTime >= 0) {
        const remainingTime = calculateTimeRemaining(elapsedTime);
        setTimeSales(remainingTime);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);
  const calculateTimeRemaining = (elapsedTime) => {
    //calculate Date
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
  };
  //smooth scroll btn
  const scrollToTop=()=>{
    window.scrollTo({
        behavior:'smooth',
        top:0
    })
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
            <div className="slider">
              <div className="slider_item">
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
            </div>
            <div className="slider_navigate">
              <img src="/home/Ellipse 1.svg" alt="" />
              <img src="/home/Ellipse 1.svg" alt="" />
              <img src="/home/Ellipse 2.svg" alt="" />
              <img src="/home/Ellipse 1.svg" alt="" />
              <img src="/home/Ellipse 1.svg" alt="" />
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
        <div className='arrow_slide_top' onClick={scrollToTop}><img src="/home/arrow-up.svg" alt="" /></div>
      </div>
    </>
  );
}
