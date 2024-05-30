import React from 'react'


const Child = ({selectedProduct, closeModel}) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
        <div className='bg-white p-3 md:p-8 lg:p-10 w-2/3 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg'>

            <p className=' text-lg md:text-2xl my-3'>{`Title : ${selectedProduct.title}`}</p>

            <p className=' text-base md:text-lg lg:text-xl my-1'>{`Category : ${selectedProduct.category}`}</p>
            <p className='my-2'>{`Description : ${selectedProduct.description}`}</p>

            <p className='py-2 w-36 px-3 md:py-4 md:my-2 border border-orange-600'>{`Price : ${selectedProduct.price}`}</p>
            <div className='mt-5'>
                <button
                    className='py-3 px-10 bg-orange-500 text-white border rounded-lg hover:bg-white transition-all hover:text-black'
                    onClick={closeModel}>
                    Close
                </button>
            </div>
        </div>
    </div>
    )
}

export default Child;
