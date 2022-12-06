import Message from './pages/Message';
import Filter from './pages/Filter';
import Map from './pages/Map';
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import PostProperties from "./pages/PostProperties";
import Navbar from "./components/Navbar";
import './styles/App.css';

const App = () => {
  return (
      <>
        <Navbar />
        <div className={`
            app-vp
            bg-brand px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-80
            flex flex-col gap-80 overflow-scroll h-screen
            scroll-smooth scroll-my-60 snap snap-mandatory snap-y
        `}>
          <Landing />
          <Features />
          <Map />
          <Filter/>
          <Message/>
          <PostProperties />
        </div>
      </>
  );
};

export default App;
