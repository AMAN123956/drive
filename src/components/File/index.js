import React from 'react'
import styles from './styles.module.css'
function File({name,id}) {
    return (
        <>
            <div className={styles.file}>
                <div className={styles.icon}></div>
                <div className={styles.name}>{name}</div>
            </div>
        </>
    )
}

export default File
