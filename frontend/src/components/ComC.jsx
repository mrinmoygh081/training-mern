import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ComC = () => {
  const { data, isLoggedIn } = useContext(AppContext);

  return (
    <div>
      I'm {data?.name}, My age is {data?.age}
      <br />
      <br />
      {/* <input
        placeholder="Enter user's name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br />
      <input
        placeholder="Enter user's age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      /> */}
      <br />
    </div>
  );
};

export default ComC;
