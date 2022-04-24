import React from "react";
import { Row, Col, Container, Stack, Image, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "../../components/Badge";
import UserCard from "../../components/UserCard";

import { mockedUserInfos } from "./data";
import { mockEventsData } from "../../components/EventCarousel/data";

const event = mockEventsData[0];

export default function EventInfo() {
  const { title, imageUrl } = event;

  return (
    <Stack gap="5" className="m-2 py-2">
      <Container>
        <RoundedContainer borderRadius={15}>
          <Row style={{ alignItems: "center", margin: 10 }}>
            <Col>
              <Row>
                <Image src={imageUrl} alt="company" className="w-100" rounded />
              </Row>
              <Row className="mt-3">   
                <Link to="/running">
                  <Button size="sm" variant="primary" className="w-100">
                    Join now
                  </Button>
                </Link>
              </Row> 
            </Col>
            <Col>
              <div className="text-dark">
                <h3 className="fw-bold text-muted">Challenge</h3>
                <p className="fw-bold text-success">{title}</p>
                <h3 className="fw-bold text-muted">Runners</h3>
                <p className="fw-bold text-success">300</p>
              </div>
            </Col>
          </Row>
        </RoundedContainer>
      </Container>

      <Container>
        <RoundedContainer borderRadius={15} className="bg-primary">
          <Col className="p-2" xs="10">
            <h1>Invite more friends</h1>
            <p>Get higher kilometree factor for group of runner</p>
          </Col>
        </RoundedContainer>
      </Container>

      <Container>
        <Row>
          <Col justifyContent="space-between">
            <Stack
              direction="horizontal"
              style={{
                justifyContent: "space-between",
                marginBottom: 5,
              }}
            >
              <h3>All People</h3>
              <h5 className="fw-bold text-muted">215</h5>
            </Stack>
          </Col>
        </Row>
        <RoundedContainer borderRadius={15}>
          {mockedUserInfos.map(({ imageUrl, name, username }, index) => (
            <>
              {index !== 0 && <hr className="m-1 text-dark" />}
              <UserCard imageUrl={imageUrl} name={name} username={username} />
            </>
          ))}
        </RoundedContainer>
      </Container>
    </Stack>
  );
}

function RoundedContainer({ children, borderRadius }) {
  return (
    <Container className="p-3 shadow" style={{ borderRadius: borderRadius }}>
      {children}
    </Container>
  );
}
