import forestTotheBay from "../../img/events/FOREST to THE BAY.jpg"
import "./valgteevent.scss"

const ValgteEvent = () => {
    return (
        <article className="bg-light container">
            <article className="row p-3">
                <figure id="ImgInValgteEventPage" className="col-lg-5 m-0"></figure>
                <section className="col-lg-7">
                    <section className="p-1 me-2" id="header1"><h6>55 UD AF 70 PLADSER OPTAGET</h6></section>
                    <section className="mb-5">
                        <h3 className="m-0">FOREST TO THE BAY</h3>
                        <p><i>D.28/03 Kl 10:40</i></p>
                        <p className="m-0">KOM med til det mest fantastiske løb i GateWay Blokhus i Påsken! Du kommer til at løbe i det smukkeste og mest afvekslende løbeterræn i vel nok Danmarks bedste GateWay </p>
                        <p>- vi garanterer, at du kan boltre dig i skovområder, ad snoede stier og på den smukke hvide strand på de lange distancer</p>
                    </section>
                    <h5>Region: Nordjylland</h5>
                    <h5>Distance: 5.4 KM</h5>
                    <h3 className="mt-0">Pris: 350 KR</h3>
                    <form>
                        <input type="email" name="email" placeholder="Tilmeldelse Email" required />
                        <input style={{ backgroundColor: "#d04444", color: "white", border: "2px solid #d04444" }} className="col-3" type="submit" value="Tilmeld" />
                    </form>
                </section>
            </article>
        </article>
    );
};

export default ValgteEvent;