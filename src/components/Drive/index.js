import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import styles from './styles.module.css'
import Navbar from '../Navbar/index'
// import { useSelector } from 'react-redux'
import Modals from '../Modal/index'
import emptyImg from '../../assets/img/empty.png'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setFolder } from '../../actions/currentFolderAction'
import axios from 'axios'
import url from '../../utilities'
import Message from '../Message'
import Loader1 from '../Loader/Loader-1'
function Drive() {

    const history=useHistory()
    const dispatch=useDispatch()
    const {currentFolder}=useSelector(state=>state.currentFolder)

    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin
    const [childFolder, setchildFolder] = useState(null)
    const [childFiles, setchildFiles] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    const setCurrentFolderDrive=async ()=>{
        const config = {
            headers: {
            'Content-Type': 'application/json',
            Authorization:`Bearer ${userInfo.token}`,
            },
        }
        const {data}=await axios.get(`${url}/api/folders/${userInfo._id}`,config)
        if(data.success)
        {
            dispatch(setFolder(String(data.data._id)))
        }
    }
    setCurrentFolderDrive()

    useEffect(() => {
        console.log(currentFolder)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${userInfo.token}` 
            }
        }
        const getFolderandFiles=async()=>{
            try{
                if(currentFolder){
                    setloading(true)
                    const {data}=await axios.get(`http://localhost:5000/api/folders/details/${currentFolder}`,config)
                    setloading(false)
                    if(data.success){
                        setchildFiles(data.data.childFiles)
                        setchildFolder(data.data.childFolder)
                    }else{
                        seterror('Some Error Occured')
                    }
                }
            }catch(e){
                console.log(e)
                seterror('Some Error Occured')
            }
        }
        getFolderandFiles()
    }, [dispatch,currentFolder])

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
           
            {/* Right Part */}
            <div className={styles.rightBox}>
                {/* Files To Show */}
                <div className="mt-4"><Button className={styles.backButton} onClick={()=>history.push('/home')}>Back</Button></div>
                <div className="row p-3">
                    {/* One File */}
                    {error && <Message variant={'danger'}>{error}</Message>}
                    {loading && <Loader1></Loader1>}
                    {
                        childFiles&&<div></div>
                    }
                    {
                        childFolder&&<div>Folder</div>
                    }
                </div>
            </div>
           </div>
        </div>
    )
}

export default Drive
