import React,{ useState } from 'react';
import Axios from 'axios';
import { Form, Container, Col, Row, Button, Card } from 'react-bootstrap';


function SearchBook(){
    const [visible,setVisible] = useState('hidden');
    const [query,setQuery] = useState('');
    const [book,setBook] = useState([{
        title:'',
        author:'',
        isbn:''
    }]);
    const endpoint = '/querybook'
    const searchbook = () => {
        setVisible('visible');
        Axios.post(endpoint,{'title':query}).then((res) => {
            setBook(res.data.result);
            console.log(res.data.result);
        })
    }

    const booklist = book.map((item) => {
        console.log(item.title)
        return(
        <li key = {item.isbn}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://covers.openlibrary.org/b/isbn/${item.isbn}.jpg` }/>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    <p><b>Author:</b> {item.author}</p>
                    <p><b>Availability:</b> {item.isavailable ? 'Available' : 'Not Available'}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </li>
        );
    });

    return(
        <div>
             <h4><b style={{color: '#007bff'}}>Search for books</b> </h4>
        <Form>
        <Form.Group as={Row}>
         <Form.Label column sm="2">
           Book title
         </Form.Label>
         <Col sm="8">
           <Form.Control onChange={e => setQuery(e.target.value)} placeholder="Enter Book title" />
         </Col>
       </Form.Group>
       <Form.Group as={Row}>
      <Col sm="5">
      <Button variant="primary" onClick={searchbook}>
    Search
  </Button>
  </Col>
  </Form.Group>
        </Form>
        <div style={{visibility: visible}}>
        <ul>{booklist}</ul>
        </div>
        </div>
    );
}

export default SearchBook;