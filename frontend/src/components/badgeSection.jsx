import BadgeLevel from "./badgeLevel";
import { Row, Col } from "react-bootstrap";
function BadgeSection(){
  return(
    <div>
      <h3>Badge</h3>
      <Row>
        <Col className="w-25 px-">
          <BadgeLevel title={'Rookie'} valid={true} img={"https://cdn2.iconfinder.com/data/icons/valuable-items/200/minerals_coal-512.png"}/>
        </Col>
        <Col className="w-25 px-1">
          <BadgeLevel title={'Eco'} img={"https://icons-for-free.com/iconfiles/png/512/Grass-1320568096556983295.png"}/>
        </Col>
        <Col className="w-25 px-1">
          <BadgeLevel title={'Super'} img={"https://i.dlpng.com/static/png/1443059-wind-png-icon-clip-freeuse-library-wind-png-512_512_preview.png"}/>
        </Col>
        <Col className="w-25 px-1">
          <BadgeLevel title={'God'} img={"https://cdn-icons-png.flaticon.com/512/218/218466.png"}/>
        </Col>
      </Row>
    </div>
  )
}

export default BadgeSection;