'use client'

import Child from '@/component/Child';
import React, { useEffect, useState } from 'react'

export default function Home() {
    const [products, setProducts] = useState([]);
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [searchProducts, setSearchProducts] = useState('')

    console.log(products)

    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()

        setProducts(data)
    }


    useEffect(() => {
            fetchProducts()
    }, [])


    const searchContent = products.filter((item) => {
        return item.title.toLowerCase().includes(searchProducts.toLowerCase())
    })

    const openModel = (product) => {
        setSelectedProduct(product);
        setIsModelOpen(true)
    }

    const closeModel = () => {
        setIsModelOpen(false)
    }
    return (
        <>
            <div className='my-10'>
                <h1 className='text-center text-2xl my-10'>Welcome Product Listing</h1>

                <div className='flex items-center justify-center my-10'>
                    <input
                        className='border border-slate-500 w-64 py-2 px-2'
                        type="text"
                        placeholder='Search Product Here by Title...'
                        value={searchProducts}
                        onChange={(e) => setSearchProducts(e.target.value)}
                    />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10'>
                    {
                        searchContent.length > 0 ?

                            (
                                searchContent.map((items) => (
                                    <div
                                        key={items.id}
                                        className='flex flex-col items-center justify-center w-full h-96 border p-4 cursor-pointer shadow-sm shadow-orange-400 hover:shadow-lg hover:shadow-orange-500/40 transition-all'
                                        onClick={() => openModel(items)}
                                    >
                                        <div className='my-2'>
                                            <p className='text-start font-normal'>{`Title : ${items.title}`}</p>
                                        </div>
                                        <div
                                            className='flex justify-center items-center w-full h-full px-4'>
                                            <img
                                                src={items.image}
                                                alt={items.title}
                                                className='w-24 sm:w-32 md:w-40 object-cover object-fit'
                                            />
                                        </div>
                                    </div>
                                ))
                            ) :
                            (
                                <p>no product found</p>
                            )

                    }
                </div>

                {
                    isModelOpen && <Child selectedProduct={selectedProduct} closeModel={closeModel} />
                }

            </div>
        </>
    )
}