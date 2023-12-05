import BlogList from '../../components/Home/BlogList.js';
import CallToAction from '../../components/Home/CallToAction.js';
import Header from '../../components/Home/Header.js';
import PortSection from '../../components/Home/PortSection.js';
import ServFeatures from '../../components/Home/ServFeatures.js';
import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout";

function Home(){
    return(
        <Layout>
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
