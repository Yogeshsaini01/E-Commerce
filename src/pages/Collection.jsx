/* eslint-disable no-unused-vars */

import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false)
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, SetsubCategory] = useState([]);


  const toggleCategory = (e)=>{
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const togglesubCategory = (e) =>{
    if (subCategory.includes(e.target.value)) {
      SetsubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      SetsubCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    setFilterProduct(products)
  }, [])

  useEffect(() => {
    console.log(subCategory);
  }, [subCategory])
  
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter option */}

      <div className='min-w-60'>
        <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
          <img className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''} `} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' value={'Men'} onChange={toggleCategory} type="checkbox" />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' value={'Women'} onChange={toggleCategory} type="checkbox" />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' value={'Kids'} onChange={toggleCategory} type="checkbox" />Kids
            </p>
          </div>
        </div>

        {/* sub categories */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' value={'Topwear'} type="checkbox" onChange={togglesubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' value={'Bottomwear'} type="checkbox" onChange={togglesubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' value={'Winterwear'} type="checkbox" onChange={togglesubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>


      {/* right side */}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'} />
          {/* product sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relavelnt</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map product */}
        <div className='grid grid-cols-2 md:*:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item, index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
