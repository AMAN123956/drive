import React from 'react'
import styles from './styles.module.css'
function Folder({name,id}) {
    return (
        <>
            <div className={styles.folder}>
                <div className={styles.icon}></div>
                <div className={styles.name}>{name}</div>
            </div>
        </>
    )
}

export default Folder
