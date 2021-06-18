import React, { useState } from 'react'
import styles from './styles.module.css'
import { Navbar, Nav, FormControl, InputGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap'


function Menu() {
    return (
        <>
            <Navbar className="p-3" bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
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
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>

            </Navbar>
        </>
    )
}



export default Menu