import React, { useContext } from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/LOGO.svg";
import { ThemeContext } from "../../Theme";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <Logo class="header-logo" />
      <div className="header-toggle-buttons">
        <button onClick={() => toggleTheme()}>{theme}</button>
      </div>
    </header>
  );
};

export default Header;
