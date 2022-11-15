import MessagePage from './pages/Message';
import FilterScreen from './pages/Filter';
import MapScreen from './pages/Map';
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <Landing />
      <MapScreen/>
      <FilterScreen/>
      <MessagePage/>
    </div>
  )
}

export default App;
