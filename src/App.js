import React from "react";
import "./styles/App.css"
import { BrowserRouter} from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import AppRouter from "./components/AppRouter";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
