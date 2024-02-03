import { useEffect, useState } from 'react';
import HomeItem from './HomeItem/HomeItem';
import './home.scss';
import { Link } from 'react-router-dom';
import PreHomeItem from './HomeItem/PreHomeItem';
import SaleTimer from './SaleTimer';
import AdvenceTimer from './AdvenceTimer';


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

export default function Home() {
  const [best, setBest] = useState(bestAPI);


  //states for flashPage
  const [flashData, setFlashData] = useState({
    sales: [],
    page: 1,
    maxPage: 0,
    move: 0,
    loading: true
  });
  
  // maxFlashPage
  useEffect(() => {
    const maxDataFlash = async () => {
      const response = await fetch('http://localhost:3001/flashSales');
      const data = await response.json();
      setFlashData(prevData => ({ ...prevData, maxPage: Math.ceil(data.length / 4) }));
    };
    maxDataFlash();
  }, []);
  
  // pagination load FlashSales
  useEffect(() => {
    if (flashData.loading) {
      const dataFlashSales = async () => {
        const response = await fetch(
          `http://localhost:3001/flashSales?_limit=4&_page=${flashData.page}`
        );
        const data = await response.json();
        setFlashData(prevData => ({
          ...prevData,
          sales: [...prevData.sales, ...data],
          loading: false
        }));
      };
      dataFlashSales();
    }
  }, [flashData.loading, flashData.page]);
  
  // navigate FlashPage
  const moveRightFlashPage = () => {
    if (flashData.move < flashData.maxPage - 1) {
      setFlashData(prevData => ({
        ...prevData,
        move:prevData.move+1
      }));
      if(flashData.page <flashData.maxPage){
        setFlashData((prevData)=>({
          ...prevData,
          page:prevData.page+1,
          loading:true
        }))
      }
    } else {
      setFlashData(prevData => ({ ...prevData, move: 0 }));
    }
  };
  
  const moveLeftFlashPage = () => {
    if (flashData.move !== 0) {
      setFlashData(prevData => ({ ...prevData, move: prevData.move - 1 }));
    }
  };
  //states for Explore
  const [exploreData, setExploreData] = useState({
    items: [],
    page: 1,
    max: 0,
    move: 0,
    loading: true
  });
  
  // maxExplore
  useEffect(() => {
    const maxDataExplore = async () => {
      const response = await fetch('http://localhost:3001/explore');
      const data = await response.json();
      setExploreData(prevData => ({ ...prevData, max: Math.ceil(data.length / 8) }));
    };
    maxDataExplore();
  }, []);
  
  // pagination load explore
  useEffect(() => {
    if (exploreData.loading) {
      const dataExplore = async () => {
        const response = await fetch(
          `http://localhost:3001/explore?_limit=8&_page=${exploreData.page}`
        );
        const data = await response.json();
        setExploreData(prevData => ({
          ...prevData,
          items: [...prevData.items, ...data],
          loading: false
        }));
      };
      dataExplore();
    }
  }, [exploreData.loading, exploreData.page]);
  
  // navigate explore
  const moveRightExplore = () => {
    if (exploreData.move < exploreData.max - 1) {
      setExploreData(prevData => ({
        ...prevData,
        move: prevData.move + 1,
      }));
      if(exploreData.page<exploreData.max){
        setExploreData((prevData)=>({
          ...prevData,
          page:prevData.page+1,
          loading:true
        }))
      }
    } else {
      setExploreData(prevData => ({ ...prevData, move: 0 }));
    }
  };
  
  const moveLeftExplore = () => {
    if (exploreData.move !== 0) {
      setExploreData(prevData => ({ ...prevData, move: prevData.move - 1 }));
    }
  };
  


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
      const response = await fetch('http://localhost:3001/sliderHead');
      const data = await response.json();
      setSliderHead(data);
      setCurISliderHead(Math.floor(data.length / 2));
    };
    loadSliderHead();
  }, []);
  const clickSliderHeadLeft = () => {
    setCurISliderHead((prevIndex) =>
      prevIndex === 0 ? sliderHead.length - 1 : prevIndex - 1
    );
  };
  const clickSliderHeadRight = () => {
    setCurISliderHead((prevIndex) =>
      prevIndex === sliderHead.length - 1 ? 0 : prevIndex + 1
    );
  };

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
            <div
              className="slider_left"
              onClick={() => clickSliderHeadLeft()}
            ></div>
            <div
              className="slider_right"
              onClick={() => clickSliderHeadRight()}
            ></div>
            <div className="slider">
              <div
                className="slider_items"
                style={{ transform: `translateX(${-curISliderHead * 892}px)` }}
              >
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
              {sliderHead?.map((item, index) => (
                <img
                  src={
                    index === curISliderHead
                      ? `/home/Ellipse 2.svg`
                      : `/home/Ellipse 1.svg`
                  }
                  alt=""
                  key={item.id}
                  onClick={() => setCurISliderHead(index)}
                />
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
              <SaleTimer />
            </div>
            <div className="nav_home_bot_arrows">
              <div onClick={() => moveLeftFlashPage()}>
                <img src="/home/arrow-left.svg" alt="" />
              </div>
              <div onClick={() => moveRightFlashPage()}>
                <img src="/home/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sale">
          <div className="slider">
            <ul
              className="sale_items"
              style={{ transform: `translateX(${-flashData.move * 1170}px)` }}
            >
              {flashData.sales
                && flashData.sales.map((item) => (
                    <HomeItem key={item.id} item={item} />
                  ))}
                {flashData.loading && new Array(4)
                    .fill(1)
                    .map((_, index) => <PreHomeItem key={index} />)}
            </ul>
          </div>
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
            <AdvenceTimer />
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
              <div onClick={()=>moveLeftExplore()}>
                <img src="/home/arrow-left.svg" alt="" />
              </div>
              <div onClick={()=>moveRightExplore()}>
                <img src="/home/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <div className="slider">
            <ul className="explore_items" style={{ transform: `translateX(${-exploreData.move * 1170}px)` }}>
              {exploreData.items &&
                 exploreData.items.map((item) => <HomeItem key={item.id} item={item} />)}
                {exploreData.loading &&  new Array(8)
                    .fill(1)
                    .map((_, index) => <PreHomeItem key={index} />)}
            </ul>
          </div>
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
