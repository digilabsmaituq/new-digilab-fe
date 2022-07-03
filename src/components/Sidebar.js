import "./Sidebar.css"
import { useState } from "react"

function Sidebar(){
    const [isNavExpanded, setNavExpanded] = useState(false)
    return(
        <div>
            <div className="sidebar-mobile">
                <div className="navbar">
                    <h1><button onClick={()=> {setNavExpanded(!isNavExpanded)}}><i class="bi bi-list"></i></button> Digilab</h1>
                </div>
                <div className={ isNavExpanded ? "navbar-expand expand-nav" : "navbar-expand"}>
                    <li className="nav-item-expand"><a href="#">Home</a></li>
                    <li className="nav-item-expand"><a href="#">Organizer</a></li>
                    <li className="nav-item-expand"><a href="#">Recruitment</a></li>
                </div>
            </div>
            <div className="sidebar">
                <ul>
                    <li className="nav-item"><a href="#">Home</a></li>
                    <li className="nav-item"><a href="#">Organizer</a></li>
                    <li className="nav-item"><a href="#">Recruitment</a></li>
                </ul>
                <div className="social">
                    <h1>Digilab SMAITUQ</h1>
                    <a href="#"><i class="bi bi-instagram"></i></a> <a href="#"><i class="bi bi-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar