import React, { useState, useEffect } from "react";
import axios from "axios";
import url from "../../utilities";
import styles from "./styles.module.css";
import {
	Navbar,
	Nav,
	FormControl,
	InputGroup,
	DropdownButton,
	Dropdown,
	ButtonGroup,
	Button,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

function Menu() {
	const history = useHistory();
	const dispatch = useDispatch();

	const logoutHandler = () => {
		// console.log('Clicked')
		dispatch(logout());
		history.push("/login");
	};
	// States
	const [name, setname] = useState(null);
	const [imgurl, setimgurl] = useState(null);

	// useEffect
	useEffect(() => {
		const userInfoFromStorage = localStorage.getItem("driveUserInfo")
			? JSON.parse(localStorage.getItem("driveUserInfo"))
			: null;

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfoFromStorage.token}`,
			},
		};
		const getData = async () => {
			const { data } = await axios.get(`${url}/api/users/`, config);

			// console.log(data);

			if (data.success) {
				setname(data.data.name);
				setimgurl(data.data.imgurl);
			} else {
				console.log("error");
			}
		};
		getData();
		// eslint-disable-next-line
	}, []);
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
						<Dropdown.Item href="#">
							Something else here
						</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="#">Separated link</Dropdown.Item>
					</DropdownButton>
				</InputGroup>
				<Nav className="ml-auto align-items-center">
					<Nav.Link href="/about">
						<h5 className="text-dark">About</h5>
					</Nav.Link>
					&nbsp;
					<Dropdown as={ButtonGroup}>
						<Button variant="outline-info">
							<img
								src={imgurl}
								className={styles.navImg}
								alt="user_img"
							/>
							&nbsp;{name}
						</Button>
						<Dropdown.Toggle
							split
							variant="primary"
							id="dropdown-split-basic"
						/>
						<Dropdown.Menu>
							<Dropdown.Item href="/profile">
								Profile
							</Dropdown.Item>
							<Dropdown.Item
								href="#"
								className="text-danger"
								onClick={logoutHandler}
							>
								Logout
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Navbar>
		</>
	);
}

export default Menu;
