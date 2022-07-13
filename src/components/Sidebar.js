import "./Sidebar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { UilEstate, UilUsersAlt, UilUserPlus } from '@iconscout/react-unicons'

function Sidebar(){
    const [isNavExpanded, setNavExpanded] = useState(false)
    return(
        <div>
            <div className="sidebar-mobile">
                <div className="navbar">
                    <h1><button onClick={()=> {setNavExpanded(!isNavExpanded)}}><i class="bi bi-list"></i></button> Digilab</h1>
                </div>
                <div className={ isNavExpanded ? "navbar-expand expand-nav" : "navbar-expand"}>
                    <li className="nav-item-expand"><Link to="/"><UilEstate /> Home</Link></li>
                    <li className="nav-item-expand"><Link to="/organizer"><UilUsersAlt /> Organizer</Link></li>
                    <li className="nav-item-expand"><Link to="/recruitment"><UilUserPlus /> Recruitment</Link></li>
                </div>
            </div>
            <div className="sidebar">
                <div className="nav">
                    <Link className="nav-item" to="/"><UilEstate /> Home</Link>
                    <Link className="nav-item" to="/organizer"><UilUsersAlt /> Organizer</Link>
                    <Link className="nav-item" to="/recruitment"><UilUserPlus /> Recruitment</Link>
                </div>
                <div className="social">
                    <h1>Digilab SMAITUQ</h1>
                    <a href="#"><i class="bi bi-instagram"></i></a> <a href="#"><i class="bi bi-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar