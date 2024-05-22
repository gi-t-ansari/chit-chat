import { Button } from "@material-tailwind/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Chat, Home } from "./pages";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
