import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsersList(response.data));
  }, []);
  return (
    <ul>
      {usersList.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
