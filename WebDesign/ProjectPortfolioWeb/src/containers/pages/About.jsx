import AboutHero from '../../components/about/AboutHero.js';
import AboutProfile from '../../components/about/AboutProfile.js';
import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function About(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
                <AboutHero/>
                <AboutProfile/>
            <Footer/>
        </Layout>
    )
}
export default About
