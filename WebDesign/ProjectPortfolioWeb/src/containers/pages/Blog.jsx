import BlogList from '../../components/blogs/BlogList.js';
import BlogsHero from '../../components/blogs/BlogsHero.js';
import Footer from '../../components/navigation/Footer.js';
import Navbar from '../../components/navigation/Navbar.js';
import Layout from "../../hocs/layouts/layout.js"

function Blog(){
    return(
        <Layout className="pt-30">
            <Navbar/>   
                <BlogsHero/>
                <BlogList/>
            <Footer/>
        </Layout>
    )
}
export default Blog