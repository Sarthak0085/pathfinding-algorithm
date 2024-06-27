import { useRef } from "react";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";

const App = () => {
  const isVisualizationRunning = useRef(false);
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <Grid isVisualizationRunning={isVisualizationRunning} />
    </div>
  );
};

export default App;
