import "./App.css";
import UserList from "./UserList";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsersList(response.data));
  }, []);
  return (
    <div className="App">
      <h1>Users from API</h1>
      <UserList usersList={usersList} />
    </div>
  );
}

export default App;
