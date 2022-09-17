import {AppWrapper} from './Components/container';
import Sidebar from './Components/sidebar/Sidebar';
import React, {FC} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/pages/Home';
import './App.css';


const App: FC = () => {
  return <>
    <Router>
    <Sidebar/>
      <Routes>
        <Route path="/graphs/summoners" element={<Home/>}></Route>
      </Routes>
    </Router>
  </>
}

export default App;