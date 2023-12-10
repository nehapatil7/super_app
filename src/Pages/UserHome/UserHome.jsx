import './UserHome.css'
import { useNavigate } from 'react-router-dom'
import userImg from '../../Images/userImg.png'
import News from '../../Components/News'
import Weather from '../../Components/Weather'
import Timer from '../../Components/Timer'
import React, { useEffect, useState } from "react";

function UserHome() {
    const [notes, setNotes] = useState("");
    const navigate = useNavigate() 
    const handelClick = () => {
        navigate('/Browse')
        console.log("showing");
    }

    useEffect(() => {
        localStorage.setItem("notes", notes);
      }, [notes]);
      const handleNotesChange = (e) => {
        setNotes(e.target.value);
      };

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
                    <textarea
                        className="notes-input"
                        value={notes}
                        onChange={handleNotesChange}>
                        {notes}
                    </textarea>
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