import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [availableSubcategories, setAvailableSubcategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  // Update available subcategories based on selected categories
  useEffect(() => {
    if (category.length === 0) {
      setAvailableSubcategories([]);
      return;
    }

    const subSet = new Set();
    products.forEach(p => {
      if (category.includes(p.category?.toLowerCase())) {
        if (p.subCategory) subSet.add(p.subCategory.toLowerCase());
      }
    });
    setAvailableSubcategories([...subSet]);
  }, [category, products]);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter(p =>
        category.includes(p.category?.toLowerCase())
      );
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter(p =>
        subCategory.includes(p.subCategory?.toLowerCase())
      );
    }

    // Apply sorting
    if (sortOption === 'low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-low') {
      filtered.sort((a, b) => b.price - a.price);
    }
    // 'relevant' keeps the original order (assumed to be default order in products)

    setFilteredProducts(filtered);
  }, [products, category, subCategory, sortOption]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title className="text-color bold" text1={'ALL'} text2={'COLLECTIONS'} />
            <select
              className="border-2 border-gray-300 text-sm px-2"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Filters Sidebar */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            Filter
            <img
              className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
              src={assets.dropdown_icon}
              alt="dropdown"
            />
          </p>

          {showFilter && (
            <>
              {/* Categories Filter */}
              <div className="border border-gray-300 pl-5 py-3 mt-6">
                <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                  {['Men', 'Women', 'Kids'].map((cat) => (
                    <label key={cat} className="flex gap-2">
                      <input
                        className="w-3"
                        type="checkbox"
                        value={cat.toLowerCase()}
                        onChange={toggleCategory}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>

              {/* Subcategories Filter */}
              {availableSubcategories.length > 0 && (
                <div className="border border-gray-300 pl-5 py-3 mt-6">
                  <p className="mb-3 text-sm font-medium">SUBCATEGORIES</p>
                  <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    {availableSubcategories.map((sub) => (
                      <label key={sub} className="flex gap-2 capitalize">
                        <input
                          className="w-3"
                          type="checkbox"
                          value={sub}
                          onChange={toggleSubCategory}
                        />
                        {sub}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
