import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import Portfolio from './containers/pages/Portfolio';
import Services from './containers/pages/Services';
import About from './containers/pages/About';
import Blog from './containers/pages/Blog';
import Hire from './containers/pages/Hire';
import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes(){

    const location = useLocation()

    return(

        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {/* Error Display */}
                <Route path="*" element={<Error404/>} />

                {/* Home Display */}
                <Route path='/' element={<Home/>}/>
                <Route path='/Portfolio' element={<Portfolio/>}/>
                <Route path='/Services' element={<Services/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Hire' element={<Hire/>}/>
            </Routes>
        </AnimatePresence>
        
    )

}