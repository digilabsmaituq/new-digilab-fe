import "./Organizer.css"
import  data from "../data/organizer.json"
import img from "../images/business-idea.png"
import { UilArrowUpRight  } from '@iconscout/react-unicons'

function Organizer() {
    document.title="Organizer - DIGILAB"
    return(
        <div className="organizer">
            <header>
                <img src={img} />
                <h1>Digilab Organizer</h1>
                <p>Meet The People Who Managed Our Team</p>
            </header>
            <section id="People">
                <div className="row">
                    {data.map((data)=>(
                        <div className="col-m">
                            <div className="people-section">
                                <div className="people-card">
                                    <img className="people-img" src={data.img} />
                                    <p>{data.position}</p>
                                </div>
                                <div className="people-bio">
                                    <h2>{data.name.substring(0, 16)}</h2>
                                    <p>{data.years}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className="promote-card">
                <h1>Interested in joining our community?</h1>
                <p>Check out our recruitment page for more information about our membership.</p>
                <a className="btn" href="#">Recruitment Page <UilArrowUpRight  /></a>
            </div>
        </div>
    )
}

export default Organizer