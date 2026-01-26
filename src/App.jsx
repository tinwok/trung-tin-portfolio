import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Experiences from './components/Experiences';
import HireMe from './components/HireMe';
import Portfolio from './components/Portfolio';
import FeedBack from './components/FeedBack';
import SendEmail from './components/SendEmail';
import Footer from './components/Footer';
import './App.css';
import './index.css';
function App() {
    return (
        <>
            <Navbar />
            <About />
            <Services />
            <Experiences />
            <HireMe></HireMe>
            <Portfolio></Portfolio>
            <FeedBack />
            <SendEmail></SendEmail>
            <Footer></Footer>
        </>
    );
}

export default App;
