import { useState } from "react";

import "./App.css";
import Hero from "./Components/Hero";
import UserForm from "./Components/UserForm";
import UserInfo from "./Components/UserInfo";
import usersFeed from "./data/data";

function App() {
  const [users, setusers] = useState(usersFeed);
  const updateUsers = (user) => {
    setusers((prevUsers) => {
      return [...prevUsers, user];
    });
  };
  const deleteUser = (user) => {
    setusers((prevUsers) => {
      return prevUsers.filter((p) => p.id !== user.id);
    });
  };

  return (
    <div className="bg-blue-100 h-screen">
      <Hero />
      <UserForm newUser={updateUsers} />
      <UserInfo users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
