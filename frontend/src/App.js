// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Key } from "./localKey";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import CommentForm from "./components/CommentForm/CommentForm";
import VideoPlayer from "./components/VideoPlayer";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SearchPage /> <br></br>
              <VideoPlayer />
              <CommentForm />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path='/' 
          element={
          <PrivateRoute>
            <CommentForm />
          </PrivateRoute>
          } 
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
