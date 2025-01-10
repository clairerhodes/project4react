import { useState } from 'react'
import './App.css'
import Home from './components/home/home.jsx'

const App = () => {
  
  const [page, setPage] = useState("Home");
  const [content, setContent] = useState([]);

  return (
    <>
      {page === 'Home' ? <Home content={content} setContent={setContent}/> : ''}
    </>
  );
};

export default App;
