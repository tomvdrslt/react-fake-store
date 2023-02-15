import './Store.css';
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

function Store() {

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
  
    useEffect(() => {
      fetchData();
    }, [])
  
    const fetchData = async() => {
      const {data} = await axios.get('https://fakestoreapi.com/products')
  
      setProducts(data)
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  

    return (
        <>
        <div className="StoreContainer">
            {currentPosts.map(product => (
            <div className = 'ProductCard' key={product.id}>
              <button className = 'PurchaseButton'>Buy Now</button>
              <h5 className = 'ProductName'>{product.title}</h5>
              <p className = 'ProductPrice'>${product.price}</p>
              <img src={product.image}></img>
            </div>
            ))}
        </div>
        <div className="PaginationContainer">
          <Pagination 
          totalPosts={products.length} 
          postsPerPage = {postsPerPage}
          setCurrentPage = {setCurrentPage}
          />
        </div>
        </>
      );
    }

export default Store