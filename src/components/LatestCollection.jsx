/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { useEffect } from 'react'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    
    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[])
    

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'Latest'} text2={'Collection'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptas dicta aspernatur ex, quo quae beatae deserunt corrupti doloribus amet harum vel rerum!
                </p>
            </div>

             {/* rendering Product. */}

             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        latestProducts.map((item, index)=> (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                        ))
                    }
             </div>


        </div>
    )
}

export default LatestCollection