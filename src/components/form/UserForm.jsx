import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    addUser({ name, email });
    setMail("");
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="name">İsim</label>
          <input
            placeholder="İsminizi giriniz"
            type="text"
            id="name"
            className="form-control my-3"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="mail">Email</label>
          <input
            value={email}
            placeholder="Email adresinzi giriniz "
            type="email"
            id="mail"
            className="form-control my-3"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <button className="btn btn-dark">Kullanıcı Ekle </button>
      </form>
    </div>
  );
};

export default UserForm;
