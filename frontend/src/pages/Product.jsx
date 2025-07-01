
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets/assets';

const Product = () => {

  const currency = "$";
  
  
  
  
  
  const { productId} =useParams();

  const {products}=useContext(ShopContext);
const [image,setimage]=useState("");


const [productdata,setproductdata]=useState(false);
  const [size,setsize]=useState("");

const fetchproductdata=async()=>{

products.map((item)=>{

if(item._id===productId){
  setproductdata(item);
  console.log(item);
  setimage(item.image[0]);
  return null;
}

})

}

useEffect(()=>{
  fetchproductdata();

},[productId]);


  return productdata ? (
    <>
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* product data */}
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
          {/* product image */}
          <div className='flex-1 flex-col-reverse gap-3 sm:flex-row '>
            <div className='flex sm:flex-col overflow-x-auto sm:overflow-x-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productdata.image.map((item, index) => (
                  <img src={item} key={index} className='w-[60%] sm:mb-full sm:mb-3 flex-shirink-0 flex-shrink-0 cursor-pointer ' alt="" />
                ))
              }
            </div>

            <div className='w-full sm:w-[70%]'>

              <img className='w-full h-auto ' src={image} alt="" />
            </div>
          </div>

          {/* ---------------product info------------------*/}

          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
            <div className='flex items-center gap-1 mt-2'>

              <img src={assets.star_icon} alt="" className="w" />
              <img src={assets.star_icon} alt="" className="w" />
              <img src={assets.star_icon} alt="" className="w" />
              <img src={assets.star_icon} alt="" className="w" />
              <img src={assets.star_dull_icon} alt="" className="w" />
              <p className='pl-2'>{122}</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productdata.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productdata.description}</p>

            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>


                {productdata.sizes.map((item, index) => (


                  <button onClick={() => setsize(item)} className={`border py-2 px-4 bg-gray-100${item === size ? ' border-orange-500' : "" }`} key={index}>
                    {item}
                  </button>
                ))}

              </div>
            </div>

            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add to cart</button>
            <hr className='mt-8 sm: w-4/5'></hr>

          </div>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>

            <p>100 orginal product </p>
            <p> cash on delivery availe </p>
            <p> change policy within 7 days </p>


          </div>
        </div>
      </div>

      {/* //// descripton and rewies part   */}

      <div className='mt-20'>
<div  className='flex'>
<b   className='border px-5 py-3 text-sm'>Desciption</b>
<p className='border px-5 py-3 text-sm'>Reviesw</p>
</div>

      </div>
    </>
  ) : (<div className='opacity-0'></div>);
}

export default Product










