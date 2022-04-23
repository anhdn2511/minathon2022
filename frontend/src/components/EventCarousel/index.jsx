import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Container, Row, Col, Stack } from "react-bootstrap";
import EventCard from "./EventCard";
import { useState } from "react";

const ITEMSPERPAGE = 2;

export default function EventCarousel({ events }) {
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
    <Container className="bg-light">
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
              <h4>Upcoming Events</h4>
              <div>
                <FaChevronLeft
                  size="1em"
                  className="text-muted"
                  onClick={onGotoPrev}
                />
                <FaChevronRight
                  size="1em"
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
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
