import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Message from '../Message';
import url from '../../utilities'
import axios from 'axios'

function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error, seterror] = useState(null)
    const [message, setmessage] = useState(null)

    if(error || message){
        setTimeout(() => {
            seterror(null)
            setmessage(null)
        }, 3000);
    }
    
    const submitRegister=async(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            seterror('Password Mismatch')
        }else{
            try{     
                let obj={
                    "name":name,
                    "email":email,
                    "password":password
                }
                const {data}=await axios.post(`${url}/api/users`,obj)
                if(data.success){
                    setmessage('Registered Successfully !')
                }else{
                    seterror(data.message)
                }
                console.log(data)
            }catch(e){
                console.log(e)
                seterror('Some error occured')
            }
        }
    }
    return(
        <div className="container p-5 shadow my-2 d-flex justify-content-center align-items-center " style={{ background: "#f7fafb", height: "600px" }}>
            <div className="form-container p-5 shadow">
                <div className="mt-4" style={{ height: "400px" }}>
                    {error&&<Message variant={'danger'}>{error}</Message>}
                    {message && <Message variant="success">{message}</Message>}
                    <Form onSubmit={submitRegister}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" required value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e)=>{setemail(e.target.value)}} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required value={confirmPassword} onChange={(e)=>{setconfirmPassword(e.target.value)}} />
                        </Form.Group>
                        <Button type="submit" className={styles.btn}>
                            Signup
                        </Button>
                    </Form>
                    <div mt-3>
                        <p>Already have an account ? <Link to='/login'>Login</Link></p>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Register
