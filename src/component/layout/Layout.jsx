import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Sidebox from "../sidebox/Sidebox";

import Logo from "../../img/systemoglogo/logo.jpg";

import "./layout.scss";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div id="layout" className="container-fluid">
            <div className="row">
                <section className="col-lg-9 p-0">
                    <Nav />
                    <article className="row">
                        <main className="p-4">
                            <figure><Link to="/"><img src={Logo} alt="Logo" /></Link></figure>
                            <section className="col-lg-9 col-12">
                                {children} 
                            </section>
                        </main>
                    </article>
                </section>
                <section className="col-lg-3">
                    <Sidebox />
                </section>
                <footer className="p-0">
                    <Footer />
                </footer>
            </div>

        </div>
    );
};

export default Layout;