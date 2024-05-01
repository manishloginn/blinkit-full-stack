import { useState } from "react";
// import Data from "./Data/Data";
import HomeScreen from "./Homescreen/Home";
import Navbar from "./Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Provider store={store}>
          <Navbar searchQuery={setSearchQuery}/>
          <HomeScreen searchQuery={searchQuery} />
    </Provider>
  );
}

export default App;
