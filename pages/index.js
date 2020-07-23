import Head from "next/head";
import ReactGA from "react-ga";
import { useState, useEffect } from "react";
import { Core } from "../components";
import ThemeContext from "../contexts/ThemeContext";

export default function Home() {
  const [theme, setTheme] = useState("sun");

  useEffect(() => {
    ReactGA.initialize("UA-172955852-1");
    ReactGA.pageview("/");
  }, []);

  return (
    <div>
      <Head>
        <title>Tarik ID BELLOUCH | Mon site</title>
        <link rel="icon" href={theme === "night" ? "night.png" : "sun.png"} />
        <meta
          name="theme-color"
          content={`${theme === "sun" ? "#edf2f7" : "#1a202c"}`}
        />
      </Head>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Core />
      </ThemeContext.Provider>
    </div>
  );
}
