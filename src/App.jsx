import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";

import "./app.scss"
import Events from "./component/events/Events";
import Home from "./component/home/Home";
import Advance from "./component/advance/Advance";
import Contact from "./component/contact/Contact";
import Sponsorer from "./component/sponsorer/Sponsorer";
import ValgteEvent from "./component/valgteEvent/ValgteEvent";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/advance" element={<Advance/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/sponsorer" element={<Sponsorer/>} />
            <Route path="/valgteEvent" element={<ValgteEvent/>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
