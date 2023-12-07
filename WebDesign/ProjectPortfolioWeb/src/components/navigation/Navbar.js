import {connect} from "react-redux"
import {useState} from "react"
import {NavLink, Link} from "react-router-dom"
import logo_cahl from '../../assets/img/CAHL_LOGO.png'
import CircleLoader from 'react-spinners/CircleLoader'



function Navbar(){
    const [loading, setLoading] = useState(true)

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
                <div className="-ml-4 -mt-2  hidden md:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-10 px-2">
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
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <button>
                            <i className='bx bx-menu text-4xl'></i>
                    </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state=>({

})

export default connect(mapStateToProps,{

    
}) (Navbar)