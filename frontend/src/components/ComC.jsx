import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ComC = () => {
  const { data } = useContext(value);
  return (
    <div>
      <p>My name is {data}</p>
    </div>
  );
};

export default ComC;
