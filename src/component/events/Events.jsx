import forestToTheBay from "../../img/events/FOREST to THE BAY.jpg";
import aalborg from "../../img/events/Aalborg Halvmarathon.jpg";
import egaa from "../../img/events/Egå Engsø Løbet.jpg";
import eventyr from "../../img/events/Eventyrløbet.jpg";
import nike from "../../img/events/Nike Marathontest 4.jpg";
import skov from "../../img/events/Skov løbet Skanderborg.jpg";
import smid from "../../img/events/Smid tøjet løbet.jpg";
import ultralobet from "../../img/events/Ultraløbet Fyr til Fyr.jpg";
import vuc from "../../img/events/VUC Vesterskovsløbet.jpg";
import firk from "../../img/events/Firkløver 50 50.jpg";
import bestseller from "../../img/events/BESTSELLER Aarhus City Marathon.jpg";

import "./events.scss";

const Events = () => {
    return (
        <article className="container bg-light">
            <article className="row p-3">
                {/* ____________________________ */}
                <section className="col-3">
                    <h5 className="mb-4">Inkreds</h5>
                    <h6>Distance</h6>
                    <p className="p-0 m-0">Over 10M</p>
                    <p>Under 10M</p>
                    <h6>Hvor i landet</h6>
                    <select className="px-2">
                        <option value="1">Danmark</option>
                        <option value="2">Earth</option>
                        <option value="2">Mars</option>
                        <option value="2">Jupiter</option>
                        <option value="2">Sun</option>
                    </select>
                </section>

                {/* ____________________________ */}
                <section className="col-9">
                    <h3>Alle events</h3>
                    <article className="row">
                        {/* _________________FOREST TO THE BAY_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={forestToTheBay} alt="FOREST to THE BAY Photo" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">FOREST TO THE BAY</h5>
                                    <p className="date mb-3"><i>D.28/03 Kl 10:40</i></p>
                                    <p className="d-none d-lg-block" >KOM med til det mest fantastiske løb i GateWay Blokhus i Påsken! Du kommer til at løbe i det smukkeste og mest afvekslende løbeterræn...</p>
                                    <h6>Pris: 250kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Egå Engsø Løbet_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={egaa} alt="Egå Engsø Løbet" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Egå Engsø Løbet</h5>
                                    <p className="date mb-3"><i>15-11-2019  Kl 16:30</i></p>
                                    <p className="d-none d-lg-block" >Løb rundt om den smukke Egå Engsø påskemandag 28. marts 2016. Motionsløb for hygge- og hurtigløbere mulighed for PR!...</p>
                                    <h6>Pris: 100kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Ultraløbet Fyr til Fyr_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={ultralobet} alt="Ultraløbet Fyr til Fyr" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Ultraløbet Fyr til Fyr</h5>
                                    <p className="date mb-3"><i>09-10-2019  Kl 09:00</i></p>
                                    <p className="d-none d-lg-block" >Danmarks smukkeste ultraløb på langs af Bornholm går fra Dueodde Fyr i syd til målet ved Hammer Fyr på øens nordende...</p>
                                    <h6>Pris: 350kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Skovløbet Skanderborg_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={skov} alt="Skovløbet Skanderborg" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Skovløbet Skanderborg</h5>
                                    <p className="date mb-3"><i>18-09-2019  Kl 13:00</i></p>
                                    <p className="d-none d-lg-block" >Igen i år indbyder Skanderborg Løbeklub til en smuk og varieret løbetur på 7,5 km i Vestermølleskoven...</p>
                                    <h6>Pris: 80kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Smid tøjet løbet_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={smid} alt="Smid tøjet løbet" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Smid tøjet løbet</h5>
                                    <p className="date mb-3"><i>16-11-2019  Kl10:00</i></p>
                                    <p className="d-none d-lg-block" >Nu kan du løbe og komme af med dit aflagte tøj ved at donere det til en god sag. Samtidig får du...</p>
                                    <h6>Pris: 250kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Nike Marathontest 4_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={nike} alt="Nike Marathontest 4" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Nike Marathontest 4</h5>
                                    <p className="date mb-3"><i>17-11-2019  Kl09:30</i></p>
                                    <p className="d-none d-lg-block" >Nike Marathontest 4 er det sidste af de fire testløb frem mod Telenor Copenhagen Marathon...</p>
                                    <h6>Pris: 180kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________VUC Vesterskovsløbet_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={vuc} alt="VUC Vesterskovsløbet" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">VUC Vesterskovsløbet</h5>
                                    <p className="date mb-3"><i>15-11-2019  Kl12:45</i></p>
                                    <p className="d-none d-lg-block" >VUC Vesterskovsløbet er et løb for alle. Ruterne ligger i skøn natur og by- og havnemiljø...</p>
                                    <h6>Pris: 112kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Eventyrløbet_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={eventyr} alt="Eventyrløbet" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Eventyrløbet</h5>
                                    <p className="date mb-3"><i>05-12-2019  Kl 16:00</i></p>
                                    <p className="d-none d-lg-block" >I år afholder vi Eventyrløbet for 39. gang, og tilmeldingen til årets løb er nu åben Husk at du med et startnummer...</p>
                                    <h6>Pris: 115kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Firkløver 50/50_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={firk} alt="Firkløver 50/50" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Firkløver 50/50</h5>
                                    <p className="date mb-3"><i>15-12-2019  Kl 12:00</i></p>
                                    <p className="d-none d-lg-block" >Trail i Kongernes Nordsjælland Ultraløb & Trail - Fra brostens pavéer fra renaissancen til fede singletrack...</p>
                                    <h6>Pris: 500 kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________BESTSELLER Aarhus City_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={bestseller} alt="BESTSELLER Aarhus City" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">BESTSELLER Aarhus City</h5>
                                    <p className="date mb-3"><i>19-02-2020  Kl 11:00</i></p>
                                    <p className="d-none d-lg-block" >Mærk magien når Aarhus for en enkelt dag bliver forvandlet til et...</p>
                                    <h6>Pris: 850 kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* _________________Aalborg Halvmarathon_________________ */}
                        <figure className="col-lg-4 col-md-6 col-12">
                            <div className="eventcontent">
                                <img src={aalborg} alt="Aalborg Halvmarathon" />
                                <figcaption className="px-2">
                                    <h5 className="my-1">Aalborg Halvmarathon</h5>
                                    <p className="date mb-3"><i>26-03-2020  Kl 14:00</i></p>
                                    <p className="d-none d-lg-block" >DGI Nordjylland og løbeklubberne AMOK, Aalborg Atletik & Motion og Aalborg Øst Road Runners...</p>
                                    <h6>Pris: 450kr</h6>
                                    <section className="text-center">
                                        <section id="btn" className="btn mb-3">
                                            <h6>LÆS MERE</h6>
                                        </section>
                                    </section>
                                </figcaption>
                            </div>
                        </figure>
                        {/* __________________________________ */}
                    </article>
                </section>
            </article>
        </article>
    );
};

export default Events;