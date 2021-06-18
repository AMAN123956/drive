import React, { useState } from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/index'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Message from '../Message';
import url from '../../utilities'
import axios from 'axios'

function Home() {
    return (
        <div className="">
            {/* Navbar */}
            <Navbar />
            {/* Main Content(20:80) */}
            <div className="my-2 d-flex justify-content-flex-start">
                {/* Left Part(20%) */}
                <div className="w-40 d-flex flex-column align-items-center p-4 border border-primary">
                    <button className={styles.optionBtn}>
                        My Drive
                    </button>
                    <button className={styles.optionBtn}>
                        My Drive
                    </button>
                    <button className={styles.optionBtn}>
                        My Drive
                    </button>
                     <button className={styles.optionBtn}>
                        My Drive
                    </button>
                    <button className={styles.optionBtn}>
                        My Drive
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Home