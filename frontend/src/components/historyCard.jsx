import { Row, Col } from "react-bootstrap";
import historyImage from "../runningHistory.png"
import {FiArrowRight} from "react-icons/fi"
function HistoryCard({date, distance}) {
  return (
    <div className="my-3">
      <Row className="border border-primary rounded mx-auto p-1">
        <Col className="col-3">
          <img className="img-fluid" src={historyImage}></img>
        </Col>
        <Col>
          <p className="my-0 fs-6">{date}</p>
          <p className="my-0 fs-3 fw-bold text-primary">{distance} km</p>
        </Col>
        <Col className="">
          <div className="h-50 d-flex justify-content-end">
            <FiArrowRight/>
          </div>
          <div>
            <img className="mx-1 w-25" src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"></img>
            <img className="mx-1 w-25" src="https://cdn5.vectorstock.com/i/1000x1000/01/69/businesswoman-character-avatar-icon-vector-12800169.jpg"></img>
            <img className="mx-1 w-25" src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"></img>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HistoryCard;