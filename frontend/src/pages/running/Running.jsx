import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Col, Row } from "react-bootstrap";
import Map from "../../components/Map";

export default function Running() {
  const running = useSelector((state) => state.running);

  return (
    <div>
      <Card className="fixed-bottom">
        <Card.Body>
          <div className="mb-4">
            <Row>
              <Col>
                <h3 className="fw-bold text-muted">Distance</h3>
              </Col>
              <Col>
                <h3 className="fw-bold text-muted">Duration</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fw-bold text-dark">{running.distance}</p>
              </Col>
              <Col>
                <p className="fw-bold text-dark">{running.duration}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fw-bold text-dark">Pace - min/km</p>
              </Col>
              <Col>
                <p className="fw-bold text-dark">Burned - Calories</p>
              </Col>
            </Row>
            {/* <Row>
            <Col>{running.pace}</Col>
            <Col>{running.burned}</Col>
          </Row> */}
          </div>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Stop
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Map />
    </div>
  );
}
