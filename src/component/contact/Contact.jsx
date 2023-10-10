import christian from "../../img/bestyrelse/christian.png";
import claus from "../../img/bestyrelse/claus.png";
import jens from "../../img/bestyrelse/jens.png";
import joergen from "../../img/bestyrelse/joergen.png";
import karen from "../../img/bestyrelse/karen.png";
import lene from "../../img/bestyrelse/lene.png";

const Contact = () => {
    return (
        <article className="container bg-light">
            <article className="row p-3">
                {/* ____________________kontakt Form_____________________ */}
                <section className="col-lg-4">
                    {/* ____________________Form_____________________ */}
                    <h2 className="mb-4">Kontakt os</h2>
                    <p>Vi bestræber os for at give svar tilbage inden for 48 timer</p>
                    <form>
                        <div className="mb-3">
                            <p className="m-0">Dit navn</p>
                            <input type="text" required />
                        </div>
                        <div className="mb-3">
                            <p className="m-0">Din Email</p>
                            <input type="text" required />
                        </div>
                        <div className="mb-3">
                            <p className="m-0">Emne (fx. løbs navn eller lign)</p>
                            <input type="text" required />
                        </div>
                        <div>
                            <p className="m-0">Besked</p>
                            <textarea className="col-12" rows="5" />
                        </div>
                    </form>
                    {/* ___________________Send btn______________________ */}
                    <section>
                        <section id="btn" className="btn mb-2 col-12">
                            <h6>Send besked</h6>
                        </section>
                    </section>
                    {/* _________________________________________ */}

                </section>
                {/* ____________________Bestyrelse_____________________ */}
                <section className="col-lg-7 offset-lg-1">
                    <h4 className="mb-4">Her finde ud information om vores bestyrelse</h4>
                    {/* ____________________Select option_____________________ */}
                    <select className="col-6">
                        <option value="1">Formand - Jens Kr. Larsen</option>
                        <option value="2">Næstformand - Claus Jensen</option>
                        <option value="3">Sekretær - Jens Nielsen</option>
                        <option value="4">Kasserer - Jørgen Svensen</option>
                        <option value="5">Bestyrelsesmedlem - Karen Karlsen</option>
                        <option value="6">Bestyrelsesmedlem - Lene Johansen</option>
                    </select>
                    {/* ____________________Detail_____________________ */}
                    <article className="row mt-4">
                        <figure className="col-lg-5">
                            <img className="img-fluid border border-black border-2" src={jens} alt="jens" />
                        </figure>
                        <section className="col-lg-7 ">
                            <h4 className="m-0">Jens Kr. Larsen</h4>
                            <p><i>Formand</i></p>
                            <p>Hovedbestyrelsesmøder,
                            <br />modtagelse/distribution af div. post, kataloger og blade, annoncering/tilrettelæggelse af generalforsamling, dagsorden til bestyrelsesmøder, planlægning af møder</p>
                            <h4>Email: Jens@runit.dk</h4>
                        </section>
                    </article>
                </section>
            </article>
        </article>
    );
};

export default Contact;