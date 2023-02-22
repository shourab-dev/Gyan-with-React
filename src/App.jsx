import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavBar from "./components/navbar/MyNavBar";
import "./app.css";
import Home from "./components/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MyNavBar />}>
          <Route path="/" exact element={<Home />}></Route>
          <Route
            path="/about"
            exact
            element={`<h1>This is about Page</h1>`}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
