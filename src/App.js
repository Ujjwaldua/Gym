import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Text from "./Components/Text"
import About from "./Components/About"
import Class from "./Components/Class"
import Schdule from './Components/Schdule';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Modal from './Components/Modal';

function App() {
  return (
    <>
    <Navbar></Navbar>
   <Home> </Home>
   <Text></Text>
   <About></About>
   <Class></Class>
   <Schdule></Schdule>
   <Contact></Contact>
   <Footer></Footer>
   <Modal></Modal>
    </>
   
  );
}

export default App;
