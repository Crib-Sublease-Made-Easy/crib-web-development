import MessagePage from './pages/Message';
import FilterScreen from './pages/Filter';
import MapScreen from './pages/Map';
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import PostProperties from "./pages/PostProperties";

function App() {
  return (
    <div>
      <Landing />
      <Features />
      <MapScreen/>
      <FilterScreen/>
      <MessagePage/>
      <PostProperties />
    </div>
  )
}

export default App;
