import './App.scss';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Running from './pages/running/Running';
function App() {
  return (
    <Routes>
      <Route path="/running" element={<Running />} />
    </Routes>
  );
}

export default App;
