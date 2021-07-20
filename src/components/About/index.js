import React from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/index'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDatabase, faDesktop, faCalendarWeek, faSdCard } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <div>
            <Navbar />
            <div className="my-2 d-flex justify-content-flex-start">
                {/* Left Part(20%) */}
                <div className={styles.leftSideBar}>
                    {/* Add File/Folder */}
                    {/* <Modals /> */}
                    <br />
                    <br />
                    <Link to="/home" className={styles.optionBtn} >
                        <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Home
                    </Link>
                    <Link to="/drive" className={styles.optionBtn} >
                        <FontAwesomeIcon icon={faDatabase} />&nbsp;&nbsp;My Drive
                    </Link>
                    <button className={styles.optionBtn}>
                        <FontAwesomeIcon icon={faDesktop} />&nbsp;&nbsp; Computers
                    </button>
                    <button className={styles.optionBtn}>
                        <FontAwesomeIcon icon={faCalendarWeek} />&nbsp;&nbsp; Recent
                    </button>
                    <button className={styles.optionBtn}>
                        <FontAwesomeIcon icon={faSdCard} />&nbsp;&nbsp; Bin
                    </button>
                </div>
                {/* Right Side */}
                <div className={styles.rightBox}>
                    <div className={styles.teamBox}>
                    <h2 className="text-primary my-3" style={{fontSize:'3rem'}}>Meet Our Team</h2>
                    <div className="d-flex justify-content-flex-start my-5">
                            <Card style={{ width: '22rem' , height:'28rem' }}>
                            <Card.Img variant="top" className={styles.cardImg} src="https://avatars.githubusercontent.com/u/55759980?v=4" />
                            <Card.Body>
                                    <Card.Title className='text-center' style={{ color: '#20bead', fontSize: '1.8rem'}}>Abhinav Yadav</Card.Title>
                                </Card.Body>
                                  <Card.Footer className="d-flex justify-content-center">
                                    <a href="https://github.com/geekyabhi" target="_blank"  rel="noreferrer">
                                    <img className={styles.socialImg} alt='github-logo'
                                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/geekyabhi/" target="_blank"  rel="noreferrer">
                                        <img className={styles.socialImg} alt='linkedin-logo'
                                        src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png' />
                                    </a>
                                    <a href="https://abhi-strike.netlify.app/" target="_blank"  rel="noreferrer">
                                        <img className={styles.socialImg} alt='portfolio-website'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&usqp=CAU' />
                                    </a>
                                </Card.Footer>
                        </Card>
                        {/* Second Card */}
                        <Card className="mx-5" style={{ width: '22rem',height:'28rem' }}>
                            <Card.Img variant="top" className={styles.cardImg} src="https://avatars.githubusercontent.com/u/56161073?v=4" />
                            <Card.Body>
                                <Card.Title className='text-center' style={{ color: '#20bead', fontSize: '1.8rem'}}>Aman Dixit</Card.Title>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-center">
                                    <a href="https://github.com/AMAN123956" target="_blank"  rel="noreferrer">
                                    <img className={styles.socialImg} alt='github-logo'
                                        src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
                                    </a>
                                    <a href="https://www.linkedin.com/in/aman-dixit-b371b9190/" target="_blank"  rel="noreferrer">
                                        <img className={styles.socialImg} alt='linkedin-logo'
                                        src='https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png' />
                                    </a>
                                    <a href="https://www.amandixit.me" target='_blank'  rel="noreferrer">
                                        <img className={styles.socialImg} alt='portfolio-website'
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&usqp=CAU' />
                                    </a>
                                </Card.Footer>
                        </Card>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default About;
