import React, { useState } from 'react'
import { Button, Modal,Form } from 'react-bootstrap'
import { openUploadWidget } from "../../util/CloudinaryService";
import styles from './styles.module.css'

function FileForm() {
    const [img_url, setimg_url] = useState("");
    const [show, setShow] = useState(false);
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
            console.log(photos);
            if(photos.event === 'success'){
                console.log("hello"+photos.info.secure_url)
                setimg_url(photos.info.secure_url)
               
            }
          } else {
            console.log(error);
          }
        })
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
                        <Form.Group controlId="formBasicName">
                            <Form.Label>File Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter File Name" />
                            </Form.Group>
                        <Button variant="danger" type="submit" >
                            Submit
                        </Button>
                    </Form>
                   
                </Modal.Body>
               
            </Modal>
        </>
    );
}

export default FileForm
