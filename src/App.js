import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import ContactUs from './Components/ContactUs';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import './main.js';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <ContactUs/>
      <Footer/>

      

    </div>
  );
}

export default App;
