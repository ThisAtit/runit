const Advance = () => {
    return (
        <article className="container bg-light">
            <article className="row">
                <h2 className="mb-4">Advanceret søg</h2>
                {/* ____________________Søg Form_____________________ */}
                <section className="col-lg-3">
                    {/* ____________________Form_____________________ */}
                    <form>
                        <div className="mb-3">
                            <h4>Løbs Navn</h4>
                            <input type="text" required />
                        </div>

                        <h4>Til og fra pris</h4>
                        <div className="mb-3">
                            <p className="m-0">Pris fra</p>
                            <input type="text" required />
                        </div>
                        <div>
                            <p className="m-0">Pris til</p>
                            <input type="text" required />
                        </div>
                    </form>
                    {/* __________________Distance_______________________ */}
                    <section className="mt-4">
                        <h4>Distance</h4>
                        <p className="p-0 m-0">Over 10M</p>
                        <p>Under 10M</p>
                        <h6>Hvor i landet</h6>
                        <select className="col-10">
                            <option value="1">Danmark</option>
                            <option value="2">Earth</option>
                            <option value="3">Mars</option>
                            <option value="4">Jupiter</option>
                            <option value="5">Sun</option>
                        </select>
                    </section>
                    {/* ___________________Søg btn______________________ */}
                    <section>
                        <section id="btn" className="btn my-3 col-10">
                            <h6>Søg</h6>
                        </section>
                    </section>
                    {/* _________________________________________ */}

                </section>
                {/* ____________________Søg resultat_____________________ */}
                <section className="col-lg-9">
                    <p>Der er desværre ingen søge resultater...</p>
                </section>
            </article>
        </article>
    );
};

export default Advance;