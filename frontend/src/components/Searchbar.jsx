import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets/assets';

function SearchBar() {
  const {
    search,
    setSearch,
    showSearch,
    setShowSearch,
    products // ✅ Now correctly using from context
  } = useContext(ShopContext);

  const [visible, setVisible] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.toLowerCase().includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  // 🔍 Search Logic
  useEffect(() => {
    if (search.trim() === '') {
      setFilteredItems([]);
    } else {
      const results = products.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(results);
    }
  }, [search, products]);

  if (!showSearch || !visible) return null;

  return (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search items..."
          className='flex-1 outline-none p-2'
        />
        <img className='w-4 ml-2' src={assets.search_icon} alt='search icon' />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='inline w-3 cursor-pointer ml-2'
        src={assets.cross_icon}
        alt='close icon'
      />

      {/* 🔍 Render search results */}
      {filteredItems.length > 0 && (
        <div className='bg-white shadow p-3 text-left max-h-64 overflow-y-auto'>
          {filteredItems.map(item => (
            <div key={item.id} className='py-1 border-b'>
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
