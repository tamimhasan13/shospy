import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"
import { useEffect, useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState(() => {
      return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
      const root = window.document.documentElement;

      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
      <div className="relative">
        <button
          className="bg-primary/20 dark:bg-primary/7% rounded-lg backdrop-blur-[2px] p-1 inline-block"
          
          onClick={toggleTheme}
        >
          <img
            src={theme === "dark" ? Sun : Moon}
            width="24"
            height="24"
            alt="moon"
          />
        </button>
      </div>
    );
};

export default DarkMode;