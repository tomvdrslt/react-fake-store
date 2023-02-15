import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    const {data} = await axios.get('https://fakestoreapi.com/products')

    setProducts(data)
  }



  return (
    <div className="App">
    <h1 >Store Page</h1>
    <div className="StoreContainer">
      {products.map(product => (
        <div className = 'post-card'key={product.id}>
        <h5>{product.title}</h5>
        <p>{product.price}</p>
        <img src={product.image}></img>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
