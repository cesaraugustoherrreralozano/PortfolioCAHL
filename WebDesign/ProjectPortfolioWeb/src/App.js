import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import store from './store';
import {Provider} from 'react-redux'
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import Portfolio from './containers/pages/Portfolio';
import Services from './containers/pages/Services';
import About from './containers/pages/About';
import Blog from './containers/pages/Blog';
import Hire from './containers/pages/Hire';
import {Helmet, HelmetProvider} from 'react-helmet-async'
import AnimatedRoutes from './AnimatedRoutes';
 


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>CAHL | Analytics</title>
        <meta name='description' content='We transform data into valuable insights to enhance your decision-making. Discover how CAHL Analytics can drive the success of your business.' />
        <meta name='keywords' content='data analysis, data transformation, insights, decision-making,business analytics, data analytics, data science, business intelligence, boosting business success, web design, CAHL analytics'/>
        <meta name='robots' content='all'/>
        <meta name='author' content='CAHL analytics'/>
        <link rel='canonical'  href=''/>

        {/* Social Media Tags */}
        <meta property="og:title" content='CAHL | Analytics' />
        <meta property="og:description" content='We transform data into valuable insights to enhance your decision-making. Discover how CAHL Analytics can drive the success of your business.' />
        <meta property="og:url" content="https://www.murkiva.com/" />
        <meta property="og:image" content='https://bafkreienke2lhx43yekxqhazlhsa7x3yo2rtrapnuk3hzofbmuqnx27sea.ipfs.w3s.link' />

        <meta name="twitter:title" content='CAHL | Analytics' />
        <meta
            name="twitter:description"
            content='We transform data into valuable insights to enhance your decision-making. Discover how CAHL Analytics can drive the success of your business.'
        />
        <meta name="twitter:image" content='https://bafkreienke2lhx43yekxqhazlhsa7x3yo2rtrapnuk3hzofbmuqnx27sea.ipfs.w3s.link' />
        <meta name="twitter:card" content="summary_large_image" />


      </Helmet>
        <Provider store={store}>
            <Router>
               <AnimatedRoutes/>
            </Router>
        </Provider>
      
    </HelmetProvider>

    
  );
}

export default App;
