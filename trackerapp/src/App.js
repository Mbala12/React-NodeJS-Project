
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './components/login/index';

import Navbar from "./components/navbar.component";
import TransactList from "./components/transactList.component";
import EditTransaction from "./components/editTransact.component";
import CreateTransaction from "./components/createTransact.component";
import AllTransaction from "./components/allTransact.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path='/' exact component={TransactList} />
        <Route path='/login' exact component={Login} />
        <Route path='/all' exact component={AllTransaction} />
        <Route path='/edit/:id' exact component={EditTransaction} />
        <Route path='/create' exact component={CreateTransaction} />
      </div>
    </Router>
  )
}

export default App
