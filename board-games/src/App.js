import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';

import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
    return (
        
        <Container fluid>
            <Row className="row">
                <Navbar bg="secondary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {' '} Board Games by TK
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
            <br/>
            <Row className="row">
                <Home view="home" />
            </Row>
            <br/>
            <Row className="row">
                <Navbar bg="secondary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#About">
                            {' '} About
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}

export default App;
