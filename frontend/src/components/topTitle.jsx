import {FiArrowLeft} from "react-icons/fi"
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
function TopTitle({title}) {
  // const name = useSelector((state) => state.account.name)
  const dispatch = useDispatch()

  return(
    <div className="vh-10 bg-primary">
      <Row className="px-3 py-1 h-100">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="w-100">
            <p className="fs-3 text-white">{title}</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TopTitle;