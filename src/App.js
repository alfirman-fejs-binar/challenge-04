import { Routes, Route } from "react-router-dom";
import CarDetail from "./components/CarDetail";
import Cars from "./components/Cars";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Cars />} />
        <Route path="/:id" element={<CarDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
