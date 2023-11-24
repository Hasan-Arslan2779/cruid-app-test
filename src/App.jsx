import React, { useState } from "react";
import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";

const App = () => {
  const [users, setUser] = useState([
    {
      name: "Hasan",
      email: "hasanarslan@gmail.com",
    },
    {
      name: "Hüseyin",
      email: "hüseyinarslan@gmail.com",
    },
  ]);

  // Kullanıc Ekleme Fonksiyonu
  const addUser = (user) => {
    setUser([...users, user]);
  };
  return (
    <div className="p-3 d-flex gap-5 flex-column">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
