import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import ServHero from '../../components/servicesP/ServHero.js';
import ServicesList from '../../components/servicesP/ServicesList.js';
import Layout from "../../hocs/layouts/layout.js"

function Services(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
                <ServHero/>
                <ServicesList/>
            <Footer/>
        </Layout>
    )
}
export default Services
