import React from "react";
import { Stack } from "react-bootstrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsFillTreeFill } from "react-icons/bs";

export default function Badge({ percent, title, content }) {
  percent = 60;
  title = "20";
  content = "Tree count";

  return (
    <Stack className="align-items-center">
      <CircularProgressbarWithChildren
        value={percent}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: `rgba(62, 152, 199)`,
          trailColor: "#d6d6d6",
        })}
      >
        <BsFillTreeFill size="2em" className="text-muted" />
      </CircularProgressbarWithChildren>
      <h1 className="text-primary">{title}</h1>
      <h5 className="text-muted">{content}</h5>
    </Stack>
  );
}
