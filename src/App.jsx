import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import MovieCard from "./MovieCard/MovieCard";

function App() {
  return (
    <>
      <NavBar />
      <MovieCard />
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
