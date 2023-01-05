import Message from './pages/Message';
import Filter from './pages/Filter';
import Map from './pages/Map';
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import PostProperties from "./pages/PostProperties";
import Navbar from "./components/Navbar";
import Download from "./pages/Download";
import Slogan from "./pages/Slogan";
import Footer from "./pages/Footer";
import './styles/App.css';

const App = () => {
  return (
      <>
        <Navbar />
        {/*<div className={`*/}
        {/*    app-vp*/}
        {/*    bg-brand px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64*/}
        {/*    flex flex-col gap-80 overflow-scroll h-screen*/}
        {/*    scroll-smooth scroll-my-60 snap snap-mandatory snap-y*/}
        {/*`}>*/}
        <div className={`
            app-vp
        `}>
          <Landing />
          <Features />
          <Map />
          <Filter/>
          <Message/>
          <PostProperties />
          <Slogan />
          <Download />
          <Footer />
        </div>
      </>
  );
};

export default App;
