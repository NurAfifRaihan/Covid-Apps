import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./Layout";
import Indonesia from "./pages/wilayah/indonesia";
import Prov from "./pages/wilayah/provinsi";
import About from "./pages/wilayah/about";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/wilayah/indonesia" element={<Indonesia />}></Route>
          <Route path="/wilayah/provinsi" element={<Prov />}></Route>
          <Route path="/wilayah/about" element={<About />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
