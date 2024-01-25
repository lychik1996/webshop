import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { lazy } from 'react';
import HeadFooter from './HeadFooter';


const Home = lazy(() => import('./components/Home/Home'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const About = lazy(() => import('./components/About/About'));
const Login = lazy(() => import('./components/LoginCreate/Login'));
const CreateAccount = lazy(() =>
  import('./components/LoginCreate/CreateAccount')
);
const WishList = lazy(() => import('./components/WishList/WishList'));
const Basket = lazy(() => import('./components/Basket/Basket'));

const Account =lazy(()=>import('./components/Account/Account'));
const Profile = lazy(()=>import('./components/Account/Profile/Profile'));
const AdressBook =lazy(()=>import('./components/Account/AddresBook/AdressBook'));
const PaymentOptions =lazy(()=>import('./components/Account/PaymentOptions/PaymentOptions'));
const MyReturn = lazy(()=>import('./components/Account/MyReturn/MyReturn'));
const MyCancellation = lazy(()=>import('./components/Account/MyCancellation/MyCancellation'));

const Item = lazy(()=>import('./components/Item/Item'))
const NotFound =lazy(()=>import('./components/NotFound/NotFound'));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeadFooter />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/basket" element={<Basket />} />
        <Route path='/account' element={<Account/>}>
          <Route path='/account/profile' element={<Profile/>}/>
          <Route path='/account/adressBook' element={<AdressBook/>}/>
          <Route path='/account/paymentOptions' element={<PaymentOptions/>}/>
          <Route path='/account/myReturn' element={<MyReturn/>}/>
          <Route path='/account/myCancellation' element={<MyCancellation/>}/>
        </Route>
        <Route path='/:itemName' element={<Item/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/notfoundpage' element={<NotFound/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
