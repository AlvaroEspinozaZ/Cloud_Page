import './MainNav.css'
import { Link } from "react-router-dom"
function MainNav() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" id="main-Nav-Color">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">
                                    <i className="bi bi-person-fill" title="Inicio de sesión"></i>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/game1">
                                    <i className="bi bi-person-fill" title="Inicio de sesión"></i>MineGame1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/game2">
                                    <i className="bi bi-person-fill" title="Inicio de sesión"></i>MineGame2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/game3">
                                    <i className="bi bi-person-fill" title="Inicio de sesión"></i>MemoryGame</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/game4">
                                    <i className="bi bi-person-fill" title="Inicio de sesión"></i>QuestionGame</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/login">
                                    <i className="bi bi-person-fill" title="Inicio de sesión"></i>QuestionGame</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <i className="bi bi-person-fill" title="Inicio de sesión"></i> Inicio de sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default MainNav