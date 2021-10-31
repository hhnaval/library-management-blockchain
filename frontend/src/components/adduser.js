import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Container, Col, Row, Button } from 'react-bootstrap';

function Adduser(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const endpoint = '/adduser';

    const handleSubmit = () => {
        Axios.post(endpoint,{"name":name,"email":email}).then((res) => {
            console.log(res);
            console.log(res.data)
        })
    }
    return(
        <div>
           <h4><b style={{color: '#007bff'}}>Create new user</b> </h4>
            <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
         <Form.Label column sm="2">
           Name
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={e => setName(e.target.value)} placeholder="Enter User name" />
         </Col>
       </Form.Group>
        <Form.Group as={Row}>
         <Form.Label column sm="2">
           Email
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={e => setEmail(e.target.value)} placeholder="Enter User's email" />
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

export default Adduser;