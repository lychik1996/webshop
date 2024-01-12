import { Link } from 'react-router-dom';
import './about.scss';
import { useEffect, useState } from 'react';
import Staff from './Staff';
import MyLoader from './SkeletonStaff';
export default function About() {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    const getStaff = async () => {
      await fetch('http://localhost:3001/staffs')
      .then((response)=>response.json())
      .then((data)=>setStaff(data))
    };
    getStaff();
  }, []);
  

  return (
    <>
      <div className="container">
        <div className="about_map">
          <Link to="/" className="about_map-home">
            Home
          </Link>
          <span>/</span>
          <Link to="/about" className="about_map-about">
            About
          </Link>
        </div>
        <div className="about_story">
          <div className="about_story-info">
            <h1>Our Story</h1>
            <p className="about_story-info-center">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img
            src="about/main.png"
            alt=""
            style={{ width: 705, height: 609 }}
          />
        </div>
        <div className="about_statistic">
          <div>
            <img src="/about/Services.png" alt="" />
            <h3>10.5k</h3>
            <p>Sallers active our site</p>
          </div>
          <div>
            <img src="/about/dollar.png" alt="" />
            <h3>33k</h3>
            <p>Mopnthly Produduct Sale</p>
          </div>
          <div>
            <img src="/about/active.png" alt="" />
            <h3>45.5k</h3>
            <p>Customer active in our site</p>
          </div>
          <div>
            <img src="/about/delivery.png" alt="" />
            <h3>25k</h3>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
        <div className="about_slider">
          <div className="about_slider_block">
            <div className="about_slider_staffs">
              {staff.length>1?staff.map((item) => (
                <Staff key={item.id} staff={item} />
              )):new Array(3).fill(1).map((_,index)=>(
                <MyLoader key={index}/>
              ))}
            </div>
          </div>
          <ul>
            <li>
              <img src="/about/Ellipse.png" alt="" />
            </li>
            <li>
              <img src="/about/Ellipse.png" alt="" />
            </li>
            <li>
              <img src="/about/EllipseV.png" alt="" />
            </li>
            <li>
              <img src="/about/Ellipse.png" alt="" />
            </li>
            <li>
              <img src="/about/Ellipse.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="about_more">
          <div>
            <img src="/about/delivery.png" alt="" />
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div>
            <img src="/about/headphone.png" alt="" />
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div>
            <img src="/about/guarante.png" alt="" />
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}
