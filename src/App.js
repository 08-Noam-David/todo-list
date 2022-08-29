import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="new" element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
