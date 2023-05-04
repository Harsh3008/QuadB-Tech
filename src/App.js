import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./ShowList";
import ShowSummary from "./ShowSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShowList />} />
        <Route exact path="/show/:id" element={<ShowSummary />} />
      </Routes>
    </Router>
  );
}

export default App;