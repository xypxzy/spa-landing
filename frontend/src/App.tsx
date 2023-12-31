import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/HomePage/Home";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
