import PortHero from '../../components/cases/PortHero.js';
import PortList from '../../components/cases/PortList.js';
import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function Portfolio(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
                <PortHero/>
                <PortList/>
            <Footer/>
        </Layout>
    )
}
export default Portfolio
