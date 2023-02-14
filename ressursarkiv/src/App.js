import './css/main.css';
import Header from "./components/Header";
// import {Link} from 'react';
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="container">
      <Header/>
      <nav>{/* <Link/> */}</nav>
      <MainContent />
    </div>
  );
}

export default App;
