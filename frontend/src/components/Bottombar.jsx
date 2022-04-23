import React from "react"
import { Container, Nav, Navbar } from 'react-bootstrap'


const content = [
  {
    icon: 'a',
    title: '',
    path: '/running',
  },
  {
    icon: 'b',
    title: '',
    path: '',
  },
  {
    icon: 'c',
    title: '',
    path: '',
  },
  {
    icon: 'd',
    title: '',
    path: '',
  }
]

export default function BottomBar() {
  return <div >
    <Navbar fixed="bottom" variant="dark" bg="dark">
      <Container className="d-flex justify-content-evenly">
        {
          content.map((el, key) =>
            <Navbar.Text key={key} as="a" href={el.path}>{el.icon}</Navbar.Text>
          )
        }
      </Container>
    </Navbar>
  </div>
}


