import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import styles from './styles.module.css'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
// import Modals from '../Modal/index'
import { Button,Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setFolder } from '../../actions/currentFolderAction'
import axios from 'axios'
import url from '../../utilities'
import Folder from '../Folder/index'
import File from '../File/index'
import Message from '../Message'
import Loader1 from '../Loader/Loader-1'

function Drive() {

    const history=useHistory()
    const dispatch=useDispatch()
    const {currentFolder}=useSelector(state=>state.currentFolder)

    // const {token} = useSelector(state => state.config)

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



    useEffect(() => {
        setCurrentFolderDrive()
        const userInfoFromStorage=localStorage.getItem('driveUserInfo')?JSON.parse(localStorage.getItem('driveUserInfo')):null

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${userInfoFromStorage.token}` 
            }
        }
        const getFolderandFiles=async()=>{
            try{
                if(currentFolder){
                    console.log('Folder called')
                    setloading(true)
                    const {data}=await axios.get(`${url}/api/folders/details/${currentFolder}`,config)
                    console.log(data)
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
        // eslint-disable-next-line
    }, [dispatch,currentFolder])

    return (
    
        <div className="">
            <Navbar />
            <div className="my-2 d-flex justify-content-flex-start">
             <Sidebar />
            
            {/* Right Part */}
            <div className={styles.rightBox}>
                <div className="mt-2"><Button className={styles.backButton} onClick={()=>history.push('/home')}>Back</Button></div>
                <div className="p-1">
                    {error && <Message variant={'danger'}>{error}</Message>}
                        {loading && <Loader1></Loader1>}
                        <h4 className="mt-3">Folder</h4>
                    <div className={styles.fContainer}>
                        {
                        childFolder&&
                        <Row>
                        {
                            childFolder.map((folder)=>{return (
                                <Col key={folder.folder} sm={12} md={6} lg={4} xl={3}>
                                    <Link to={`/folder/${folder._id}`} style={{textDecoration:'none'}}>
                                        <Folder name={folder.name} id={folder.folder} ></Folder>
                                    </Link>
                                </Col>
                            )})
                        }
                        </Row>
                    }
                    </div>
                    <h4 className="mt-3">Files</h4>
                    <div className={styles.fContainer}>
                       {
                        childFiles&&
                        <Row>
                            {
                                childFiles.map((file)=>{return (
                                    <Col key={file.file} sm={12} md={6} lg={4} xl={3}>
                                        <File name={file.name} id={file.file}></File>
                                    </Col>
                                )})
                            }
                        </Row>
                            }
                            </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Drive
