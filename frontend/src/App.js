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
import CommentForm from "./components/CommentForm/CommentForm";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import CommentList from "./components/CommentList";
import RelatedVideos from "./components/RelatedVideos";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoPage from "./pages/VideoPage/VideoPage";

function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <SearchPage />
      <VideoPage />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/postcomment" element={
          <PrivateRoute>

          </PrivateRoute>}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
