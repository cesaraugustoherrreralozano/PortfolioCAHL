import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function Hire(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
            Hire
            <Footer/>
        </Layout>
    )
}
export default Hire
