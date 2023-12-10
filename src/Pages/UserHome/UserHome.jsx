import React from 'react'
import './UserHome.css'
import { useNavigate } from 'react-router-dom'
import userImg from '../../Images/userImg.png'
import News from '../../Components/News'
import Weather from '../../Components/Weather'
import Timer from '../../Components/Timer'

function UserHome() {

    const navigate = useNavigate() 
    const handelClick = () => {
        navigate('/Browse')
        console.log("showing");
    }

  return (
    <div className='container3'>
        <div className='left'>
            <div className='top-div'>
                <div className='top-left'>
                    <div className='userInfo'>
                        <div className='userImg'>
                            <img src={userImg} alt="user image" />
                        </div>
                        <div className='user'>
                            <div className='selectedgenres'>

                            </div>
                        </div>

                    </div>
                    <div> 
                        <Weather />
                    </div>
                </div>
                <div className='notes'>
                    <h4>All Notes</h4>
                    <input type='textbox'>
                    
                    </input>

                </div>
            </div>
            <div >
                <Timer />
            </div>
        </div>

        <div className='right'>
            <div className='news'>
                <News />
            </div>
            <div className='btn-browse'>
                <button onClick={handelClick}>Browse</button>

            </div>

        </div> 

    </div>
  )
}

export default UserHome