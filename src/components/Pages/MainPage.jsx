import About from '../About';
import Services from '../Services';
import Experiences from '../Experiences';
import HireMe from '../HireMe';
import Portfolio from '../Portfolio';
import FeedBack from '../FeedBack';
import SendEmail from '../SendEmail';
import Footer from '../Footer';
import BlogPosts from '../BlogsPost';
function Main() {
    return (
        <div>
            <About />
            <Services />
            <Experiences />
            <HireMe />
            <Portfolio />
            <FeedBack />
            <SendEmail></SendEmail>
            <BlogPosts></BlogPosts>
            <Footer></Footer>
        </div>
    );
}

export default Main;
