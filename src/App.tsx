import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/SearchHeader";

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
