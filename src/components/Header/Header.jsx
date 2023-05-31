import React from 'react';
import {Link} from 'react-router-dom';
import "./header.css";

const Header = () => {
  return (
   <nav>
    <div>
    <h1>Meta</h1>
    </div>
    <main className='header'>
    <div><Link to="/AdLibrary">Ad Library</Link></div>
    <div><Link to="/AdLibraryReport">Ad Library Report</Link></div>
   <div> <Link to="/">Ad Library API</Link></div>
    </main>
   </nav>
  )
}

export default Header


