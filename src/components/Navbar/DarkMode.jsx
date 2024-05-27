import React from "react";
import LightButton from "../../assets/light-mode.png";
import DarkButton from "../../assets/dark-mode.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-8 cursor-pointer drop-shadow absolute z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      ></img>
      <img
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-8 cursor-pointer drop-shadow opacity-100"
      ></img>
    </div>
  );
};

export default DarkMode;
