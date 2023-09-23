import "./App.css"
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Portfolio from "./pages/js/Portfolio";
import About from "./pages/js/About";
import Login from "./pages/js/Login";
import Form from "./pages/js/Form";
import ViewArt from './pages/js/ViewArt';
import PrivateRoute from "./utils/PrivateRoute";
import Header from "./components/js/Header";
import Footer from "./components/js/Footer";
import Navbar from "./components/js/Navbar";
import { AuthContext } from './Context/AuthContext';

function App() {
const [loggedIn, setLoggedIn ] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <>
        <Header />
        <Navbar />
        <div className="website-body">
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="viewArt/:id" element={<ViewArt />} />
              <Route element={<PrivateRoute />}>
                <Route path="/form" element={<Form />} />
              </Route>
            </Routes>
        </div>
        <Footer />
      </>
    </AuthContext.Provider>
    
  );
}

export default App;
