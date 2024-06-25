import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./scss/productdetail.scss"


const ProductDetails = () => {

   const { id } = useParams()

   const [product, setProduct] = useState("")


   useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
         .then(response => response.json())
         .then(data => setProduct(data))

   }, [id])
   console.log(product);

   return (
      <div className='w-4/5 m-auto'>

         <div className="boxes-dt md:flex gap-10 sm:h-full lg:gap-20 xl:gap-28 py-14 md:py-28 lg:py-28 xl:py-11 ">


            <div className="leftBox w-11/12 lg:w-2/6 ">
               <img className='' src={product.image} alt="" />
            </div>
            <div className="rightBox sm:w-10/12 md:w-3/4">
               <h1 className='text-3xl font-black'>{product.title}</h1>
               <h2 className='text-xl py-6'> <b>Category:</b> {product.category}</h2>
               <h3 className='text-lg'> <b>Description:</b> {product.description}</h3>
               <h4 className='text-2xl font-black py-6'>{product.price} $ </h4>
               <button type='button' className='bg-indigo-500 bor hover:bg-indigo-600 hover:text-white py-5 px-9'> <b>Add to Basket</b> <i class="fa-sharp fa-solid fa-basket-shopping"></i> </button>
            </div>


         </div>

      </div>
   )
}

export default ProductDetails
