import "./App.scss";
import "./App.css";
import { Button, Stack } from "react-bootstrap";

import Map from "./components/Map";
import Badge from "./components/Badge";
import Profile from "./pages/Profile";
function App() {
  return <Profile />;

  return (
    <div className="bg-primary">
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </div>
  );
}

export default App;
