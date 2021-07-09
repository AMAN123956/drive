import React from 'react'
import Navbar from '../Navbar/index';
import Sidebar from '../Sidebar/index';
import styles from './styles.module.css';
// import { Button } from 'react-bootstrap'
const Folders = ({ match }) => {

    const id = match.params.id


    return (
        <div className="">
            <Navbar />
            <div className="my-2 d-flex justify-content-flex-start">
                <Sidebar />

                {/* Right Part  Abhinav here u have to write u'r logic */}
                <div className={styles.rightBox}>
                   {id}
                </div>
            </div>
        </div>
    )
}

export default Folders
