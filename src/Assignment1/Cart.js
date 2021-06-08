import {Container, Row, Col, Button, Alert} from 'react-bootstrap';
import {CardComponent} from './Components/CardComponent';
import Apple from '../FruitImages/Apple3.jpg';
import Banana from '../FruitImages/Banana3.jpg';
import Pineapple from '../FruitImages/Pineapple3.jpg';
//import Strawberry from '../FruitImages/strawberry.jpg';

export const Cart = () =>{
    return(
        <Container fluid='md' className = 'm-5'>
            <Row>
                <Col>
                    <CardComponent image = {Apple} heading = '$4.74 APPLES: Royal' quantity = 'quantity: 3KG'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardComponent image = {Banana} heading = '$5.97 Banana: From Maysur' quantity = 'quantity: 5KG'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardComponent image = {Pineapple} heading = '$9.47 Pineapple: Dubai' quantity = 'quantity: 1KG'/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="outline-danger" className="float-left" style = {{width: 200}} >Remove All</Button>
                </Col>
            
                <Col>
                    <Button variant="primary" className="float-right" style = {{width: 200}} onClick = {() => {
                        return <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                          Aww yeah, you successfully read this important alert message. This example
                          text is going to run a bit longer so that you can see how spacing within an
                          alert works with this kind of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                          Whenever you need to, be sure to use margin utilities to keep things nice
                          and tidy.
                        </p>
                      </Alert>
                    }}>Payment</Button>
                </Col>
            </Row>
            
        </Container>
    );
}