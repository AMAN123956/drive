import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { Button, Form } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'
import Message from '../Message/index'
import Loader from '../Loader/index'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(null)

    const history=useHistory()
    const dispatch=useDispatch()

    const userLogin=useSelector(state=>state.userLogin)
    const {error:loginError,loading,userInfo}=userLogin

    if(error){
        setTimeout(() => {
            seterror(null)
        }, 3000);
    }

    useEffect(() => {
        if(userInfo){
            history.push('/home')
        }
    // eslint-disable-next-line
    }, [userInfo])

    const submitLogin=async(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
    }
    return (
        <div className="container p-5 shadow my-2 d-flex justify-content-center align-items-center " style={{ background: "#f7fafb", height: "600px" }}>
            <div className="form-container p-5 shadow">
            {error&&<Message variant={'danger'}>{error}</Message>}
            {loginError && <Message variant='danger'>{loginError}</Message>}
            {loading&&<Loader></Loader>}
                <div className="mt-4" >
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
                            <Form.Control type="password" placeholder="Password" value={password} required onChange={(e)=>{setpassword(e.target.value)}} />
                        </Form.Group>
                        <Button type="submit" className={styles.btn}>
                            Login
                        </Button>
                    </Form>
                    <div className="mt-3">
                        <p>Don't have an account ? <Link to='/'>Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
