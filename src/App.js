import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Container maxWidth="md" className="app">
      <Home />
    </Container>
  );
}

export default App;
