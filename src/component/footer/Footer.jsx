import "./footer.scss";

import logobot from "../../img/systemoglogo/logobot.png";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <article id="footer" className="p-5 text-end p-0">
            <figure>
                <Link to="/">
                    <img src={logobot} alt="Runit logo" />
                </Link>
            </figure>
        </article>
    );
};

export default Footer;