import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MCCard from "./components/MCCard";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <MCCard />
        </p>
        <UserForm />
      </header>
    </div>
  );
}

export default App;
