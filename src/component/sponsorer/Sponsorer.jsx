import hummel from "../../img/sponsorer/hummel-logo.jpg";
import sevenup from "../../img/sponsorer/7up.png";
import Circle from "../../img/sponsorer/Circle.jpg";
import Fanta from "../../img/sponsorer/Fanta.png";
import Intel from "../../img/sponsorer/Intel.png";
import Lg from "../../img/sponsorer/Lg.png";
import Nike from "../../img/sponsorer/Nike.png";
import Pepsi from "../../img/sponsorer/Pepsi.jpg";
import Smukfest from "../../img/sponsorer/Smukfest.jpg";
import Starbuck from "../../img/sponsorer/Starbuck.jpg";
import Ubunto from "../../img/sponsorer/Ubunto.jpg";
import Vikan from "../../img/sponsorer/Vikan.jpg";
import adidas from "../../img/sponsorer/adidas-logo.jpg";
import coca from "../../img/sponsorer/coca-cola-logo.jpg";

const Sponsorer = () => {
    return (
        <article className="bg-light container">
            <article className="row">

                {/* ___________________________GOLD SPONSORE________________________________ */}
                <section className="col-lg-5 my-5" style={{ backgroundColor: "#d04444", color: "white" }}>
                    <h3><strong>GOLD SPONSORE</strong></h3>
                </section>
                <article className="row">
                    <figure className="col-3">
                        <img className="img-fluid border-black border" src={hummel} alt="hummel" />
                    </figure>
                    <figure className="col-3">
                        <img className="img-fluid border-black border" src={coca} alt="coca-cola" />
                    </figure>
                    <figure className="col-3">
                        <img className="img-fluid border-black border" src={Nike} alt="nike" />
                    </figure>
                    <figure className="col-3">
                        <img className="img-fluid border-black border" src={Smukfest} alt="Smukfest" />
                    </figure>
                </article>


                {/* ___________________________SØLV SPONSORE________________________________ */}
                <section className="col-lg-5 my-5" style={{ backgroundColor: "#d04444", color: "white" }}>
                    <h3><strong>SØLV SPONSORE</strong></h3>
                </section>
                <article className="row">
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={Fanta} alt="Fanta" />
                    </figure>
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={Intel} alt="Intel" />
                    </figure>
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={Vikan} alt="Vikan" />
                    </figure>
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={adidas} alt="adidas" />
                    </figure>
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={sevenup} alt="Pepsi" />
                    </figure>
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={Pepsi} alt="Pepsi" />
                    </figure>
                </article>


                {/* ___________________________ALLMINDELIGE PARTNERE________________________________ */}
                <section className="col-lg-5 my-5" style={{ backgroundColor: "#d04444", color: "white" }}>
                    <h3><strong>ALLMINDELIGE PARTNERE</strong></h3>
                </section>
                <article className="row">
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={Circle} alt="Circle" />
                    </figure>
                    <figure className="col-2">
                        <img className="img-fluid border-black border" src={Lg} alt="Lg" />
                    </figure>
                </article>
            </article>
        </article>
    );
};

export default Sponsorer;