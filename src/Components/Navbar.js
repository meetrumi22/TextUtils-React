import React from 'react'
// import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li> */}
                    </ul>
                    
                </div>
            </div>
            <div className={`form-check form-switch mx-4 text-${props.mode === "dark"?"light":"dark"}`}>
                <input className="form-check-input mt-3" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode} mode</label>
            </div>
        </nav>
    )
}

export default Navbar
