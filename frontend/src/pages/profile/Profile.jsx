import TopTitle from "../../components/topTitle";
import {Row, Col, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import {FiArrowRight} from 'react-icons/fi'
import {AiFillHeart, AiOutlineCloudDownload, AiOutlineLink} from 'react-icons/ai'
import {BiDevices} from 'react-icons/bi'
import { toggle } from "../../redux/profileSlice";

function Profile(){
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()

  return(
    <Container className="px-4 py-4">
      <Row className="d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <div className="mx-auto">
            <img className="avatar img-fluid" src={profile.img}/>
          </div>
        </Col>
      </Row>
      <Row>
        <p className="fs-4 m-0 text-primary fw-bold text-center">{profile.name}</p>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-5">
          <Button className="btn-primary w-100" onClick={() => dispatch(toggle())}>Switch Account</Button>
        </Col>
        <Col className="col-5">
          <Button className="btn-primary w-100">Edit Profilet</Button>
        </Col>
      </Row>
      <Row className="py-2">
        <h3 className="border-bottom border-2 text-primary">Account</h3>
        <Row>
          <Col className="col-auto px-0"><AiFillHeart className="text-primary"/></Col>
          <Col><p className="">Favourite</p></Col>
          <Col className="col-auto"><FiArrowRight/></Col>
        </Row>
        <Row>
          <Col className="col-auto px-0"><AiFillHeart className="text-primary"/></Col>
          <Col><p className="">Favourite</p></Col>
          <Col className="col-auto"><FiArrowRight/></Col>
        </Row>
        <Row>
          <Col className="col-auto px-0"><BiDevices className="text-primary"/></Col>
          <Col><p className="">Fitness device</p></Col>
          <Col className="col-auto"><FiArrowRight/></Col>
        </Row>
        <Row>
          <Col className="col-auto px-0"><AiOutlineCloudDownload className="text-primary"/></Col>
          <Col><p className="">Download session</p></Col>
          <Col className="col-auto"><FiArrowRight/></Col>
        </Row>
        <Row>
          <Col className="col-auto px-0"><AiOutlineLink className="text-primary"/></Col>
          <Col><p className="">Active subcription</p></Col>
          <Col className="col-auto"><FiArrowRight/></Col>
        </Row>
      </Row>
      <Row className="py-2">
        <h3 className="border-bottom border-2 text-primary">Prefrences</h3>
      </Row>
      <Row className="py-2">
        <h3 className="border-bottom border-2 text-primary">Support</h3>
      </Row>
    </Container>
  )
}

export default Profile;