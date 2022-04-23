import { Button, Container, Row, Modal } from 'react-bootstrap';
import History from '../components/historySection';


import BadgeSection from '../components/badgeSection';


function HomePage(){
  return(
    <div>
      <div className='vh-25'>
        <img className='px-0 border-radius-bottom h-100 w-100' src="https://www.runtastic.com/blog/wp-content/uploads/2019/03/blog_thumbnail_run-for-the-oceans_proper-running-form_1200x800-1024x683.jpg"/>
      </div>
      <div className='vh-50 px-5'>
        <Row className='h-100 negative-mg-top-1'>
          <Container className='white-background border border my-rounded shadow p-3 bg-body'>
            <h1>Nhân Cù</h1>
          </Container>
        </Row>

      </div>
      <div className='px-3'>
        <BadgeSection/>
        <History/>
      </div>
    </div>
  )
}

export default HomePage;