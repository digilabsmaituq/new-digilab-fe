import "./Sidebar.css"
import { useState } from "react"
import { UilEstate, UilUsersAlt, UilSignin } from '@iconscout/react-unicons'

function Sidebar(){
    const [isNavExpanded, setNavExpanded] = useState(false)
    return(
        <div>
            <div className="sidebar-mobile">
                <div className="navbar">
                    <h1><button onClick={()=> {setNavExpanded(!isNavExpanded)}}><i class="bi bi-list"></i></button> Digilab</h1>
                </div>
                <div className={ isNavExpanded ? "navbar-expand expand-nav" : "navbar-expand"}>
                    <li className="nav-item-expand"><a href="#"><UilEstate /> Home</a></li>
                    <li className="nav-item-expand"><a href="#"><UilUsersAlt /> Organizer</a></li>
                    <li className="nav-item-expand"><a href="#"><UilSignin /> Recruitment</a></li>
                </div>
            </div>
            <div className="sidebar">
                <div className="nav">
                    <a className="nav-item" href="#"><UilEstate /> Home</a>
                    <a className="nav-item" href="#"><UilUsersAlt /> Organizer</a>
                    <a className="nav-item" href="#"><UilSignin /> Join Us</a>
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