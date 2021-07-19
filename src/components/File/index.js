import { React, useState } from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload} from '@fortawesome/free-solid-svg-icons'
import { Dropdown, DropdownButton,Button, Modal } from 'react-bootstrap'

function File({ name ,link}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // console.log(link)
    return (
        <>
            <div className={styles.file}>
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
                <div className={styles.icon}>
                    <a href={link} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFileDownload}className={styles.fIcon}  /></a>
                </div>
                <div className={styles.name}>{name}</div>
            </div>

        </>
    )
}

export default File
