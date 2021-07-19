import { React, useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, DropdownButton,Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Folder({ name, id, link }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={styles.folder}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>AA Drive</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p class='text-danger'>Deleted Files can't be recovered
                        </p>
                        <p class='text-success'>Do You Confirm Want to Delete</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger">
                            Confirm Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div class={styles.header}>
                    <DropdownButton id="dropdown-basic-button" title="" className={styles.dropDown}>
                        <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>
                    </DropdownButton>
                </div>
                <Link to={link} >
                    <div className={styles.icon}>        
                        <FontAwesomeIcon icon={faFolderPlus} className={styles.folderIcon} />
                    </div>
                </Link>
                <div className={styles.name}>{name}</div>
            </div>
        </>
    )
}

export default Folder
