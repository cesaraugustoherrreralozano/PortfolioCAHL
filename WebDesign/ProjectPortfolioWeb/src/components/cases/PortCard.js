import {Link} from 'react-router-dom'
import React, { useState } from 'react';

export default function PortCard({data, index}){

    const [isHovered, setIsHovered] = useState(false);

    return(

        <Link to="/Portfolio/" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
        className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img id={data.id}
          className={`lg:h-60 md:h-36 w-full object-cover transition-transform duration-4000 ease-in-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          src={data.imageUrl}
          alt=""
        />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-grey-100">
              
                {data.category.name}
              
            </p>
            <a href={data.href} className="mt-2 block">
              <p id={index}
                className={`lg:text-3xl pb-6 text-2xl font-semibold transition duration-3000 ease-in-out ${
                    isHovered ? 'text-blue-700' : 'text-gray-900'
                }`}>{data.title}</p>
              <p className="mt-3 text-md space-y-2 leading-6 text-gray-500">{data.description}</p>
            </a>
          </div>
            </div>
          </Link>

    )
}