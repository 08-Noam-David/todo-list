import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
