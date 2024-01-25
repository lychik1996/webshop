import { Suspense } from 'react';
import './account.scss';
import {Link, NavLink, Outlet } from 'react-router-dom';
export default function Account() {
  return (
    <>
      <div className="container">
        <div className="account">
          <div className="account_map">
            <div className="account_map_left">
              <Link to="/" className="account_map-home">
                Home
              </Link>
              <span>/</span>
              <Link to="/account/profile" className="account_map-basket">
                Account
              </Link>
            </div>
            <p className="account_name">
              Welcome! <span>Mr Robbins</span>
            </p>
          </div>
          <div className="account_main">
            <div className="account_navigate">
              <p className="account_navigate_p">Manage My Account</p>
              <div className="account_navigate_block">
                <NavLink to='/account/profile'>My Profile</NavLink>
                <NavLink to='/account/adressBook'>Address Book</NavLink>
                <NavLink to='/account/paymentOptions'>My Payment Options</NavLink>
              </div>
              <p className="account_navigate_p">My Orders</p>
              <div className="account_navigate_block">
                <NavLink to='/account/myReturn'>My Returns</NavLink>
                <NavLink to='/account/myCancellation'>My Cancellations</NavLink>
              </div>
              <p className="account_navigate_p">My WishList</p>
            </div>
            <div className="account_info">
              <Suspense fallback={<div>...Loading</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
