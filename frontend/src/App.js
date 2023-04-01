// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Key } from "./localKey";
import { Link } from "react-router-dom";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import RelatedVideos from "./components/RelatedVideos";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <SearchBar />
      </div>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/searchpage" element={<PrivateRoute><SearchPage /></PrivateRoute> }/>
      </Routes>

      {/* <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
