import ojo_dragon_logo from '../../assets/img/ojo_dragon_logo.png'
import {Link} from "react-router-dom"

export default function BlogsHero(){
    return(

        <section className='p-32'>
            <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div class="flex flex-col w-full mb-12 text-center">
                <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50 hover:bg-blue-50 transition duration-5000 ease-in-out">
                <img src={ojo_dragon_logo} width={50} height={50} className="mx-auto"/>
                </div>
                <h1 class="max-w-3xl text-3xl font-bold pb-10 leading-none tracking-tighter text-black-900 md:text-5xl lg:text-6xl lg:max-w-6xl">
                    Blog
                </h1>

                <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center text-gray-500">At CAHL Analytics you will discover more about our areas of interest.</p>

                <Link to="/Blog" class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Read more about our interests » </Link>
                </div>
            </div>
        </section>

    )
}