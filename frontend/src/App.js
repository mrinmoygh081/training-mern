import { useContext, useEffect, useState } from "react";
import "./App.css";
import ComA from "./components/ComA";
import { AppContext } from "./context/AppContext";
// import Forget from "./pages/Forget";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import Register from "./pages/Register";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { getData } = useContext(AppContext);
  const [user, setUser] = useState({
    name: "Biswajit",
    age: 23,
  });
  const [postData, setPostData] = useState(null);

  getData(user);

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://jsonplaceholder.typicode.com/posts/", requestOptions)
      .then((response) => response.json())
      .then((result) => setPostData(result))
      .catch((error) => console.log("error", error));
  }, [user]);

  return (
    <>
      <ComA />

      {postData &&
        postData.map((item, index) => {
          return <p key={index}>{item.body}</p>;
        })}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
