import Nav from "../components/Nav";
import KC from "../components/KC";
import Voice from "../components/Voice";
import Letter from "../components/Letter";

function Projects() {
    return <>
        {Nav(1)}
        <KC/>
        <div className = "w-100 text-dark">.</div>
        <Voice/>
        <div className = "w-100 text-dark">.</div>
        <Letter/>
    </>
}

export default Projects