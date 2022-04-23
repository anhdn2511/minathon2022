import { Button, Container, Row, Modal, Stack } from "react-bootstrap";
import History from "../components/historySection";
import Profile from "../components/Profile";
import BadgeSection from "../components/badgeSection";
import EventCarousel from "../components/EventCarousel";

function HomePage() {
  return (
    <div>
      <div className="vh-25">
        <img
          className="px-0 border-radius-bottom h-100 w-100"
          src="https://www.runtastic.com/blog/wp-content/uploads/2019/03/blog_thumbnail_run-for-the-oceans_proper-running-form_1200x800-1024x683.jpg"
        />
      </div>
      <div className="px-5 mb-4">
        <Row className="negative-mg-top-1">
          <Container className="white-background border border my-rounded shadow p-3 bg-body">
            <Profile />
          </Container>
        </Row>
      </div>
      <div className="px-3">
        <Stack gap="4">
          <EventCarousel />
          <BadgeSection />
          <History />
        </Stack>
      </div>
      <div style={{height: '100px'}}></div>
    </div>
  );
}

export default HomePage;
