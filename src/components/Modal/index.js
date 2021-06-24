import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './styles.module.css' 
import FileForm from '../Form/file'
import FolderForm from '../Form/folder'
function Modals() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
          <Button className={styles.addFileBtn} onClick={handleShow}>
            + New
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>AA DRIVE</Modal.Title>
            </Modal.Header>
          <Modal.Body>
            <FolderForm />
            <FileForm />
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

export default Modals