import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import Badge from "../Badge";

export default function Profile(props) {
  return (
    <>
      <Stack className="bg-light" gap="5">
        <Container>
          <Row style={{ alignItems: "center", marginBottom: 10 }}>
            <Col>
              <div>
                <Badge />
              </div>
            </Col>
            <Col>
              <div className="text-dark">
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
    </>
  );
}
