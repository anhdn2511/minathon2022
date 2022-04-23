import React, { useState, useMemo, useRef} from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.css'
import { Modal, Button } from 'react-bootstrap'

const profiles = [
    {
        name: 'Cu Do Thanh Nhan',
        account: 'cudothanhnhan1',
        tree: 1024,
        badges: 'Rookie',
        routes: [
        'Tan Lap',
        'Vanh Dai DHQG',
        'Nguyen Du'
        ],
        age: 25,
        description: 'Hello I am Nhan',
        image: 'https://i.imgur.com/4pxFQpD.png'
    },
    {
        name: 'Nguyen Quang Anh',
        account: 'cudothanhnhan2',
        tree: 1024,
        badges: 'Rookie',
        routes: [
        'Tan Lap',
        'Vanh Dai DHQG',
        'Nguyen Du'
        ],
        age: 25,
        description: 'Hello I am Nhan',
        image: 'https://i.imgur.com/LWMwN1k.jpg'
    },
    {
      name: 'Nguyen Huu Phuc',
      account: 'cudothanhnhan3',
      tree: 1024,
      badges: 'Rookie',
      routes: [
      'Tan Lap',
      'Vanh Dai DHQG',
      'Nguyen Du'
      ],
      age: 25,
      description: 'Hello I am Nhan',
      image: 'https://i.imgur.com/K0rR3dq.png'
  },
]

function Swiper () {
  const [accepted, setAccepted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => setShowModal(false)
  const handleShowModal = () => setShowModal(true)

  const [currentIndex, setCurrentIndex] = useState(profiles.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(profiles.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < profiles.length - 1

  //const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
    showMessage(direction)
  }

  const showMessage = (direction) => {
    if (direction === 'right') {
      handleShowModal()
    }
    else {
      alert('Failed')
    }
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className='container row justify-content-center align-items-center rootSwipe'>
      <Modal show={showModal} onHide={handleCloseModal} style={{width: 400}}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Confirm Matching</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            {accepted ? 'Accepted' : 'Wait for that person to accept'}
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={handleCloseModal} className='bg-success'>Chat</Button>
              <Button onClick={handleCloseModal} className='bg-primary'>Go to Event</Button>
          </Modal.Footer>

      </Modal>

      <div className='cardContainerSwipe col-md-10'>
        {profiles.map((profile, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={profile.account}
            onSwipe={(dir) => swiped(dir, profile.name, index)}
            onCardLeftScreen={() => outOfFrame(profile.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + profile.image + ')'}}
              className='cardSwipe d-flex flex-column-reverse align-items-start'
            >
              <p className = "h6 ms-3 text-secondary">Đã trồng được {profile.tree} cây</p>
              <p className = "h3 ms-3 text-secondary">{profile.name}, {profile.age}</p>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttonSwipe col-md-10 justify-content-center'>
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button> */}
        <button type="button" className="btn btn-danger rounded-circle buttonOfSwipe" onClick={() => showMessage('left')}>Deny</button>
        {/* <button className="btn btn-primary rounded-circle buttonOfSwipe" style={{ backgroundColor: !canGoBack && '#c9bebd' }} onClick={() => goBack()}>Undo swipe!</button> */}
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button> */}
        <button type="button" className="btn btn-success rounded-circle buttonOfSwipe" onClick={() => showMessage('right')}>Accept</button>
      </div>
    </div>
  )
}

export default Swiper
