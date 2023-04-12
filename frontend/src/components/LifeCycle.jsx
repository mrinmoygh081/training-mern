import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [res, setRes] = useState("users");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  //   console.log("render");
  console.log(data);
  useEffect(() => {
    // console.log("rendering the component", res);
    let requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/" + res, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, [res]);

  const changeLoading = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      <button onClick={() => setRes("users")}>Users</button>
      <button onClick={() => setRes("posts")}>Posts</button>
      <button onClick={() => setRes("comments")}>Comments</button>
      <button onClick={changeLoading}>Change Loading</button>

      {data &&
        data.map((item, index) => {
          //   return <pre key={index}>{JSON.stringify(item)}</pre>;
          return <pre key={index}>{item?.name}</pre>;
          //   return <pre key={index}>{item && item.name}</pre>;
        })}
    </div>
  );
};

export default LifeCycle;
