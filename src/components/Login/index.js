import React, { useState } from 'react'
import styles from './styles.module.css'
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Message from '../Message';
import url from '../../utilities'
import axios from 'axios'
function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(null)
    const [message, setmessage] = useState(null)

    if(error || message){
        setTimeout(() => {
            seterror(null)
            setmessage(null)
        }, 3000);
    }

    const submitLogin=async(e)=>{
        try{
            let obj={
                "email":email,
                "password":password
            }
            const {data}=await axios.post(`${url}/api/users/login`,obj)
            if(data.success){
                setmessage('Logged in Successfully !')
            }else{
                seterror(data.message)
            }
            console.log(data)
        }catch(e){
            console.log(e)
            seterror('Some error occured')
        }
    }
    return (
        <div className="container p-5 shadow my-2 d-flex justify-content-center align-items-center " style={{ background: "#f7fafb", height: "600px" }}>
            <div className="form-container p-5 shadow">
                <div className="mt-4" >
                    {error&&<Message variant={'danger'}>{error}</Message>}
                    {message && <Message variant="success">{message}</Message>}
                    <Form onSubmit={submitLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e)=>{setemail(e.target.value)}}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} required onChange={(e)=>{setpassword(e.target.password)}} />
                        </Form.Group>
                        <Button type="submit" className={styles.btn}>
                            Login
                        </Button>
                    </Form>
                    <div>
                        <p>Don't have an account ? <Link to='/'>Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
