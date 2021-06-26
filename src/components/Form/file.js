import React, { useEffect, useState } from 'react'
import Message from '../Message/index'
import { Button, Modal,Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { openUploadWidget } from "../../util/CloudinaryService";
import axios from 'axios';
function FileForm() {
    const [show, setShow] = useState(false);
    const {currentFolder}=useSelector(state=>state.currentFolder)
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin
    const [fileURL, setfileURL] = useState(null)
    const [name, setname] = useState('')
    const [error, seterror] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const beginUpload = tag => {

        const uploadOptions = {
            cloudName: 'dtqzhg98l',
            tags: [tag,"my image"],
            uploadPreset: 'vdkuxmpd'
        };

        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                // console.log(photos);
            if(photos.event === 'success'){
                setfileURL(photos.info.secure_url)
                console.log(photos.info.secure_url)
            }
            }else{
                console.log(error);
            }
        })
    }

    const submitFileHandler=async ()=>{
        try{
            if(fileURL && name){
                let obj={
                    name:name,
                    link:fileURL,
                    parentFolder:currentFolder
                }
                console.log(obj)
                const config = {
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${userInfo.token}`,
                    },
                }
                console.log(config)
                const {data}=await axios.post('http://localhost:5000/api/files/create',obj,config)
                console.log(data)
            }else{
                seterror('Fill Name and Upload File')
            }
        }catch(e){

        }
    }


    return (
        <>
            <Button className="btn btn-primary mx-2" onClick={handleShow}>
                File Upload
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>AA DRIVE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {error && <Message variant={'danger'}>{error}</Message>}
                        <Form.Group controlId="formBasicName">
                            <Form.Label>File Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter File Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                            </Form.Group>
                    </Form>
                    <button onClick={() => beginUpload()} className="my-3 btn btn-info mb-5 w-100">Upload file</button>
                    <Button variant="primary" type="submit" onClick={submitFileHandler}>Submit</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FileForm
