import "./Probation.css"
import img from "../images/design-and-development-process.png"
import { UilArrowUpRight  } from '@iconscout/react-unicons'

function Probation() {
    return(
        <div className="probation">
            <header>
                <img src={img} />
                <h1>This is Your Sandbox</h1>
                <p>Play with your creativity, put your skills to work, and experience the process of developing a full-fledged product.</p>
            </header>
            <section id="About">
                <h1>What is Probation?</h1>
                <p>Probation is where our Developer Team members put their knowledge into a first-hand experience of developing a product.  Here, they were tested for their practical knowledge, and how far they can push their skills into action.</p>
            </section>
            <div className="promote-card">
                <h1>What are the result?</h1>
                <p>To learn more about what we've produce and develop from probation, check out this dedicated page about Probation and its products.</p>
                <a className="btn" href="https://nonchalant-twig-114.notion.site/Digilab-Probation-a349aaca4c2e47ad8d3be06be244bdf4">Probation Page <UilArrowUpRight  /></a>
            </div>
        </div>
    )
}

export default Probation