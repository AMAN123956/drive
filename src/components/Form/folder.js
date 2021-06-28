import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal,Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import url from '../../utilities';
import Loader1 from '../Loader/Loader-1';
import Message from '../Message';

function FolderForm() {
    const [show, setShow] = useState(false);
    const [name, setname] = useState('')
    const [error, seterror] = useState(null)
    const [message, setmessage] = useState(null)
    const [loading, setloading] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const {currentFolder}=useSelector(state=>state.currentFolder)
    const {userInfo}=useSelector(state=>state.userLogin)

    if(error || message){
      setTimeout(() => {
        seterror(null)
        setmessage(null)
      }, 3000);
    }

    useEffect(() => {
      console.log('Hello')
    }, [])

    const submitFolderHandler=async (e)=>{
      e.preventDefault()
        try{
            if(name){
                let obj={
                    name:name,
                    parentFolder:currentFolder
                }
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:`Bearer ${userInfo.token}` 
                    }
                }
                // console.log(config)
                const {data}=await axios.post(`${url}/api/folders/create`,obj,config)
                setloading(true)
                console.log(data)
                if(data){
                    setloading(false)
                    if(data.success){
                        setmessage('Folder created !')
                    }else{
                        seterror(data.error)
                    }
                }
            }else{
                seterror('Fill folder name')
            }
        }catch(e){
            console.log(e)
            seterror('Some error occured try again')
        }
    }

    return (
        <>
          <Button className="btn btn-primary" onClick={handleShow}>
            Folder Upload
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>AA DRIVE</Modal.Title>
            </Modal.Header>
             <Modal.Body>
             <Form>
                  {error && <Message variant={'danger'}>{error}</Message>}
                  {message && <Message variant={'success'}>{message}</Message>}
                  <Form.Group controlId="formBasicName">
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter File Name" value={name} onChange={(e)=>setname(e.target.value)}/>
                  </Form.Group>
                  {
                    loading?<Loader1></Loader1>:<Button variant="primary" type="submit" onClick={submitFolderHandler}>Create</Button>
                  }
              </Form>
             </Modal.Body>
            
          </Modal>
        </>
      );
}

export default FolderForm
