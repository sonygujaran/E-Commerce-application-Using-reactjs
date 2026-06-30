import { useState } from 'react'
import Home from './components/reactRouter/Home'
import Contact from './components/reactRouter/Contact'
import Products from './components/reactRouter/Products'
import Users from './components/reactRouter/Users'
import Nav from './components/reactRouter/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import PageNotFound from './components/reactRouter/PageNotFound'
import Dashboard from './components/reactRouter/Dashboard'
import Profile from './components/reactRouter/Profile'
import Setting from './components/reactRouter/Setting'
import Cart from './components/reactRouter/Cart'
import useFetch from './components/reactRouter/useFetch';
import ProductItem from './components/reactRouter/ProductItem';





function App() {
   const [product,isLoading,isError]=useFetch('https://fakestoreapi.com/products')
   const [cartData,setCartData]=useState([]);
   function handleCartdata(product) {
    const exist = cartData.find((item) => item.id === product.id);

    if (exist) {
        setCartData(
            cartData.map((item) =>
                item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    } else {
        setCartData([...cartData, { ...product, qty: 1 }]);
    }
}
 


  return (
    <>

      <BrowserRouter>

        <Nav title="PRODUCT APP" items={product.length}  cartSize={cartData.length}/>

        <Routes>

          <Route path="/" element={<Home  />} />
          <Route path="/products" element={<Products  cartItem={handleCartdata} />} >
        
         
         
          </Route>
          <Route path="/products/:prodId" element={<ProductItem/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<Users />} />
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
           <Route path="/cart" element={<Cart cartData={cartData}
            setCartData={setCartData} />} />


          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App;
