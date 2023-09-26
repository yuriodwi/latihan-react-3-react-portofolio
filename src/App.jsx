import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="app bg-deep-blue">
      <Navbar />
    </div>
  );
};

export default App;
