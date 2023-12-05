import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function About(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
            About
            <Footer/>
        </Layout>
    )
}
export default About
