import React from "react";
import { Button, Image, Stack } from "react-bootstrap";

export default function EventCard({ imageUrl, title, content }) {
  return (
    <div
      className="bg-light shadow"
      onClick={() => {
        console.log(`Goto card ${title}`);
      }}
      style={{
        overflow: "hidden",
        textAlign: "center",
        borderRadius: 8,
      }}
    >
      <Image src={imageUrl} alt="thumnail" style={{ width: "100%" }} />
      <Stack>
        <strong>{title}</strong>
        <i>{content}</i>
        <div className="d-flex justify-content-center p-2">
          <Button size="sm" variant="outline-primary">
            Join now
          </Button>
        </div>
      </Stack>
    </div>
  );
}
