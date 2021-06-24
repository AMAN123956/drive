import React, { useState } from 'react'
import { Button, Modal,Form } from 'react-bootstrap'

function FolderForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                  <Form.Group controlId="formBasicName">
                            <Form.Label>Folder Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter File Name" />
                            </Form.Group>
                           
                            <br />
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
             </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default FolderForm
