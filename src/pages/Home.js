import React, { useEffect, useState } from 'react'
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
const data = require('../data/productsJson.json')
useEffect(() => {
  setProducts(data)
}, [data]);
  return (
    <div>
      <Banner />
      <Products products={products}/>
    </div>
  )
}

export default Home