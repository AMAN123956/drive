import React from 'react'
import styles from './styles.module.css'
import { Navbar, Nav, FormControl, InputGroup, DropdownButton, Dropdown, Button  } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/userActions'

function Menu() {

    const history=useHistory()
    const dispatch=useDispatch()

    const logoutHandler=()=>{
        console.log('Clicked')
        dispatch(logout())
        history.push('/login')
    }

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
                <Nav className="ml-auto align-items-center">
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                    <Nav.Link className="text-danger"><Button className={styles.btn} onClick={logoutHandler}>Logout</Button></Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}



export default Menu