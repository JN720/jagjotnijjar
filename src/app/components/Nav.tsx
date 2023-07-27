import Link from "next/link"

function Nav(active: number) {
    return (
        <nav className = "navbar navbar-expand-lg">
            <div className = "container-fluid">
                <a href = "#"/>
                <div className = "navbar-collapse collapse">
                    <ul className = "navbar-nav d-flex flex-row">
                        <li className = "nav-item">
                            <Link className = {active == 0 ? "nav-link active" : "text-primary nav-link"} href = "/">Home</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = {active == 1 ? "nav-link active" : "text-primary nav-link"} href = "/projects">Projects</Link>
                        </li>
                        <li className = "nav-item">
                            <Link className = {active == 2 ? "nav-link active" : "text-primary nav-link"} href = "#">idek what this link is supposed to be but it's here</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav;