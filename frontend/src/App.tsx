import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/HomePage/Home'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
    </Routes>
  )
}

export default App
