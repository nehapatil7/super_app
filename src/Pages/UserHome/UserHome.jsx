import './UserHome.css'
import { useNavigate } from 'react-router-dom'
import userImg from '../../Images/userImg.png'
import News from '../../Components/News'
import Weather from '../../Components/Weather'
import Timer from '../../Components/Timer'
import React, { useEffect, useState } from "react";

function UserHome() {
    const [notes, setNotes] = useState("");
    const [user, setUser] = useState("");
    const [genre, setGenre] = useState([]);
    const navigate = useNavigate() 
    const handelClick = () => {
        navigate('/Browse')
        console.log("showing");
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userData")));
        setGenre(JSON.parse(localStorage.getItem("selectedGenre")));
        setNotes(localStorage.getItem("notes"));
      }, []);

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
                            <h2>{user.name}</h2>
                            <h2>{user.email}</h2>
                            <h2 className="uname">{user.username}</h2>
                            <div className='selectedgenres'>
                                {genre.map((item, i) => (
                                <div key={i} className="selectedG">
                                {item}
                                </div>
                            ))}
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