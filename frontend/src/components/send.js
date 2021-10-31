import React, { Component } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

const postEndpoint = '/add_transaction'
const getEndpoint = '/get_chain'
class Send extends Component {
  constructor(props){
    super(props);
    this.state = {
      borrower: '',
      book: 0,
      time: '',
    }
    this.handleBorrower = this.handleBorrower.bind(this);
    this.handleBook = this.handleBook.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBorrower(event){
    this.setState({ borrower: event.target.value});
  }
  handleBook(event){
    this.setState({ book: event.target.value});
  }
  componentDidMount() {
    axios.get(getEndpoint)
      .then(res => {
        const sender = res.data.chain[1].transactions[0].borrower;
        this.setState({ sender });
      })
    }

  handleSubmit(event) {
    event.preventDefault();

      axios.post(postEndpoint, { "lender": '0xe36f0158f0aed45b3bc755dc52ed4560d',
      "borrower": this.state.borrower,
      "book": this.state.book,
      "time": this.state.time })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })
  }

  render(){
    return (
        <Container>
  <br/>
  <h4><b style={{color: '#007bff'}}>Borrow books from library</b> </h4>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Row}>
         <Form.Label column sm="2">
           Borrower
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={this.handleBorrower} value={this.state.borrower} placeholder="Enter Borrower Address" />
         </Col>
       </Form.Group>
       <Form.Group as={Row}>
        <Form.Label column sm="2">
          Book
        </Form.Label>
        <Col sm="2">
          <Form.Control onChange={this.handleBook} placeholder="Book" value={this.state.book} />
        </Col>
        <Col sm="0.5"><b>  </b></Col>
      </Form.Group>
      <Form.Group as={Row}>
      <Col sm="5">
      <Button variant="primary" type="submit">
    Send
  </Button>
  </Col>
  </Form.Group>
     </Form>
     <br/><br/>
      </Container>
    );
  }
}

export default Send;
