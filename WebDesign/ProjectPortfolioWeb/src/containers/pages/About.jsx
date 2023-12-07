import AboutHero from '../../components/about/AboutHero.js';
import AboutProfile from '../../components/about/AboutProfile.js';
import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"
import {Helmet} from 'react-helmet-async'

function About(){
    return(
        <Layout className="pt-30">
            <Helmet>
        <title>CAHL | About</title>
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
                <AboutHero/>
                <AboutProfile/>
            <Footer/>
        </Layout>
    )
}
export default About
