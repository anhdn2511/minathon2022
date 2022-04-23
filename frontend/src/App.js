import './App.scss';
import './App.css';
import { Routes, Route } from "react-router-dom";
import BottomBar from './components/Bottombar'
import styled from "styled-components"

import Running from './pages/running/Running';

const Main = styled.div`
  transition: 0.3s;
`;

function App() {
  return (
    <div>
      <BottomBar />
      <Main>
        <Routes>
          <Route path="/running" element={<Running />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
