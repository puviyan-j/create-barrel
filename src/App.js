
import './App.css';
import { Header } from './header';
import { Home } from './home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { View } from './view';
import { useState } from 'react';
import { Fullview } from './fullview';
import { Cart } from './cart';
const cata = [
  {
    id: 1,
    image: "https://cb.scene7.com/is/image/Crate/BattenODKtchnIslandSOSSS23/$web_pdp_main_carousel_med$/230113142738/batten-outdoor-kitchen-island-set.jpg",
    title: "Batten Teak Outdoor Kitchen Island",
    price: 24.99,
    category: "Outdoor Kitchen Furniture"
  },
  {
    id: 2,
    image: "https://cb.scene7.com/is/image/Crate/BattenDblODKtchCabSOSSS23/$web_pdp_main_carousel_med$/230113142714/batten-double-outdoor-kitchen-cabinet-set.jpg",
    title: "Batten Double Teak Outdoor Kitchen Cabinet Set",
    price: 27.99,
    category: "Outdoor Kitchen Furniture"
  },
  {
    id: 3,
    image: "https://cb.scene7.com/is/image/Crate/HipRedWine19ozSSS21/$web_pdp_main_carousel_med$/210608142425/hip-19-oz-red-wine-glass.jpg",
    title: "Hip 19-Oz. Red Wine Glass",
    price: 7.95,
    category: "Drinkware"||"Bar Tools",
  },
  {
    id: 4,
    image: "https://cb.scene7.com/is/image/Crate/TourTallRedWine23ozSSS22/$web_plp_card$/220106113039/tour-tall-red-wine-23oz.jpg",
    title: "Schott Zwiesel Tour Red Wine Glass 18-Oz.",
    price:12.76,
    category: "Drinkware"||"Bar Tools",
  },
  {
    id: 5,
    image: "https://cb.scene7.com/is/image/Crate/TourStemlessWhtWine10ozSSS22/$web_plp_card$/220113093348/tour-stemless-white-wine-10oz.jpg",
    title: "Schott Zwiesel Tour Stemless White Wine Glass 10-Oz.",
    price:10.36,
    category: "Drinkware"||"Bar Tools",
  },

]



function App() {

  const [prodect, setProdect] = useState([]);

  const kitchen = () => {
    setProdect(cata.filter((cata) => cata.category === "Outdoor Kitchen Furniture"));
  }

  const drinkware = () => {
    setProdect(cata.filter((cata) => cata.category ==="Drinkware"));
  }

  const [data,setData]=useState([{}]);
const prodectview =(p)=>{
setData(p)

}
const[cart,setCart]=useState([])

const addcart=(data)=>{
setCart([...cart,data])
}
const length=cart.length;


  return (
    <BrowserRouter>
      <Header length={length}/>
      <Routes>
        <Route path='/' element={<Home 
        kitchen={kitchen}
        drinkware={drinkware}

        />}></Route>
        <Route path='/h' element={<View prodect={prodect} prodectview={prodectview} />}></Route>
        <Route path='/h1' element={<Fullview data={data} addcart={addcart}/>}></Route>
        <Route path='/c' element={<Cart cart={cart}/>}></Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
