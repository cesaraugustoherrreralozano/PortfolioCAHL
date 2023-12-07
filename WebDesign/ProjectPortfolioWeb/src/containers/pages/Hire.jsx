import HireUs from '../../components/Hire/Hire.js';
import HireMap from '../../components/Hire/HireMap.js';
import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function Hire(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
                <HireUs/>
                <HireMap/>
            <Footer/>
        </Layout>
    )
}
export default Hire
