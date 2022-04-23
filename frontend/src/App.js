import './App.scss';
import './App.css';
import './index.css'
import { Button, Container, Row, Modal } from 'react-bootstrap';
import History from './components/historySection';
import TopTitle from './components/topTitle';

import BadgeSection from './components/badgeSection';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleAccount } from './store/accountSlice';
function App() {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  const handleClose = () => {
    setShow(false)
  }
  const handleSwitch = () => {
    dispatch(toggleAccount())
    setShow(false)
  }
  return (
    <div>
      <div onClick={() => setShow(true)}>
        <TopTitle setShow={setShow} title='Running tracker'/>
      </div>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Swicth Account</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSwitch}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
