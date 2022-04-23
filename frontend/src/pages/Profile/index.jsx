import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import Badge from "../../components/Badge";
import EventCarousel from "../../components/EventCarousel";

import { mockEventsData } from "./data";

export default function Profile(props) {
  return (
    <>
      <Stack className="m-5 bg-light" gap="5">
        <Container>
          <Row style={{ alignItems: "center", marginBottom: 10 }}>
            <Col>
              <div>
                <Badge />
              </div>
            </Col>
            <Col>
              <div>
                <p>Level somthing</p>
                <p>Total hour: somthing</p>
                <p>Total somthing</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className="w-100" variant="dark">
                Go Match
              </Button>
            </Col>
            <Col>
              <Button className="w-100" variant="danger">
                Run Now
              </Button>
            </Col>
          </Row>
        </Container>
      </Stack>
      <EventCarousel events={mockEventsData} />
    </>
  );
}
