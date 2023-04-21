import { useContext, useState } from "react";
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

  getData(user);

  return (
    <>
      <ComA />
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
