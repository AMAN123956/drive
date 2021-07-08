import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

function Folder({name,id}) {
    return (
        <>
            <div className={styles.folder}>
                <div className={styles.icon}>
                    <FontAwesomeIcon icon={faFolderPlus}
                        className={styles.folderIcon} />
                </div>
                <div className={styles.name}>{name}</div>
            </div>
        </>
    )
}

export default Folder
