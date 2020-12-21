import React from "react";

const UserList = ({ usersList }) => {
  return (
    <ul>
      {usersList.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
