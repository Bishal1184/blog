import React from "react";
import { render } from "react-dom";
import { BrowserRouter,Routes,
  Route} from "react-router-dom";

import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/details" element={<Details />} /> */}
      {/* <Route path="invoices" element={<Invoices />} /> */}
      {/* <Route name="ideas" path="/:testvalue" handler={CreateIdeaView} /> */}
    </Routes>

     
      </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
