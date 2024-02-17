import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ExpressionTree from "./pages/expression_tree";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExpressionTree" element={<ExpressionTree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
