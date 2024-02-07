import React from 'react'
import Pagination from './Pagination'
import ProductList from './ProductList';
import '../index.css'
export default function Home() {
  return (
    <div className='div-container'>
        <h1 className='title'>Fake Store</h1>

        <ProductList/>
    </div>
  )
}
