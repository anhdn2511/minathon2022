import React from "react";
import { Button, Image, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EventCard({ imageUrl, title, content, linkTo }) {
  return (
    <div
      className="bg-light shadow"
      style={{
        overflow: "hidden",
        textAlign: "center",
        borderRadius: 8,
      }}
    >
      <Image src={imageUrl} alt="thumnail" style={{ width: "100%" }} />
      <Stack className="mx-1 my-2" gap="1">
        <Link to={linkTo} style={{ textDecoration: "none" }}>
          <strong className="text-dark">{title}</strong>
        </Link>
        <i>{content}</i>
      </Stack>
    </div>
  );
}
