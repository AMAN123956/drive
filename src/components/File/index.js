import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload} from '@fortawesome/free-solid-svg-icons'
import { Dropdown, DropdownButton } from 'react-bootstrap'
function File({ name, id }) {
    return (
        <>


            <div className={styles.file}>
                <div class={styles.header}>
                    <DropdownButton id="dropdown-basic-button"  title="" className={styles.dropDown}>
                        <Dropdown.Item href="#/action-1" type="button">Copy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faFileDownload}
                        className={styles.fIcon} />
                </div>
                <div className={styles.name}>{name}</div>
            </div>

        </>
    )
}

export default File
