import React from 'react'
import Navbar from './Navbar'
import HireMe from './HireMe'
import Work from './Work'

const Home = () => {
  return (
  
<div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
            <div class="absolute flex justify-center items-center inset-0 bg-blue-500 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <span className='text-white'>Something Something</span>
            </div>

        </div>
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
            <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>
        </div>
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
            <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>


        </div>
    </div>
    <div class="grid gap-4">
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
            <div class="absolute flex justify-center items-center inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>

        </div>
        <div className='relative group cursor-pointer'>
        
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
            <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>

        </div>
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
            <div class="absolute inset-0 bg-black flex justify-center items-center bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>

        </div>
    </div>
    <div class="grid gap-4">
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
            <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>

        </div>
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
            <div class="absolute inset-0 bg-black flex justify-center items-center bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>

        </div>
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
            <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>
        </div>
    </div>
    <div class="grid gap-4">
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
            <div class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>

        </div>
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
            <div class="absolute inset-0 bg-black flex justify-center items-center bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>

        </div>
        <div className='relative group cursor-pointer'>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
            <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className='text-white'>Something Something</span>
            </div>
        </div>
    </div>
</div>
<HireMe />
<Work />
</div>

  )
}

export default Home
