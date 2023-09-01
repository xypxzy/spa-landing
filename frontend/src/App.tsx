import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/HomePage/Home';
import Services from './pages/ServicesPage/ServicesPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
