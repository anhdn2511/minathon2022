import React from "react";
import { Stack, Image } from "react-bootstrap";

export default function UserCard({ imageUrl, name, username }) {
  return (
    <Stack direction="horizontal" gap="3">
      <Image src={imageUrl} alt="thumnail" roundedCircle fluid />
      <div style={{ justifyContent: "center" }}>
        <h5 className="text-dark">{name}</h5>
        <strong className="text-muted">{username}</strong>
      </div>
    </Stack>
  );
}
