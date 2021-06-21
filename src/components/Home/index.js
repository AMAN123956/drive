import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/index'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modals from '../Modal/index'

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
                <div className={styles.leftSideBar}>
                    {/* Add File/Folder */}
                    <Modals />
                    <br />
                    <button className={styles.optionBtn}>
                        My Drive
                    </button>
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
           
            {/* Right Part */}
            <div className={styles.rightBox}>
                {/* Files To Show */}
                <div className="row p-3">
                    {/* One File */}
                        <a href="https://www.amandixit.me" className="col-2 shadow mx-2 my-2">
                            
                            <img className={styles.fileImg} alt="file_img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAVXZhlM-qA4bg_bOHRutl3wQVQdAbSWx_A&usqp=CAU" />
                              <h4 className={styles.fileHeading}>My File1</h4>
                        </a>
                        <a href="https://drive-strike.netlify.app/" className="col-2 shadow mx-2 my-2">
                            <img className={styles.fileImg} alt="file_img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAVXZhlM-qA4bg_bOHRutl3wQVQdAbSWx_A&usqp=CAU" />
                            <h4 className={styles.fileHeading}>My File2</h4>
                        </a>
                        <a href="https://drive-strike.netlify.app/" className="col-2 shadow mx-2 my-2">
                            <img className={styles.fileImg} alt="file_img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAVXZhlM-qA4bg_bOHRutl3wQVQdAbSWx_A&usqp=CAU" />
                              <h4 className={styles.fileHeading}>My File3</h4>
                        </a>
                        <a href="https://drive-strike.netlify.app/" className="col-2 shadow mx-2 my-2">
                            <img className={styles.fileImg}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAVXZhlM-qA4bg_bOHRutl3wQVQdAbSWx_A&usqp=CAU" />
                              <h4 className={styles.fileHeading}>My File3</h4>
                        </a>
                        <a href="https://drive-strike.netlify.app/" className="col-2 shadow mx-2 my-2">
                            <img className={styles.fileImg}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAVXZhlM-qA4bg_bOHRutl3wQVQdAbSWx_A&usqp=CAU" />
                              <h4 className={styles.fileHeading}>My File3</h4>
                        </a>
                        <a href="https://drive-strike.netlify.app/" className="col-2 shadow mx-2 my-2">
                            <img className={styles.fileImg}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAVXZhlM-qA4bg_bOHRutl3wQVQdAbSWx_A&usqp=CAU" />
                              <h4 className={styles.fileHeading}>My File3</h4>
                        </a>
                </div>
                </div>
                </div>
        </div>
    )
}


export default Home