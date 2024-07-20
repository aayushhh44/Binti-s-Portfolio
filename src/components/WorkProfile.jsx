import React, { useState } from "react";
import datas from '../ProjectJsons/AllCategories.json'


const WorkProfile = () => {
 
    const[selectedCategory, setSelectedCategory] = useState("all");

    const categories =[
      'all',
      'thumbnail',
      'socialmedia',
      'logo',
      'youtubevideo',
    ];

    const filteredProject = selectedCategory === 'all' ? datas : datas.filter(project => project.category === selectedCategory);

    // const filteredProject = selectedCategory === 'all' ? datas: datas.filter(projects => projects.category ===selectedCategory)

  
  return (
    <div>
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {/* <button
          type="button"
          class=" border border-black  focus:ring-rounded-sm text-base focus:bg-gray-300 font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-gray-500"
        >
          All categories
        </button>   
        <button
          type="button"
          class=" border border-black  focus:ring-rounded-sm focus:bg-gray-300 text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-gray-500"
        >
          Graphic Designing
        </button> 
        <button
          type="button"
          class=" border border-black  focus:ring-rounded-sm focus:bg-gray-300 text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-gray-500"
        >
          Web Designs 
        </button> 
        <button
          type="button"
          class=" border border-black  focus:ring-rounded-sm focus:bg-gray-300 text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-gray-500"
        >
          Video Editing
        </button> 
        <button
          type="button"
          class=" border border-black focus:ring-rounded-sm focus:bg-gray-300 text-base font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-gray-500"
        >
          Gaming
        </button>  */}

{categories.map(category => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`border border-black focus:ring-rounded-sm text-base focus:bg-gray-300 font-medium px-5 py-2.5 text-center me-3 mb-3 hover:text-gray-500 ${
              selectedCategory === category ? 'bg-gray-300' : 'bg-white'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>


      <div className="grid p-6 grid-cols-2 md:grid-cols-3 gap-4">

      {filteredProject.map((project, index) => (
          <div key={index}>
            <img
              className="h-44 w-full rounded-lg sm:w-full sm:h-96"
              src={project.projectImage}
              alt={project.projectDescription}
            />
            
          </div>
        ))}

{/*  */}

        {/* <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default WorkProfile;
