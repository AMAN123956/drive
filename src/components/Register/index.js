import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Button, Form } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'
import Message from '../Message/index';
import Loader from '../Loader/index'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/userActions';

function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [error, seterror] = useState(null)

    const dispatch=useDispatch()
    const userRegister=useSelector(state=>state.userRegister)

    const history=useHistory()

    let {loading,error:registerError,userInfo}=userRegister


    useEffect(() => {
        if(userInfo){
            history.push('/home')
        }
    // eslint-disable-next-line
    }, [userInfo,registerError])


    if(error || registerError){
        setTimeout(() => {
            seterror(null)
        }, 3000);
    }
    
    if(registerError){
        setTimeout(() => {
            registerError= null
        }, 3000);
    }

    const submitRegister=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            seterror('Password Mismatch')
        }else{
            dispatch(register(name,email,password))
        }
    }

    return(
        <div className="container p-5 shadow d-flex justify-content-center align-items-center " style={{ background: "#f7fafb", height: "600px" }}>
            <div className="form-container p-5 shadow">
            {error&&<Message variant={'danger'}>{error}</Message>}
            {registerError&&<Message variant={'danger'}>{registerError}</Message>}
            {loading && <Loader></Loader>}
                <div className="mt-4" style={{ height: "420px" }}>
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
                        <Button type="submit" className={styles.btn} disabled={loading}>
                            Signup
                        </Button>
                    </Form>
                    <div className="mt-3">
                        <p>Already have an account ? <Link to='/login'>Login</Link></p>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Register
