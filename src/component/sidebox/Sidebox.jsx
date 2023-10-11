import "./sidebox.scss";
import newsletter from "../../img/systemoglogo/newsletter.png";
import nike from "../../img/sponsorer/Nike.png";
import { Link } from "react-router-dom";

const Sidebox = () => {
    return (
        <article id="Sidebox">
            {/* _____________________________ */}

            <section className="row bg_black p-1">
                <h5>NÆSTE LØB - 55/70 PLADSER OPTAGET</h5>
            </section>
            {/* _____________________________ */}
            <article className="row bg-light">
                <section className="p-3">
                    <section className="p-1 me-2" id="header1"><h6>FÅ PLADSER TILBAGE</h6></section>
                </section>
                <section className="mb-5">
                    <h3>FOREST TO THE BAY</h3>
                    <p><i>D.28/03 Kl 10:40</i></p>
                    <p>KOM med til det mest fantastiske løb i GateWay Blokhus i Påsken! </p>
                    <p>Du kommer til at løbe i det smukkeste og mest afvekslende løbeterræn i vel nok Danmarks bedste GateWay </p>
                    <p>- vi garanterer, at du kan boltre dig i skovområder, ad snoede stier og på den smukke hvide strand på de lange distancer</p>
                </section>
                <h3 className="mt-5">Pris: 250kr</h3>
                <section className="text-center mb-3">
                    <Link to="/valgteevent">
                        <button id="btn" className="btn mb-3 col-12">
                            <h4>LÆS MERE</h4>
                        </button>
                    </Link>
                </section>
            </article>

            {/* _____________________________ */}

            <article id="news" className="row p-5">
                <section className="text-center">
                    <figure>
                        <img src={newsletter} alt="newsletterIcon" />
                    </figure>
                    <div className="row">
                        <form>
                            <input type="text" className="form-control" name="email" id="email" placeholder="Din email" required />
                            <button type="submit" className="btn btn-outline-light w-100">Tilmeld</button>
                        </form>
                    </div>
                </section>
            </article>
            {/* _____________________________ */}

            <article id="SideSponser" className="row text-center p-4">
                <h2 className="fs-1">Sponserer</h2>
                <figure>
                    <img className="w-75" src={nike} alt="Nike Logo" />
                </figure>
            </article>
        </article>
    );
};

export default Sidebox;