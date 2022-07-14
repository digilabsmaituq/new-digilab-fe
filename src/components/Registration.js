import "./Registration.css"
import dev from "../images/software-engineer.png"
import create from "../images/artist.png"

function Registration() {
    return(
        <div className="registration">
            <h1>Choose Your Team</h1>
            <div className="row">
                <div className="col">
                    <a href="#">
                        <div className="card">
                            <img className="developer-card" src={ dev } />
                            <h1>Developer</h1>
                        </div>
                    </a>
                    <div className="description">
                        <h2><i class="bi bi-lightbulb"></i> What you'll get</h2>
                        <p>Basics of programming.</p>
                        <p>Exploring world of frameworks.</p>
                        <p>A mini-hackathon experience.</p>
                        <p>Chance of joining programming competition.</p>
                    </div>
                </div>
                <div className="col">
                    <a href="#">
                        <div className="card">
                            <img className="creative-img" src={ create } />
                            <h1>Creative</h1>
                        </div>
                        <div className="description">
                            <h2><i class="bi bi-lightbulb"></i> What you'll get</h2>
                            <p>Basics of designs.</p>
                            <p>Exploring variety of design tools.</p>
                            <p>First-hand video editing experience.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Registration