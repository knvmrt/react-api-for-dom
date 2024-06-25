import React, { useContext, useEffect, useState } from 'react';
import "./productlist.scss"
import { Link } from "react-router-dom";
import Example from "./pages/Loading"
import ThemeContext from './context/ThemeContext';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const { theme } = useContext(ThemeContext)

  return (
    <main className={`${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className='products flex flex-wrap w-4/5 m-auto'>
        {
          products.length !== 0 ? (
            products.map((product) => (
              <div className='sm:w-full md:w-2/4 lg:w-2/6 xl:w-1/5 api-box'>
                <div className='relative ' key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <div className='bg-cover bg-center h-full'>
                      <img className='w-full h-full' src={product.image} alt="" />
                    </div>
                  </Link>
                  <h1 className='text-lg'>{product.title}</h1>
                  <div className='h-7'>
                    <h2 className='text-lg absolute right-5'>{product.price}</h2>
                  </div>
                </div>
              </div>
            ))

          ) : (
            <div className="flex m-auto">
              <Example />
            </div>
          )
        }
      </div>
    </main>
  );
}

export default ProductList;