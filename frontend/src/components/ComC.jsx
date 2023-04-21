import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ComC = () => {
  const { data, data2, isLoggedIn } = useContext(AppContext);

  return (
    <div>
      I'm {data?.name}, My age is {data?.age}
      <br />
      <br />
      <div className="container">
        <div className="row">
          {data2 &&
            data2.map((item, index) => {
              console.log(item);
              return (
                <div className="col-md-3" key={index}>
                  <div className="card">
                    <h3>{item?.name}</h3>
                    <p>{item?.description}</p>
                    <p>
                      <b>&#8377;{item?.price}/-</b>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
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
