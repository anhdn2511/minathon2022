import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Container, Row, Col, Stack } from "react-bootstrap";
import EventCard from "./EventCard";
import { useState } from "react";

import { mockEventsData as events } from "./data";
const ITEMSPERPAGE = 2;

export default function EventCarousel() {
  const [currentPage, setCurrentPage] = useState({
    index: 0,
    items: events.slice(0, 2),
  });

  const onGotoNext = () => {
    const nextIndex = currentPage.index + 1;
    const offset = ITEMSPERPAGE * nextIndex;
    if (offset > events.length - 1) return;
    const nextChunk = events.slice(offset, offset + ITEMSPERPAGE);
    setCurrentPage({
      index: nextIndex,
      items: nextChunk,
    });
  };

  const onGotoPrev = () => {
    const nextIndex = currentPage.index - 1;
    const offset = ITEMSPERPAGE * nextIndex;
    if (offset < 0) return;
    const nextChunk = events.slice(offset, offset + ITEMSPERPAGE);
    setCurrentPage({
      index: nextIndex,
      items: nextChunk,
    });
  };

  return (
    <>
      <Container style={{ padding: 0 }}>
        <Row>
          <Col justifyContent="space-between">
            <Stack
              direction="horizontal"
              style={{
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <h3>Upcoming Events</h3>
              <div>
                <FaChevronLeft
                  size="1.5em"
                  className="text-muted"
                  onClick={onGotoPrev}
                />
                {"  "}
                <FaChevronRight
                  size="1.5em"
                  className="text-muted"
                  onClick={onGotoNext}
                />
              </div>
            </Stack>
          </Col>
        </Row>
        <Row>
          {currentPage.items.map(({ id, imageUrl, title, date }) => (
            <Col xs="6">
              <EventCard
                index={id}
                imageUrl={imageUrl}
                title={title}
                content={getDateString(date)}
                linkTo="/event"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

function getDateString(date) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
}
