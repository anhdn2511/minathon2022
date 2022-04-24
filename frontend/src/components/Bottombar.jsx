import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { MdMessage, MdOutlineExplore } from "react-icons/md";

import { BsFillPersonFill } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../redux/menuSlice";
import { Link, Navigate } from "react-router-dom";

export default function BottomBar() {
  const myMenu = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const content = [
    {
      icon: <AiFillHome size={"2em"} />,
      title: "",
      path: "/",
    },
    {
      icon: <MdOutlineExplore size={"2.5em"} />,
      title: "",
      path: "/explore",
    },
    {
      icon: <MdMessage size={"2.5em"} />,
      title: "",
      path: "/message",
    },
    {
      icon: <BsFillPersonFill size={"2.5em"} />,
      title: "",
      path: "/account",
    },
  ];

  return (
    <div>
      <Navbar
        className="border border-primary"
        fixed="bottom"
        variant="dark"
        bg="white"
      >
        <Container className="d-flex justify-content-evenly">
          {content.map((el, key) => (
            <Link to={el.path}>
              <Navbar.Text
                onClick={() => {
                  dispatch(change(el.path));
                }}
                className={
                  myMenu.path === el.path
                    ? "text-primary"
                    : "text-black-50 opacity-25"
                }
                key={key}
                as="a"
              >
                {el.icon}
              </Navbar.Text>
            </Link>
          ))}
        </Container>
      </Navbar>
    </div>
  );
}
