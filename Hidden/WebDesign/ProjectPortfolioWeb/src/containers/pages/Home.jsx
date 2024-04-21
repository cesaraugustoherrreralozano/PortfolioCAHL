import BlogList from '../../components/Home/BlogList.js';
import CallToAction from '../../components/Home/CallToAction.js';
import Header from '../../components/Home/Header.js';
import PortSection from '../../components/Home/PortSection.js';
import ServFeatures from '../../components/Home/ServFeatures.js';
import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout";
import {Helmet} from 'react-helmet-async'

function Home(){
    return(
        <Layout>
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
            <Navbar/>
                <div className='pt-20'>
                    <Header/>
                    <ServFeatures/>
                    <PortSection/>
                    <BlogList/>
                    <CallToAction/>
                </div>
            <Footer/>
        </Layout>
    )
}
export default Home
