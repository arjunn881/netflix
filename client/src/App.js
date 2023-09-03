
import './App.css';
import { Home } from './Pages/Home/Home';

import { Watch } from './Pages/Watch/Watch';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";




function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
            
          
          <Route path="/movies" element={<Home  type="movies"/>} />
            
          
          <Route path="/series" element={<Home  type="series"/>} />
            
          <Route path="/watch" element={<Watch/>} />
          
        </Routes>

    </Router>
  );
}

export default App;
