import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";
import { Modal, Button } from "react-bootstrap";
import { profileDB } from "../../redux/profileData";
import { useDispatch, useSelector } from "react-redux";
import { updateFriend } from "../../redux/profileSlice";

function Swiper() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const findRecommend = () => {
    return profileDB.filter(
      (ele) =>
        ele.name !== profile.name &&
        !profile.friends.includes(ele.name) &&
        ele.routes.some((route) => profile.routes.includes(route))
    );
  };
  const suggestProfile = findRecommend();
  console.log(profileDB);
  const [accepted, setAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [currentIndex, setCurrentIndex] = useState(suggestProfile.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(() => {
    return Array(findRecommend())
      .fill(0)
      .map((i) => React.createRef());
  }, []);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < suggestProfile.length - 1;

  //const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);

    if (direction === "right" && profile.name === "Taylor Swift") {
      handleShowModal();
    }
    // else if(direction === 'right'){
    //   dispatch(updateFriend(suggestProfile[index].name))
    // }
  };

  const showMessage = (direction) => {
    if (direction === "right") {
      // handleShowModal()
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="container row justify-content-center align-items-center rootSwipe">
      <Modal show={showModal} onHide={handleCloseModal} style={{ width: 400 }}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Hooray!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>David Beckham also likes you</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} className="bg-success">
            Chat now
          </Button>
          <Button onClick={handleCloseModal} className="bg-primary">
            Invite him to run
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="cardContainerSwipe col-md-10">
        {suggestProfile.map((profile, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={profile.account}
            onSwipe={(dir) => swiped(dir, profile.name, index)}
            onCardLeftScreen={() => outOfFrame(profile.name, index)}
          >
            <div
              style={{ backgroundImage: "url(" + profile.image + ")"}}
              className="cardSwipe d-flex flex-column-reverse align-items-start"
            >
              <div className="text-dark m-2 text-align-flex-start">
                <h3 className="fw-bold text-secondary">{profile.name}</h3>
                <h5 className="fw-bold text-secondary">Tree planted: {profile.tree}</h5>
                <h5 className="fw-bold text-secondary">Connections: 12</h5>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttonSwipe col-md-10 justify-content-center">
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button> */}
        <button
          type="button"
          className="btn btn-danger rounded-circle buttonOfSwipe"
          onClick={() => showMessage("left")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        {/* <button className="btn btn-primary rounded-circle buttonOfSwipe" style={{ backgroundColor: !canGoBack && '#c9bebd' }} onClick={() => goBack()}>Undo swipe!</button> */}
        {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button> */}
        <button
          type="button"
          className="btn btn-success rounded-circle buttonOfSwipe"
          onClick={() => showMessage("right")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-check-lg"
            viewBox="0 0 16 16"
          >
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Swiper;
