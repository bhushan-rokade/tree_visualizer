import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ExpressionTree from "./pages/expression_tree";
import BinaryTree from "./pages/BinaryTree";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExpressionTree" element={<ExpressionTree />} />
          <Route path="/BinaryTree" element={<BinaryTree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
