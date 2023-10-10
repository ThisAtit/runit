import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div id="navBar" className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="runit-nav" aria-controls="runit-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="runit-nav">
                    <div id="link" className="navbar-nav me-auto">
                        <Link className="nav-link" to="/">EVENTS |</Link>
                        <Link className="nav-link" to="/">SPONSORE |</Link>
                        <Link className="nav-link" to="/">OM RUNIT |</Link>
                        <Link className="nav-link" to="/">KONTAKT OS</Link>
                    </div>
                </div>
                <form className="d-flex" role="search">
                    <section id="searchBtn" className=" me-2">
                        <button className="btn" type="submit"><span id="search">SØG</span></button>
                    </section>
                    <section className="me-3">
                        <input className="form-control" type="search" />
                    </section>
                    <section className="me-5">
                        <p>Advanceret søg</p>
                    </section>

                </form>
            </div>
        </nav>
    );
};

export default Nav;