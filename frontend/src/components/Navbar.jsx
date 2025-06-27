import React, { useState } from 'react';
import { assets } from "../assets/assets/assets";
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
const {setShowSearch}=useContext(ShopContext)



  const [visible,setVisible]=useState(false);
  return (
    <div className='flex items-center py-5 px-6 font-medium'>
     
    
      {/* Left: Logo */}
     <Link to='/'> <img src={assets.logo} className='w-40' alt="Logo" /></Link>

      {/* Right: Navigation */}
      <ul className='hidden sm:flex gap-10 text-sm text-gray-700 ml-auto mr-50'> {/* ADDED ml-auto here */}
        <li>
          <NavLink to="/Home" className="flex flex-col items-center gap-1">
            <p className='hover:text-amber-600'>Home</p>
          </NavLink>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p className='hover:text-amber-600'>About</p>
          </NavLink>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </li>
        <li>
          <NavLink to="/product" className="flex flex-col items-center gap-1">
            <p className='hover:text-amber-600'>Product</p>
          </NavLink>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </li>
        <li>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p className='hover:text-amber-600'>Collection</p>
          </NavLink>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </li>
      </ul>


<div className='flex items-center gap-6'>


  
  <img onClick ={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="search"/>

  <div className='group relative'>
    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile"/>
    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
      <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
        <p className='cursor-pointer hover:text-black'>my profile</p>
        <p className='cursor-pointer hover:text-black'>order</p>
        <p className='cursor-pointer hover:text-black'>logout</p>
      </div>
    </div>
  </div>

  <Link to='/cart' className='relative'>
    <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart"/>
    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>0</p>
  </Link>

  <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu"/>
</div>

<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>

<div className='flex flex-col text-gray-600'>

<div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
<img className='h-4 rotate-180' src={assets.dropdown_icon} alt=""/>

<p>back</p>

</div>

<NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border " to="/">Home</NavLink>

<NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border " to="/">Home</NavLink>
<NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border " to="/">Home</NavLink>

<NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border " to="/">Home</NavLink>


</div>



</div>

    </div>
  );
};

export default Navbar;
