import {Link} from 'react-router-dom'
import tableau from '../../assets/img/tableau.png'
import python from '../../assets/img/python.svg'
import sql from '../../assets/img/sql.png'
import react from '../../assets/img/react.png'
import looker from '../../assets/img/looker.png'
import jupyter from '../../assets/img/jupyter.png'
import excel from '../../assets/img/excel.png'
import django from '../../assets/img/django.png'
import analytics from '../../assets/img/analutics.png'
import adds from '../../assets/img/adds.png'
import powerbi from '../../assets/img/descarga.png'
import github from '../../assets/img/github.png'


export default function ServicesList(){

    return(
        <section>

        <div class="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div class="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 class="text-3xl font-bold sm:text-4xl">Discover our services</h2>

                <p class="mt-4 text-gray-600">
                Embark on a journey of discovery with CAHL Analytics' suite of services, sparking innovation and transforming possibilities.
                </p>

                <Link to="/Hire"
                class="mt-8 inline-block rounded bg-blue-900 px-12 py-3 text-sm font-medium text-white transition duration-5000 ease-in-out hover:bg-blue-700"
                >
                Hire us
                </Link>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
                >
                <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    </svg>
                </span>

                <h2 class="mt-2 font-bold">Business Analysis</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                </a>

                <a
                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
                >
                <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    </svg>
                </span>

                <h2 class="mt-2 font-bold">Business Intelligence</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                </a>

                <a
                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
                >
                <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    </svg>
                </span>

                <h2 class="mt-2 font-bold">Data Analysis</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                </a>

                <a
                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
                >
                <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    </svg>
                </span>

                <h2 class="mt-2 font-bold">Data Science</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                </a>

                <a
                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
                >
                <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    </svg>
                </span>

                <h2 class="mt-2 font-bold">Web Design</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                </a>

                <a
                class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="/accountant"
                >
                <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <svg
                    class="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                    </svg>
                </span>

                <h2 class="mt-2 font-bold">SEO</h2>

                <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                </a>
            </div>
            </div>
        </div>
        <div class="px-4 py-24 mx-auto max-w-7xl">
        <div class="grid grid-cols-2 gap-2 text-center lg:grid-cols-6">
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={python} alt="Python Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={jupyter} alt="JupyterNotebook Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={django} alt="Django Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={sql} alt="SQL Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={excel} alt="Excel Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={powerbi} alt="Power Bi Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={adds} alt="Google adds Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={looker} alt="Google looker studio Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={analytics} alt="Google analytics Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={react} alt="React Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={github} alt="github Logo" class="block object-contain h-16" />
          </div>
          <div class="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light hover:scale-110 transition duration-3000 ease-in-out">
            <img src={tableau} alt="tableau Logo" class="block object-contain h-16" />
          </div>
        </div>
      </div>
        </section>
              
    )

}