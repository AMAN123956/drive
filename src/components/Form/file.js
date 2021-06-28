import React, { useEffect, useState } from 'react'
import Message from '../Message/index'
import { Button, Modal,Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { openUploadWidget } from "../../util/CloudinaryService";
import axios from 'axios';
import styles from './styles.module.css'
import Loader1 from '../Loader/Loader-1';
import url from '../../utilities';

function FileForm() {
    const [img_url, setimg_url] = useState("");
    const [show, setShow] = useState(false);
    const [fileURL, setfileURL] = useState(null)
    const [name, setname] = useState('')
    const [error, seterror] = useState(null)
    const [message, setmessage] = useState(null)
    const [loading, setloading] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    
    const {currentFolder}=useSelector(state=>state.currentFolder)
    const {userInfo}=useSelector(state=>state.userLogin)

    console.log(currentFolder)

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
                setimg_url(photos.info.secure_url)
            }
        })
    }

    const submitFileHandler=async (e)=>{
        e.preventDefault()
        try{
            if(fileURL && name){
                let obj={
                    name:name,
                    link:String(fileURL),
                    parentFolder:currentFolder
                }
                console.log(obj)
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:`Bearer ${userInfo.token}` 
                    }
                }
                console.log(config)
                const {data}=await axios.post(`http://localhost:5000/api/files/create`,obj,config)
                setloading(true)
                console.log(data)
                if(data){
                    setloading(false)
                    if(data.success){
                        setmessage('File created !')
                    }else{
                        seterror(data.error)
                    }
                }
            }else{
                seterror('Fill Name and Upload File')
            }
        }catch(e){
            console.log(e)
            seterror('Some error occured try again')
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
                    { img_url !== ""?(
                    <img src={img_url} className={styles.previewImg}
                        alt="preview_img"
                    />): null
                    }
                    <button
                        onClick={() => beginUpload()}
                        className="my-3 btn btn-info mb-5 w-100">
                        { img_url ===""?("+Upload File"):("+Change File")}</button>
                    
                    <Form>
                        {error && <Message variant={'danger'}>{error}</Message>}
                        {message && <Message variant={'success'}>{message}</Message>}
                        <Form.Group controlId="formBasicName">
                            <Form.Label>File Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter File Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                            </Form.Group>
                            {
                                loading ? <Loader1></Loader1> :<Button variant="danger" type="submit" onClick={submitFileHandler} disabled={loading}>Submit</Button>
                            }
                    </Form>
                
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FileForm
