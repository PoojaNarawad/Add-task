import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdLibrarReport from './components/AdReport/AdLibraryReport';
import AdLibrary from './components/AdLibrary/AdLibrary';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";


function App() {
  return (
   <Router>
   <Header/>
    <Routes>
      <Route path="/AdLibrary" element={ <AdLibrary/>}/>
      <Route path="/AdLibraryReport" element={ <AdLibrarReport/>}/>
      <Route path="/" element={ <Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
