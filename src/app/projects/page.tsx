import Nav from "../components/Nav";
import KC from "../components/KC";
import Voice from "../components/Voice";
import Letter from "../components/Letter";

function Projects() {
    return <>
        {Nav(1)}
        <KC/>
        <div className = "hidden w-100 text-light">-</div>
        <Voice/>
        <Letter/>
    </>
}

export default Projects