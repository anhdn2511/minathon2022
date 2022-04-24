import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Badge from "../Badge";
import ImageButton from "../ImageButton";

export default function Profile() {
  const percent = 60;
  const title = "6";
  const content = "4 more trees to the next level";

  return (
    <>
      <Stack className="bg-light py-2" gap="5">
        <Container>
          <Row style={{ alignItems: "center", marginBottom: 10 }}>
            <Col>
              <div>
                <Badge percent={percent} title={title} content={content} />
              </div>
            </Col>
            <Col>
              <div className="text-dark">
                <h5 className="fw-bold text-muted">Level</h5>
                <h3 className="fw-bold text-dark">Rookie</h3>
                <h5 className="fw-bold text-muted">Total hours</h5>
                <h3 className="fw-bold text-dark">240</h3>
                <h5 className="fw-bold text-muted">Connections</h5>
                <h3 className="fw-bold text-dark">12</h3>
              </div>
            </Col>
          </Row>

          <Row alignItems="center">
            <Col>
              <ImageButton
                imageUrl={`https://img.freepik.com/free-vector/young-people-giving-high-five-illustrations-set_23-2148373642.jpg?size=338&ext=jpg&ga=GA1.2.958362103.1650726980`}
                title="Find Runmate"
                linkTo="/explore"
              />
            </Col>
            <Col>
              <ImageButton
                imageUrl={`https://img.freepik.com/free-vector/finish-line-concept-illustration_114360-1660.jpg?size=100&ext=jpg&ga=GA1.1.958362103.1650726980`}
                title="Run Now"
                linkTo="/running"
              />
            </Col>
          </Row>
        </Container>
      </Stack>
    </>
  );
}
