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
          <BadgeLevel title={'Super'} img={"https://www.shareicon.net/data/2015/09/07/97580_wind_512x512.png"}/>
        </Col>
        <Col className="w-25 px-1">
          <BadgeLevel title={'God'} img={"https://icon-library.com/images/ruby-icon-png/ruby-icon-png-29.jpg"}/>
        </Col>
      </Row>
    </div>
  )
}

export default BadgeSection;