import { render } from "@testing-library/react";
import React, { useState } from "react";

const Loginform = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const { username, password } = data;

  const changeHandlar = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  return (
    <div className="logindiv">
      <form action="/action_page.php">
        <label for="fname">Name</label>
        <input
          type="text"
          name="username"
          placeholder="User name.."
          value={username}
          required
        />

        <label for="lname">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password.."
          value={password}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Loginform;
