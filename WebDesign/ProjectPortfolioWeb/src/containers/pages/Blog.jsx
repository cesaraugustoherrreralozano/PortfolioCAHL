import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function Blog(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
            Blog
            <Footer/>
        </Layout>
    )
}
export default Blog