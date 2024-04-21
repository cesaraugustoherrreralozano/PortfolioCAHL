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


export default function BlogList(){

    return(
        
        <section class="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
            <div class="mb-12 text-left md:text-center">
                <p class="text-lg text-gray-500">Everything comes directly from our holistic approach that propels your organization forward in the ever-evolving digital landscape.</p>
            </div>
            <div class="flex flex-col space-y-12 divide-y divide-gray-200">
                <div>
                <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                    <a href="#" class="text-black-900 hover:text-blue-700 transition duration-3000 ease-in-out">Process Documents Using Artificial Intelligence For RPA Bots</a>
                </h2>
                <p class="mb-4 text-base font-normal text-gray-600">
                    Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                    Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                </p>
                <Link to="/Services" class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Continue reading » </Link>
                </div>
                <div>
                <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                    <a href="#" class="text-black-900 hover:text-blue-700 transition duration-3000 ease-in-out">Implement Dark Mode in Your Android App</a>
                </h2>
                <p class="mb-4 text-base font-normal text-gray-600">
                    Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy
                    Dark Mode.
                </p>
                <Link to="/Services" class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Continue reading » </Link>
                </div>
                <div>
                <p class="text-blue-900 hover:text-blue-700 transition duration-3000 ease-in-out">April 16, 2020</p>
                <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                    <a href="#" class="text-black-900 hover:text-blue-700 transition duration-3000 ease-in-out">Why is Mental Health one of the Important Issues to Address?</a>
                </h2>
                <p class="mb-4 text-base font-normal text-gray-600">
                    Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in the
                    work sector but also in daily living.
                </p>
                <Link to="/Services" class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Continue reading » </Link>                </div>
                <div>
                <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                    <a href="#" class="text-black-900 hover:text-blue-700 transition duration-3000 ease-in-out">Pattern Matching In Elixir</a>
                </h2>
                <p class="mb-4 text-base font-normal text-gray-600">
                    Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of functional programming that makes it a joy to write conditional statements. If you don’t want your
                    code to be peppered with deeply nested statements or multiple variations of similar business logic, use pattern matching!
                </p>
                <Link to="/Services" class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Continue reading » </Link>                </div>
                <div>
                <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                    <a href="#" class="text-black-900 hover:text-blue-700 transition duration-3000 ease-in-out">3 things you should change during your focus group interview</a>
                </h2>
                <p class="mb-4 text-base font-normal text-gray-600">We changed three things about our feedback sessions, and it changed everything about running customer feedback sessions.</p>
                <Link to="/Services" class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Continue reading » </Link>                </div>
                <div>
                <p class="pt-12 mb-3 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
                    <a href="#" class="text-black-900 hover:text-blue-700 transition duration-3000 ease-in-out">Using Webpack with React Typescript</a>
                </h2>
                <p class="mb-4 text-base font-normal text-gray-600">
                    Ever wondered if there is a way to just tie up all your code into one single module for easy usage. If so, in this article I will show you how to bundle all your code into a single javascript
                    module that you can easily use in any other project.
                </p>
                <Link to="/Services" class="mx-auto mt-8 text-sm font-semibold text-blue-600 hover:text-neutral-600" title="read more"> Continue reading » </Link>                </div>
            </div>
            <div class="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
                <a href="#" class="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
                <a href="#" class="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
            </div>
            </section>

              
    )

}