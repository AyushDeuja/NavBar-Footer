import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import MovieCard from "./MovieCard/MovieCard";

function App() {
  return (
    <>
      {/* <div style={{ backgroundColor: "gray" }}> */}
      <NavBar />
      <MovieCard />
      <ToggleTheme />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
