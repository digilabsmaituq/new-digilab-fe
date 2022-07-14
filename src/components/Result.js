import "./Result.css"
import team from "../images/developer-team.png"

function Result() {
    return(
        <div className="result">
            <img src={ team } />
            <h1>The results are here!</h1>
            <p>See the result of your application. What are you waiting for?</p>
            <a href="#">See Result</a>
        </div>
    )
}

export default Result