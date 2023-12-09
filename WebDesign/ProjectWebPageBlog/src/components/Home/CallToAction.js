import {Link} from 'react-router-dom'

function CallToAction(){
    return(
        <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to ignite your growth?</span>
          <span className="block text-blue-900 hover:text-blue-700">Start with us today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="/Hire"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
            >
              Hire us!
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link to="/Services"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-blue-100"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CallToAction