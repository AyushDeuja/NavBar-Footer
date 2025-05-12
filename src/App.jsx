import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import MovieCard from "./MovieCard/MovieCard";
import GetAllMovies from "./backendIntegration/GetAllMovies";

function App() {
  return (
    <>
      <NavBar />
      <MovieCard />
      {/* <ToggleTheme /> */}
      <div style={{ marginTop: "150px" }}>
        <Footer />
      </div>
      {/* <GetAllMovies /> */}
    </>
  );
}

export default App;
