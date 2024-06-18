import Header from "../components/header/Header";
import Bg from "../components/Bg";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import IconBlock from "../components/IconBlock";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import MissionContainer from "../components/MissionContainer";
import PopularProductsGrid from "../components/PopularProductsGrid";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./Homepage.css";
import Footer from "../components/footer/Footer";

const Homepage = () => {
    return (
        <>
            <Header/>
            <div className="homepage">
                <Bg/>
                <FrameComponent6/>
                <FrameComponent4/>
                <IconBlock/>
                <FrameComponent3/>
                <FrameComponent2/>
                <section className="title">
                    <MissionContainer/>
                    <PopularProductsGrid/>
                </section>
            </div>
            <Footer/>
        </>

    );
};

export default Homepage;
