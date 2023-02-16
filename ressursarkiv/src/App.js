import './css/main.css';
import Header from "./components/Header";
// import {Link} from 'react';
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="container">
      <Header/>
      <nav>
        <button className='defaultStyle'>A</button>
        <button className='activeStyle'>A</button>
        <button className='testStyle'>A</button>
        <button className='test2Style'>A</button>
        <button className='test3Style'>A</button>
        <button className='test4Style'>A</button>

        {/* <Link/> */}</nav>
      <MainContent />
    </div>
  );
}

export default App;
