import "./Entertainment.css"
import { useNavigate } from "react-router"
import React, { useState } from "react";
import Category from "../../Components/Category.jsx"
import error from "../../Images/error.png"

const Entertainment =() => {
    const genres = [
        { id: 1, name: "Action", color: "#ff5209" },
        { id: 2, name: "Drama", color: "#D7A4FF" },
        { id: 3, name: "Romance", color: "#148A08" },
        { id: 4, name: "Thriller", color: "#84C2FF" },
        { id: 5, name: "Western", color: "#902500" },
        { id: 6, name: "Horror", color: "#7358FF" },
        { id: 7, name: "Fantasy", color: "#FF4ADE" },
        { id: 8, name: "Music", color: "#E61E32" },
        { id: 9, name: "Fiction", color: "#6CD061" },
      ];

    const [selectedGenre, setSelectedGenre] = useState([]);
    const [minError, setMinError] = useState(false);

    const handleClick = (genre, id) => {
        setSelectedGenre([...selectedGenre, genre]);
      };
    
    const checkMinimumSelection = () => {
        return selectedGenre.length >= 3 ? true : setMinError((err) => !err);
      };

    const handleRemoveGenre = (genre) => {
        setSelectedGenre((prev) => prev.filter((g) => g !== genre));
      };

    const navigate = useNavigate() 
    const handelPage = () => {
        if (checkMinimumSelection() === true) {
            localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
        navigate('/UserHome')
        }
    };

    return(
        <div className="container2">
            <div className="info">
                <div className="app-Name">
                    <h6>Super App</h6>
                    <p>Choose your </p> <p>entertainment</p> <p>category </p>
                </div>
                <div className="selectedCategories">
                    {selectedGenre
                    .filter((genre, index, self) => self.indexOf(genre) === index)
                    .map((uniqueGenre, id) => (
                    <div className="selected-genre-btn" key={id}>
                        {uniqueGenre}{" "}
                        <span
                            className="deselect"
                            onClick={() => handleRemoveGenre(uniqueGenre)}>X
                        </span>
                    </div>
                    ))}  

                    <div className="errorMsg">
                    {minError && selectedGenre.length < 3 ? (
                        <p className="minError">
                        <img src={error} alt="danger" width={15} /> Minimum 3 category
                        required
                        </p>
                        ) : ("")}
                    </div>
                </div>
               
                
            </div>
            <div className="geners">
                <div className="geners-list">
                    {genres.map((genre) => (
                    <Category
                    key={genre.id}
                    id={genre.id}
                    genre={genre.name}
                    color={genre.color}
                    handleClick={handleClick}
                    />
                    ))}

                </div>
                
                <div className="btn">
                    <button onClick={handelPage}>Next Page </button>
                </div>
                           
            </div>
        
        </div>
    );
}

export default Entertainment;