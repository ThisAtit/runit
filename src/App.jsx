import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";

import "./app.scss"
import Events from "./component/events/Events";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" />
            <Route path="/events" element={<Events/>} />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
