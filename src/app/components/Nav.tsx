import Link from "next/link";
import Image from "next/image";
import ghlogo from "./assets/gitlogo.png";
import lilogo from "./assets/lilogo.png";

function Nav(active: number) {
    return (
        <nav className = "navbar navbar-expand-lg">
            <div className = "container-fluid">
                <a href = "#"/>
                <div className = "navbar-collapse collapse">
                    <ul className = "navbar-nav d-flex flex-row">
                        <li className = "nav-item">
                            <Link className = {active == 0 ? "nav-link active fs-2 mx-4" : "text-primary nav-link fs-2 mx-4"} href = "/">Home</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = {active == 1 ? "nav-link active fs-2 mx-4" : "text-primary nav-link fs-2 mx-4"} href = "/projects">Projects</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = {active == 2 ? "nav-link active fs-2 mx-4" : "text-primary nav-link fs-2 mx-4"} href = "#">Coming Soon</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = "text-primary nav-link mx-2" href = "https://www.linkedin.com/in/jagjot-nijjar-9b6300249/" target = "blank">
                            <Image src = {lilogo} height = "60" alt = "LinkedIn"/>
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = "text-primary nav-link mx-2" href = "https://github.com/JN720" target = "blank">
                                <Image src = {ghlogo} height = "60" alt = "Github"/>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav;