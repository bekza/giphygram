import React, { useState } from "react";
import { Giphygram } from "./components/Giphygram";

const App = () => {
  const [state, setState] = useState([]);

  return (
    <div className="App">
      <Giphygram state={state} setState={setState} />
    </div>
  );
};

export default App;
