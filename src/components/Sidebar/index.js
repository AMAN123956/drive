import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

// import Modals from '../Modal/index'
import { Button} from 'react-bootstrap'
import FileForm from '../Form/file'
import FolderForm from '../Form/folder'

function Sidebar() {
    const [count, setcount] = useState(false)
    const handleNew = () => {
        setcount(!count)
    }
    return (
        <div className={styles.leftSideBar}>
        <Button className={styles.addFileBtn} onClick={handleNew}>
            + New
            </Button>
            {count === true ? (<div className={styles.selectBox}>
                <FolderForm />
                <FileForm />
            </div>): null }
            
            <br />
            <Link to="/drive" className={styles.optionBtn} >
                My Drive
            </Link>
            <button className={styles.optionBtn}>
                Computers
            </button>
            <button className={styles.optionBtn}>
                Shared with me
            </button>
                <button className={styles.optionBtn}>
                Recent
            </button>
            <button className={styles.optionBtn}>
                Starred
            </button>
        </div>
    )
}

export default Sidebar
