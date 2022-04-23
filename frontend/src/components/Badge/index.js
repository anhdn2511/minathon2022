import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsFillTreeFill } from "react-icons/bs";

const ICON_COLOR = "#184A2C";

export default function Badge({ percent, title, content }) {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    if (currentPercentage !== percent) {
      setCurrentPercentage(percent);
    }
  }, [currentPercentage]);

  return (
    <Stack className="align-items-center" style={{ textAlign: "center" }}>
      <CircularProgressbarWithChildren
        value={currentPercentage}
        styles={buildStyles({
          pathTransitionDuration: 1.2,
          pathColor: ICON_COLOR,
          trailColor: "#d6d6d6",
        })}
      >
        <BsFillTreeFill size="2em" style={{ color: ICON_COLOR }} />
      </CircularProgressbarWithChildren>
      <h1 className="text-primary">{title}</h1>
      <h6 className="text-muted">{content}</h6>
    </Stack>
  );
}
