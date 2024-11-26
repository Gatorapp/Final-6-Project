import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieProject from "./MovieProject/MovieProject";
import PageNotFound from "./componenets/PageNotFound/PageNotFound"
import Footer from "./componenets/Footer/Footer";
import NavBar from "./componenets/Header/NavBar";
import MovieCard from "./componenets/MovieCard/MovieCard";
import "./App.css"

function App() {
  return (   
    <Router>
        <NavBar />
        <div className="bg">
        <Routes>
          <Route path="/" element={<MovieProject />} />
          <Route path='/movie/:id' element={<MovieCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
        <Footer />
      </Router>
 
  );
}

export default App;
