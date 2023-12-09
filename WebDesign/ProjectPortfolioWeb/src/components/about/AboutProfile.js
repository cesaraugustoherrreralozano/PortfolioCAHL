import fotoGrado from '../../assets/img/Foto cesar herrera grado.jpg'
import React, { useState } from 'react';

export default function AboutProfile(){

    const [isHovered, setIsHovered] = useState(false);

    return(

        <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="fotogrado"
          src={fotoGrado}          
          className={`object-cover transition-transform duration-4000 ease-in-out ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}

        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-6xl" >Profile</h2>

        <p class="mt-4 text-gray-600 ">
        Industrial engineer with an MBA and a passion for data analytics and process optimization. 
        My MBA experience enables me to develop and enhance business environments based on project management.
        Moreover, my experience in Data Science 
        combines Python and SQL programming with statistical knowledge to generate insights for informed 
        decision-making based on datasets. My academic background and career in business management have 
        provided me eith a unique perspective to address complex challenges in dynamic business settings.

        </p>

        <a
          href="https://www.linkedin.com/in/cesar-augusto-herrera-lozano-214a629a/"
          class="mt-8 inline-block rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white transition duration-3000 ease-in-out hover:bg-blue-700 "
        target="blank"

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

        >        
          
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>

    )

}