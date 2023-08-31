import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/HomePage/Home";
import Services from "./pages/ServicesPage/ServicesPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import Team from "./pages/Team/Team";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="aboutUs" element={<AboutUs/>}/>
        <Route path="team" element={<Team/>}/>
      </Route>
    </Routes>
  );
}

export default App;
