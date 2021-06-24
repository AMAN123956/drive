import React from 'react'
import styles from './styles.module.css'

function File() {
    return (
        <div>
            <a href="https://www.amandixit.me" className="col-2 shadow mx-2 my-2">
                    <img className={styles.fileImg} alt="file_img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAVXZhlM-qA4bg_bOHRutl3wQVQdAbSWx_A&usqp=CAU" />
                    <h4 className={styles.fileHeading}>My File1</h4>
            </a>
        </div>
    )
}

export default File
