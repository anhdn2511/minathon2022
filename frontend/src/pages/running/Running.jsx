import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { Button, Card, Col, Row } from "react-bootstrap";
import Map from "../../components/Map";



export default function Running() {

  const [running, setRunning] = useState(useSelector(state => state.running))

  return <div>
    <Card className='fixed-bottom'>
      <Card.Body>
        <div className="mb-4">
          <Row>
            <Col>
              Distance
            </Col>
            <Col>
              Duration
            </Col>
          </Row>
          <Row>
            <Col>
              {running.distance}
            </Col>
            <Col>
              {running.duration}
            </Col>
          </Row>
          <Row>
            <Col>Pace - min/km</Col>
            <Col>Burned - Calories</Col>
          </Row>
          <Row>
            <Col>{running.pace}</Col>
            <Col>{running.burned}</Col>
          </Row>
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">Stop</Button>
        </div>
      </Card.Body>
    </Card>
    <Map />
  </div>
}