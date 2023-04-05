import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="/delivery" element={<h1>Delivery</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
