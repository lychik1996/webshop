import { Suspense, useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function HeadFooter() {
  const [activeUser, setActiveUser] = useState(false); //user menu
  const [prevScroll, setPrevScroll] = useState(0); //for position header
  const [fixedHeader, setFixedHeader] = useState(true); //for position header
  const handleScroll = () => {
    //for position header
    const currentScroll = window.pageYOffset; //pageYOffset количество пикселей прокрутки
    const scrollDiference = Math.abs(prevScroll - currentScroll);
    if (scrollDiference > 50) {
      setFixedHeader(prevScroll > currentScroll);
      setPrevScroll(currentScroll);
    }
  };

  useEffect(() => {
    //for position header
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScroll]);

  const handleMouseEnter = () => {
    //user menu
    setActiveUser(true);
  };
  const handleMouseLeave = () => {
    //user menu
    setActiveUser(false);
  };
  return (
    <>
      <div className="all">
        <header
          style={fixedHeader ? { position: 'fixed' } : { position: 'absolute' }}
        >
          <div className="sale">
            <div className="container">
              <p className="sale_text">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%
              </p>
              <select name="language" id="">
                <option value="English">English</option>
                <option value="Ukraine">Ukraine</option>
              </select>
            </div>
          </div>
          <nav>
            <div className="container">
              <Link to="/category/item">
                <h1 className="nav_left">Exclusive</h1>
              </Link>
              {/* test Link!!!! */}
              <ul className="nav_center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="createAccount">Sign Up</Link>
                </li>
              </ul>
              <ul className="nav_right">
                <li>
                  <input
                    type="search"
                    placeholder="What are you looking for?"
                  />
                </li>
                <li>
                  <Link to="wishList">
                    <img src="/headfooter/Wishlist.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="basket">
                    <img src="/headfooter/Cart1.svg" alt="" />
                  </Link>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="login">
                    <img src="/headfooter/user1.svg" alt="" />
                  </Link>

                  <ul
                    className={
                      activeUser
                        ? 'nav_right_user user_active'
                        : 'nav_right_user '
                    }
                  >
                    <li>
                      <Link>
                        <img src="/headfooter/user/user.svg" alt="" />
                        <p>Manage My Account</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="basket">
                        <img src="/headfooter/user/order.svg" alt="" />
                        <p>My Order</p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/headfooter/user/cancellations.svg" alt="" />
                        <p>My Cancellations</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="wishList">
                        <img src="/headfooter/user/reviews.svg" alt="" />
                        <p>My Reviews</p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img src="/headfooter/user/Icon-logout.svg" alt="" />
                        <p>Logout</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <Suspense fallback={<div className="lazy_load">Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <div className="container">
            <ul className="footer_info">
              <li className="footer_exclusive">
                <ul>
                  <li>
                    <Link>
                      <h2>Exclusive</h2>
                    </Link>
                  </li>
                  <li>
                    <Link>Subscribe</Link>
                  </li>
                  <li>
                    <Link>Get 10% off your first order</Link>
                  </li>
                  <li>
                    <input
                      type="mail"
                      name=""
                      id=""
                      placeholder="Enter your email"
                    />
                  </li>
                </ul>
              </li>
              <li className="footer_support">
                <ul>
                  <li>
                    <Link>
                      <h2>Support</h2>
                    </Link>
                  </li>
                  <li>
                    <Link>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Link>
                  </li>
                  <li>
                    <Link to="mailto:exclusive@gmail.com">
                      exclusive@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link to="tel:+88015-88888-9999">+88015-88888-9999</Link>
                  </li>
                </ul>
              </li>
              <li className="footer_account">
                <ul>
                  <li>
                    <Link>
                      <h2>Account</h2>
                    </Link>
                  </li>
                  <li>
                    <Link>My Account</Link>
                  </li>
                  <li>
                    <Link>Login / Register</Link>
                  </li>
                  <li>
                    <Link>Cart</Link>
                  </li>
                  <li>
                    <Link>Wishlist</Link>
                  </li>
                  <li>
                    <Link>Shop</Link>
                  </li>
                </ul>
              </li>
              <li className="footer_link">
                <ul>
                  <li>
                    <Link>
                      <h2>Quick Link</h2>
                    </Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>Terms Of Use</Link>
                  </li>
                  <li>
                    <Link>FAQ</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                </ul>
              </li>
              <li className="footer_download">
                <ul>
                  <li>
                    <Link>
                      <h2>Download App</h2>
                    </Link>
                  </li>
                  <li className="footer_download-save">
                    <Link>Save $3 with App New User Only</Link>
                  </li>
                  <li className="footer_download-store">
                    <img src="/headfooter/Qrcode 1.png" alt="" />
                    <div>
                      <Link>
                        <img src="/headfooter/googlepay.png" alt="" />
                      </Link>
                      <Link>
                        <img src="/headfooter/appstore.png" alt="" />
                      </Link>
                    </div>
                  </li>
                  <li className="footer_download-social">
                    <ul>
                      <li>
                        <Link>
                          <img src="/headfooter/Icon-Facebook.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img src="/headfooter/twiter.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img src="/headfooter/instagram.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <img src="/headfooter/Icon-Linkedin.svg" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="footer_bot">
              <img src="/headfooter/c.svg" alt="" />
              <p>Copyright Rimel 2022. All right reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
