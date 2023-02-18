import './css/main.css';
import Header from "./components/Header";
// import {Link} from 'react';
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="container">
      <Header/>
      <Nav />
      <MainContent />
    </div>
  );
}

export default App;
