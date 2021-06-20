import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/index'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {

    const history=useHistory()
    
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
    // eslint-disable-next-line
    }, [userInfo])

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