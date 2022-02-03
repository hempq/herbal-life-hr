import React, {useState} from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button' 
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import '../App.css';



/**
 * @component Form
 * @props - { object } -  config
 */
const BackendTest = (props) => {
  const [results, setResult] = useState([]);
  const [text, setText] = useState(null);
  const [message, setMessage] = useState(false);


    
const handleChange = event => {
  let value = event.target.value;
  setText({text: value})
};


const handleSubmit = e => {
  e.preventDefault();
    axios({
    method: "post",
    url: `http://localhost:8080/index.php`,
    headers: { "content-type": "application/json" },
    data: text
  })
  .then(res => {
    console.log(res);
    console.log(res.data);
    setResult(res.data.results)
    setMessage(res.data.message)
  })
};


const Error = () => (
  <Alert className="mt-3" variant="danger" show={message}>
    {message && message.length > 0 ? message : null}
  </Alert>
);

const ResultTable = () => (
  <Table striped bordered hover className="mt-3">
  <thead>
  <tr>
    <th>Result</th>
  </tr>
  </thead>
  <tbody>
  {results.map((result, index) => (
      <tr>{result}</tr>
  ))}
</tbody> 
</Table>
);


const Result = () => (
  <Alert className="mt-3" variant="success" >
    {message && message.length > 0 ? message : "Error"}
  </Alert>
);


  
    return (<Container>
        <form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingTextarea">
            <Form.Control
            as="textarea"
            name="text"
            style={{ height: '100px' }}
            onChange={handleChange}
            className="mt-3"
            />
          </FloatingLabel>
          <Button className='mt-3' as="input" type="submit" value="Submit" />{' '}
        </form>
        <div>
          {results && results.length > 0 ? <div> <Result /> <ResultTable /></div> : <Error />}
        </div>
      </Container>
    )
  }



export default BackendTest;