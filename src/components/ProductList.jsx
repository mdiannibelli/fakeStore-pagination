import React, { useEffect, useState } from 'react'
import '../bulma.css'
import { Pagination } from './Pagination'

export default function ProductList() {
    const [products, setProducts] = useState([]) ;
    const [productosPorPagina, setProductosPorPagina] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    
    const productList = async () => { //renderizado de productos
        const data = await fetch('https://fakestoreapi.com/products');
        const products = await data.json() /* convertimos los datos de la API en .json y lo guardamos en la variable productos */
        setProducts(products); /* mandamos los productos al array de products */
    }
    
    useEffect(() =>{
        productList();
    },[])

    
    const totalProducts = products.length; /* cantidad de productos que tenga el array final */
    
    const lastIndex = currentPage * productosPorPagina; // currentpage(1) * productosporPagina(6) = 6
    const firstIndex = lastIndex - productosPorPagina; // 6 - 6 = 0
    return (
    
    <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
        <div className="container-products">
            {products.map(product => (
                <div className="card-product" key={product.id}>
                    <figure className='container-img'>
                        <img src={product.image} alt={product.title}/>    
                    </figure>  
                    <div className="info-product">
                        <h3>{product.title}</h3>
                        <p className='price'>$ {product.price}</p>
                        <button>Añadir al carrito</button>
                    </div>
                </div>
            )).slice(firstIndex, lastIndex)}
        </div>
        <Pagination productosPorPagina={productosPorPagina} currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts}/> {/* les pasamos las props al archivo de pagination */}
    </>
  )
}
