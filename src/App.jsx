import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";

import "./app.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" />
          </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
