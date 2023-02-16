import Contents from "./Layout/Contents.jsx";
import Footer from "./Layout/Footer.jsx";
import Header from "./Layout/Header.jsx";
import Layout from "./Layout/Layout.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Layout>
        <Header></Header>
        <Contents></Contents>
        <Footer></Footer>
      </Layout>
    </>
  );
}

export default App;
