
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import HeadFooter from "./HeadFooter"


function App() {
 const router = createBrowserRouter(createRoutesFromElements(
  <Route  path="/" element={<HeadFooter/>}>

  </Route>
 ))

  return (
    <>  
    <RouterProvider router={router}/>
    </>
  )
}

export default App
