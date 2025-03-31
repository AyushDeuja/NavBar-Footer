import React, { useState } from "react";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "gray" : "white",
        color: isDarkMode ? "white" : "black",
        padding: "50px",
        height: "100vh",
      }}
    >
      <p>This theme is:{isDarkMode ? "black" : "white"}</p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle</button>
    </div>
  );
};

export default ToggleTheme;
