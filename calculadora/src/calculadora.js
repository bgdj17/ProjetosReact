import React, { useState } from 'react';
import './calculadora.css'
import CalculadoraService from './calculadora.service';
import {
  Jumbotron,  Container,  Row,  Col,  Button,  Form
} from 'react-bootstrap';


function Calculadora() {

  const [calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    DIVISAO,
    MULTIPLICACAO] = CalculadoraService();

  const [txtNumeros, setTxtNumeros] = useState('0');
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState(null);
  const [operacao, setOperacao] = useSatet(null);

  function adicionarNumeros(numero){
   let resultado;
   if(operacao === null){
    resultado = concatenarNumero(num1, numero)
    setNum1(resultado)
   }
   else{
    resultado = concatenarNumero(num2, numero)
    setNum2(resultado)
   }
   setTxtNumeros(resultado)
  }

  function adicionarOperador(op){
    setTxtNumeros(op)
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: 'black',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumeros"
              className="text-right"
              readOnly="readonly"
              value={txtNumeros} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
            onClick={()=>{
              adicionarNumeros('7')}}>7  </Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={()=>{
              adicionarNumeros('8')}} >8  </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('9')}}>9 </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=>{
              adicionarOperador('/')}}>/  </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('4')}}>4 </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('5')}}>5 </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('6')}}>6 </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=>{
              adicionarOperador('*')}}>* </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('1')}}>1 </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('2')}} >2  </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('3')}}>3 </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=>{
              adicionarOperador('-')}}>- </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={()=>{
              adicionarNumeros('0')}}>0 </Button>
          </Col>
          <Col>
            <Button variant="light">. </Button>
          </Col>
          <Col>
            <Button variant="success">= </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={()=>{
              adicionarOperador('+')}}>+</Button>
          </Col>
        </Row>
      </Container>

    </Jumbotron>

  )
}

export default Calculadora;
