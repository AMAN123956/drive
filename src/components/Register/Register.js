import React, { useState } from 'react'
import styles from './Register.module.css'
import Left from '../UI/Left'
import { Button, Form } from 'react-bootstrap';

function Register() {
    const [count, setCount] = useState(0);
    /* Handle Click (Toggle b/w Login/Signup) */
    const handleRegister = () => {
        if(count!==0)
           setCount(count-1)
            
    }
    const handleLogin = () => {
        if(count!==1)
            setCount(count+1)
    }
    return (
        <div className="container p-5 shadow my-5 d-flex justify-content-center" style={{background:"#f7fafb"}}>
            {/* Left Section  */}
            <Left />
            <div className="form-container p-5 shadow" style={{height:"300px;"}}>
                <div className="d-flex  mt-3">
                    <button className={styles.toggleBtn} style={{backgroundColor: count===0 ? '#20bead' : 'lightgray'}} onClick={handleRegister}>Register</button>
                    <button className={styles.toggleBtn} style={{backgroundColor: count===1 ? '#20bead' : 'lightgray'}} onClick={handleLogin}>Login</button>
                </div>
                {/* Register Form */}
                {count === 0 ? (
                    <div className="mt-4">
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button  type="submit" className={styles.btn}>
                                Signup
                            </Button>
                        </Form>
                    </div>) : null
                }
                {/* Login Form */}
                {count === 1 ? (
                    <div className="mt-4">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" className={styles.btn}>
                            Login
                        </Button>
                    </Form>
                    </div>
                ) : null
                }

            </div>
        </div>
    )
}

export default Register
