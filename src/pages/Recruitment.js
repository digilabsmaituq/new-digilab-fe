import "./Recruitment.css"
import img from "../images/fist-bump-gesture.png"
import Notice from "../components/Notice"
//import registration here
//import result


function Recruitment() {
    document.title="Recruitment - DIGILAB"
    return(
        <div className="recruitment">
            <header>
                <img src={img} />
                <h1>Become a Part of Our Community</h1>
                <p>Digilab is a student club for those who want to start their journey in the tech world. Choose the team based on your interest.</p>
            </header>
            <Notice />
        </div>
    )
}

export default Recruitment 