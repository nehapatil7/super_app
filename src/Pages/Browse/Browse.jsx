import './Browse.css'
import icon from '../../Images/icon.png'
import React from "react"
import Movies from "../../Components/Movies.jsx"
import { useNavigate } from "react-router-dom"

function Browse() {
    const movies = JSON.parse(window.localStorage.getItem("selectedGenre"));
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/Entertainment");
    };


  return (
    <div className='container4'>
        <div className='icon'>
            <h4>Super App</h4>
            <img src={icon} alt="icon" />
        </div>

        <div className='moviesList'>
          <div className='msg'>
            <p>Entertainment according to your choice</p>
             <div className="homepage"> <button onClick={() => handleClick()}>HomePage</button> </div>
          </div>  
        </div>

        <div className="movie-container">
        {movies.map((movie, i) => (
          <Movies key={i} genre={movie} />
        ))}
      </div>
        
    </div>
  )
}

export default Browse