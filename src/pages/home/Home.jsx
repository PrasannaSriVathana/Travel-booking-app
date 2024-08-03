import "./home.css"
import Navbar from "../../components/Navbar/Navbar.jsx";
import Header from "../../components/Header/Header.jsx";
import Featured from "../../components/Featured/Featured.jsx";
import PropertyList from "../../components/PropertyList/PropertyList.jsx";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties.jsx";
import Footer from  "../../components/Footer/Footer.jsx"
import MailList from "../../components/MailList/MailList.jsx";
const Home =()=>{
    return(
        <div className="home">
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">
                    Browse by property type
                </h1>
                <PropertyList/>
                <h1 className="homeTitle">
                    Home guests love
                </h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
}

export default Home;

