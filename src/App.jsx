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
        <Route path='/:itemName' element={<Item/>}/>
        {/* need to change category item */}
        <Route path='*' exact element={<NotFound/>}/>
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
