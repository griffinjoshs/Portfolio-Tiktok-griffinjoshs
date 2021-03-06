import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/About.css";
import AboutHeader from "../components/AboutHeader/AboutHeader";
import AboutLower from "../components/AboutLower/AboutLower";
import Footer from "../components/Footer/Footer";
import ParallaxSection from '../components/ParallaxSection/ParallaxSection';
import ParallaxContent from '../components/ParallaxSection/ParallaxContent'
import Navbar from '../components/Navbar/Navbar';

function About() {
    return (
      <div>
      <Navbar/>
      <AboutHeader />
      <AboutLower/>
      <ParallaxSection
    Header = {ParallaxContent[1].Header}
    Paragraph = {ParallaxContent[1].Paragraph}
    ButtonText = {ParallaxContent[1].ButtonText}
    ButtonIcon = {ParallaxContent[1].ButtonIcon}
    />
      <Footer/>
      </div>
    );
  }
  
  export default About;