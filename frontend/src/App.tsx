

import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/HomePage/Home";
import Services from "./pages/ServicesPage/ServicesPage";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
