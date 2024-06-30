import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <>
        <Navbar className="bg-transparent border border-secondary">
        <Container>
          <Navbar.Brand >
          <FontAwesomeIcon icon={faVideo} beat className='text-warning' size='2xl' />
           <span className='text-warning ms-3 fs-5'> Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
