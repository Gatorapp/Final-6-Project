import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieProject from "./MovieProject/MovieProject";
import PageNotFound from "./componenets/PageNotFound/PageNotFound"
import Footer from "./componenets/Footer/Footer";
import NavBar from "./componenets/Header/NavBar";
import MovieCard from "./componenets/MovieCard/MovieCard";
import "./App.css"

function App() {
  return (
        <div className="bg">
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieProject />} />
          <Route path='/movie/:id' element={<MovieCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
