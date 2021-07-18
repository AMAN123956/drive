import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Navbar from '../Navbar/index'
import { Link,useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Modals from '../Modal/index'
import emptyImg from '../../assets/img/empty.png'
// import { useDispatch } from 'react-redux'

function Home() {

    
    const history=useHistory()
    // const dispatch = useDispatch()
    
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin

    useEffect(() => {
        if(!userInfo){
            history.push('/')
        }
    // eslint-disable-next-line
    }, [userInfo])

    // const setCurrentFolderDrive=async ()=>{
        
    //     console.log('Set folder called')
    //     const config = {
    //         headers: {
    //         'Content-Type': 'application/json',
    //         Authorization:`Bearer ${userInfo.token}`,
    //         },
    //     }
    //     const {data}=await axios.get(`${url}/api/folders/${userInfo._id}`,config)
    //     if(data.success)
    //     {
    //         dispatch(setFolder(String(data.data._id)))
    //     }
    // }

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
                <div className="row p-3">
                    {/* One File */}
                    <h2>Recent</h2>
                   <img src={emptyImg} className={styles.emptyImg} alt="empty-img" /> 
                </div>
            </div>
           </div>
        </div>
    )
}


export default Home