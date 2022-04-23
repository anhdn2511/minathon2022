import "./App.scss";
import "./App.css";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import BottomBar from "./components/Bottombar";
import styled from "styled-components";

import Running from './pages/running/Running';
import HomePage from './pages/Homepage';
import Profile from './pages/profile/Profile';
import Swiper from './pages/swiper/Swiper'
import CreateEvent from './pages/event/CreateEvent';
import Chat from "./pages/chat";

const Main = styled.div`
  transition: 0.3s;
  marginbottom: 100;
`;

function App() {
  return (
    <div>
      <BottomBar />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/running" element={<Running />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/explore" element={<Swiper />} />
          <Route path="/createevent" element={<CreateEvent />} />
          <Route path="/message" element={<Chat/>} />
        </Routes>
        {/* <div style={{ height: 100 }}></div> */}
      </Main>
    </div>
  );
}

export default App;
