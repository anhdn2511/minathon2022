import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Row } from "react-bootstrap";
import Map from "../../components/Map";
import { resetState } from "../../redux/runningSlice";
import { Link } from "react-router-dom";

export default function Running() {
  const dispatch = useDispatch()
  const running = useSelector((state) => state.running);

  const handleStopClick = (event) => {
    dispatch(resetState())
  } 

  const buttonRef = useRef()

  const formatTime = (seconds) => {
    // multiply by 1000 because Date() requires miliseconds
    var date = new Date(seconds * 1000);
    var hh = date.getUTCHours();
    var mm = date.getUTCMinutes();
    var ss = date.getSeconds();
    // If you were building a timestamp instead of a duration, you would uncomment the following line to get 12-hour (not 24) time
    // if (hh > 12) {hh = hh % 12;}
    // These lines ensure you have two-digits
    if (hh < 10) {hh = "0"+hh;}
    if (mm < 10) {mm = "0"+mm;}
    if (ss < 10) {ss = "0"+ss;}
    // This formats your string to HH:MM:SS
    return hh+":"+mm+":"+ss;
  }

  return (
    <div>
      <Card className="fixed-bottom" >
        <Card.Body>
          <div className="mb-4">
            <Row>
              <Col>
                <span className="fw-bold text-muted">Distance - km</span>
              </Col>
              <Col>
                <span className="fw-bold text-muted">Duration</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="fw-bold text-dark">{running.distance.toFixed(2)}</h3>
              </Col>
              <Col>
                <h3 className="fw-bold text-dark">{formatTime(running.duration)}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="fw-bold text-muted">Pace - min/km</span>
              </Col>
              <Col>
                <span className="fw-bold text-muted">Burned - Calories</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="fw-bold text-dark">{running.pace.toFixed(2)}</h3>
              </Col>
              <Col>
                <h3 className="fw-bold text-dark">{running.burned.toFixed(2)}</h3>
              </Col>
            </Row>
          </div>
          <Link to={'/'} onClick={handleStopClick}>
          <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Stop
              </Button>
          </div>
          </Link>
        </Card.Body>
      </Card>
       <Map />
    </div> 
  );
}
