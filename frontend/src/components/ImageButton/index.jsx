import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ImageButton({ imageUrl, title, linkTo }) {
  return (
    <Link to={linkTo} style={{ textDecoration: "none" }}>
      <div
        className="bg-light shadow text-dark border border-dark"
        style={{
          overflow: "hidden",
          textAlign: "center",
          borderRadius: 8,
        }}
      >
        <Image
          src={imageUrl}
          alt="thumnail"
          style={{ height: 80, padding: 2 }}
        />
        <div className="m-1 my-2">
          <strong>{title}</strong>
        </div>
      </div>
    </Link>
  );
}
