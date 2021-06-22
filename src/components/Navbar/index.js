import React from 'react'
import styles from './styles.module.css'
import { Navbar, Nav, FormControl, InputGroup, DropdownButton, Dropdown  } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <>
            <Navbar className="p-3" bg="light" variant="light">
                <Link to="/home">
                    <Navbar.Brand href="#">AA.Drive</Navbar.Brand>
                </Link>
                <InputGroup className={styles.searchBox}>
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />

                    <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-2"
                    >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                </InputGroup>
                <Nav className="ml-auto">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                    <Link to="">
                        <Nav.Link className="text-danger">Logout</Nav.Link>
                    </Link>
                   
                </Nav>

            </Navbar>
        </>
    )
}



export default Menu