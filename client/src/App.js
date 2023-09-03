import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";

import { Watch } from "./Pages/Watch/Watch";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={!user ? <Register /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />

        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
