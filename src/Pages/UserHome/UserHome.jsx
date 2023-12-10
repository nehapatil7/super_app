import React from 'react'
import './UserHome.css'
import { useNavigate } from 'react-router-dom'
import userImg from '../../Images/userImg.png'
import News from '../../Components/News'

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
                    <div className='weather'>
                        <div className='timeDate'>

                        </div>

                    </div>
                </div>
                <div className='notes'>
                    <h4>All Notes</h4>
                    <input type='textbox'>
                    
                    </input>

                </div>
            </div>
            <div className='timer'>

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