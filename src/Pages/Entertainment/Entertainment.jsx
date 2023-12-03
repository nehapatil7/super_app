import "./Entertainment.css"
import { useNavigate } from "react-router"
import action from "../../Images/action.png"
import drama from "../../Images/drama.png"
import romance from "../../Images/romance.png"
import thriller from "../../Images/thriller.png"
import western from "../../Images/western.png"
import horror from "../../Images/horror.png"
import fantasy from "../../Images/fantasy.png"
import music from "../../Images/music.png"
import fiction from "../../Images/fiction.png"

const Entertainment =() => {

    {/*const genres = [
            { id: 1, name: "Action", color: "#ff5209" , img:{action} },
            { id: 2, name: "Drama", color: "#D7A4FF" , img:{drama} },
            { id: 3, name: "Romance", color: "#148A08" , img:{romance} },
            { id: 4, name: "Thriller", color: "#84C2FF" , img:{thriller} },
            { id: 5, name: "Western", color: "#902500" , img:{western} },
            { id: 6, name: "Horror", color: "#7358FF" , img:{horror} },
            { id: 7, name: "Fantasy", color: "#FF4ADE" , img:{fantasy} },
            { id: 8, name: "Music", color: "#E61E32" , img:{music} },
            { id: 9, name: "Fiction", color: "#6CD061" , img:{fiction} },
          ];*/}

    const navigate = useNavigate() 
    const handelClick = () => {
        navigate('/UserHome')
        console.log("showing");
    }

    return(
        <div className="container2">
            <div className="info">
                <div className="app-Name">
                    <h6>Super App</h6>
                    <p>Choose your </p> <p>entertainment</p> <p>category </p>
                </div>
                <div className="selectedCategories">

                        <span>
                            
                        </span>

                </div>
                
            </div>
            <div className="geners">
                <div className="geners-list">

                </div>
                
                <div className="btn">
                    <button onClick={handelClick}>Next Page </button>
                </div>
                           
            </div>
        
        </div>
    );
}

export default Entertainment;