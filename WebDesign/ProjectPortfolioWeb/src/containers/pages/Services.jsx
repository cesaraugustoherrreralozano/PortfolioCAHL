import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function Services(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
            Services
            <Footer/>
        </Layout>
    )
}
export default Services
