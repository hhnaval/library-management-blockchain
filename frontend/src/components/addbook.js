import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

function Addbook(){
    const [title,setTitle] = useState('');
    const [isbn,setIsbn] = useState('');
    const [author,setAuthor] = useState('');
    const endpoint = '/addbook'
    const handleSubmit = () => {
        Axios.post(endpoint,{"title":title,"author":author,"isbn":isbn}).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    return(
        <div>
           <h4><b style={{color: '#007bff'}}>Add a new book</b> </h4>
            <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
         <Form.Label column sm="2">
           Title
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={e => setTitle(e.target.value)} placeholder="Enter Book title" />
         </Col>
       </Form.Group>
        <Form.Group as={Row}>
         <Form.Label column sm="2">
           Author
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={e => setAuthor(e.target.value)} placeholder="Enter Author name" />
         </Col>
       </Form.Group>
       <Form.Group as={Row}>
         <Form.Label column sm="2">
           ISBN
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={e => setIsbn(e.target.value)} placeholder="Enter Book's ISBN" />
         </Col>
       </Form.Group>
      <Form.Group as={Row}>
      <Col sm="5">
      <Button variant="primary" type="submit">
    Register
  </Button>
  </Col>
  </Form.Group>
     </Form>
        </div>
    );
}

export default Addbook;