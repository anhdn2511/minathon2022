import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Badge from "../Badge";
import ImageButton from "../ImageButton";

export default function Profile() {
  const percent = 60;
  const title = "6";
  const content = "4 more tree to the next level";

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
                <h3 className="fw-bold text-muted">Level</h3>
                <p className="fw-bold text-dark">Rookie</p>
                <h3 className="fw-bold text-muted">Total hour</h3>
                <p className="fw-bold text-dark">240</p>
                <h3 className="fw-bold text-muted">Something</h3>
                <p className="fw-bold text-dark">Rookie</p>
              </div>
            </Col>
          </Row>

          <Row>
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
