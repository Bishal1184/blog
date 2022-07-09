import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Dashboard from "./Dashboard";
import EditBlog from "./EditBlog";
import AddBlog from "./addBlog";
import Auth from "./Login/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="/editBlog" element={<EditBlog />} />
        <Route exact path="/addBlog" element={<AddBlog />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/details" element={<Details />} /> */}
        {/* <Route path="invoices" element={<Invoices />} /> */}
        {/* <Route name="ideas" path="/:testvalue" handler={CreateIdeaView} /> */}
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
