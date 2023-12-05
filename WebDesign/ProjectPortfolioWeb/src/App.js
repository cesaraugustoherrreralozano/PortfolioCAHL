import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import store from './store';
import {Provider} from 'react-redux'
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import Portfolio from './containers/pages/Portfolio';
import Services from './containers/pages/Services';
import About from './containers/pages/About';
import Blog from './containers/pages/Blog';
import Hire from './containers/pages/Hire';
 


function App() {
  return (
    <Provider store={store}>
        <Router>
      <Routes>
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
    </Router>
    </Provider>
    
  );
}

export default App;
