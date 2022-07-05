import "./Home.css"
import logo from "../images/digilab_logo2.png"
import vision from "../images/magnifying-glass.png"
import galeri from "../data/activity.json"

function Home(){
    document.title="Digilab | Home"
    return(
        <div className="home">
            <section id="About">
                <div className="banner">
                    <img className="logo" src={ logo } />
                    <p>Welcome to <br /> Digilab Official Website</p>
                    <h1>Tech Community of Ummul Quro Bogor Highschool</h1>
                </div>
                <div className="what">
                    <h1>What is <span>Digilab</span>?</h1>
                    <p>DigiLab is an IT community based on Ummul Quro Bogor Islamic High School. This is a place where students from Ummul Quro High School could improve or learn new IT skills.</p>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="vision-img" src={ vision } />
                    </div>
                    <div className="col">
                        <div className="vision">
                            <h1>Our Vision</h1>
                            <p>Our vision is to provide a place for Ummul Quro Islamic High School students who want to improve their IT skills.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="Team">
                <h1>The Team</h1>
                <div className="row">
                    <div className="col">
                        <div className="team-card">
                            
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </section>
            <section id="Gallery">
                <h1>Our Activities</h1>
                <div className="row">
                    {galeri.map((data)=>(
                        <div className="col-s">
                            <div className="gallery-card">
                                <img className="gallery-img" src={data.img} />
                                <h2>{data.name}</h2>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home