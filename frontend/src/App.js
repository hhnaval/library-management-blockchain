import React, { Component } from 'react';
import './App.css';
import Status from './components/status';
import Send from './components/send';
import Adduser from './components/adduser';
import Addbook from './components/addbook';
import SearchBook from './components/search';
import Transactions from './components/transactions';
import axios from 'axios';
import { Tab, Tabs } from 'react-bootstrap';
import Return from './components/return';

const endpoint = '/mine_block';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      transaction: true,
      user: false,
      book: false,
      search: false,
    }
  }
  componentWillMount() {
    axios.get(endpoint)
  }
  render(){
  return (
    <div className="App">
    <Status/>
    <h3><b>Library Management</b></h3>
  <h4><b style={{color: '#007bff'}}>Manage your Library</b> </h4>
    <Tabs defaultActiveKey="searchbook" id="uncontrolled-tab" className="mb-3">
      <Tab eventKey="lend" title="Lend">
        <Send />
      </Tab>
      <Tab eventKey="return" title="Return">
        <Return />
      </Tab>
      <Tab eventKey="user" title="User">
        <Adduser />
      </Tab>
      <Tab eventKey="book" title="Book">
        <Addbook />
      </Tab>
      <Tab eventKey="searchbook" title="Search">
        <SearchBook />
      </Tab>
      <Tab eventKey="history" title="History">
        <Transactions />
      </Tab>
      </Tabs>
    </div>
    );
  }
}

export default App;
