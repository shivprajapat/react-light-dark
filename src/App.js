import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <section>
        <h1>Light & Dark Mode <br/> Using Context API</h1>
      </section>
    </div>
  );
}

export default App;
