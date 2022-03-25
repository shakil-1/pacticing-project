import './App.css';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './Card/Card';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const handlAddtoCart = (gun) => {
    const newCart = [gun];
   setCart(newCart);
  }

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
    console.log(guns);

  }, [])
  return (
    <div className="App">
      <Navbar />
      {
        cart.map(item => (<h1 key={item.id}> {item.name}</h1>))
      }
   <div className='card-container'>
   {
        guns.map((gun) => (<Card key={gun.id} gunData={gun} handlAddtoCart={handlAddtoCart} />))
      }
   </div>
    </div>
  );
}

export default App;
