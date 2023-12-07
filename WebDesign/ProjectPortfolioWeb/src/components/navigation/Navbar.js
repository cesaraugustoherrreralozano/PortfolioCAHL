import {connect} from "react-redux"
import {useState, Fragment} from "react"
import {NavLink, Link} from "react-router-dom"
import logo_cahl from '../../assets/img/CAHL_LOGO.png'
import CircleLoader from 'react-spinners/CircleLoader'
import menuIcon from '../../assets/img/menu-regular-24.png'
import xIcon from '../../assets/img/x-regular-24.png'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import ojoDragon from '../../assets/img/ojo_dragon_logo.png'





function Navbar(){
    const [loading, setLoading] = useState(true)

    const [open,setOpen] = useState(false)

    const solutions = [
        {
          name: 'Portfolio',
          description: 'Discover our projects',
          href: '/Portfolio',
          icon: IconOne,
        },
        {
          name: 'Services',
          description: 'Enhance your business',
          href: '/Services',
          icon: IconOne,
        },
        {
          name: 'About',
          description: 'Know about us',
          href: '/About',
          icon: IconOne,
        },
        {
            name: 'Blog',
            description: 'Keep track of our interests',
            href: '/Blog',
            icon: IconOne,
          },
          {
            name: 'Hire',
            description: 'Ignite your growth',
            href: '/Hire',
            icon: IconOne,
          }
      ]

    window.onscroll = function() {scrollFunction()}
    function scrollFunction(){
        if (document.getElementById('navbar')){
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white')
            }
        }
    }

    return(
        <nav id='navbar' className = "w-full z-40 transition duration-5000 ease-in-out fixed"> 
            <div className="px-4 sm:px-6">
                <div className="-ml-4 -mt-2 hidden md:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-10 px-2">
                    <Link to="/" className="ml-4 mt-2">
                    <img src={logo_cahl} width={150} height={90} className=""/>
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/Portfolio' className="text-lg inline-flex font-medium leading-6 mx-5 text-gray-800 border-b-2 border-white hover:border-blue-900 transition duration-3000 ease-in-out">Portfolio</NavLink>
                    <NavLink to='/Services' className="text-lg inline-flex font-medium leading-6 mx-5 text-gray-800 border-b-2 border-white hover:border-blue-900 transition duration-3000 ease-in-out">Services</NavLink>
                    <NavLink to='/About' className="text-lg inline-flex font-medium leading-6 mx-5 text-gray-800 border-b-2 border-white hover:border-blue-900 transition duration-3000 ease-in-out">About</NavLink>
                    <NavLink to='/Blog' className="text-lg inline-flex font-medium leading-6 mx-5 text-gray-800 border-b-2 border-white hover:border-blue-900 transition duration-3000 ease-in-out">Blog</NavLink>
                    <Link to='/Hire'
                        type="button"
                        className="inline-flex ml-5 items-center rounded-md border border-transparent bg-blue-900 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-3000 ease-in-out"
                    >
                        Hire us
                        <CircleLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={15} color="#ffffff" aria-hidden="true" />
                    </Link>
                    </div>
                </div>
                <div className="-ml-4 -mt-2 md:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-10 px-2">
                    <Link to="/" className="ml-4 mt-2">
                    <img src={logo_cahl} width={150} height={90} className=""/>
                    </Link>

                    <Popover className="relative">
                        {({ open }) => (
                        <>
                            <Popover.Button
                            className={`
                                ${open ? 'text-white' : 'text-white/90'}
                                group inline-flex items-center rounded-md bg-blue-900 px-3 py-2 text-base font-medium hover:text-white bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                            >
                            <span>☰</span>
                            <ChevronDownIcon
                                className={`${open ? 'text-blue-300' : 'text-orange-300/70'}
                                ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                                aria-hidden="true"
                            />
                            </Popover.Button>
                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                        <item.icon aria-hidden="true" />
                                        </div>
                                        <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {item.description}
                                        </p>
                                        </div>
                                    </a>
                                    ))}
                                </div>
                                <div className="bg-gray-50 p-4">
                                    <a
                                    href="##"
                                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                    >
                                    <span className="flex items-center">
                                        <span className="text-sm font-medium text-gray-900">
                                        CAHL
                                        </span>
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        Analytics
                                    </span>
                                    </a>
                                </div>
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>
                    </div>


                    {/*<button className=""                 
                    >
                        {

                            open ?

                            <img src={menuIcon}  onClick={()=>{setOpen(false)}} className=""></img>
                            :
                            <img src={xIcon} onClick={()=>{setOpen(true)}} className=""></img>

                        }

                    </button>*/}
                    </div>

        </nav>
    )
}

const mapStateToProps = state=>({

})

export default connect(mapStateToProps,{

    
}) (Navbar)


function IconOne() {
    return (
      <img src={ojoDragon}></img>
    )
  }
  
  