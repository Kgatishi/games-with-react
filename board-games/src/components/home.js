import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Games from './games';
import './home.css';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            view: "home"
        };
    }
    
    renderHomeView() {

        const list_games = ["Ludo","Mmela","Monopoly","Puzzles","Snakes","Morabaraba","Blox"] ;
        const game_cards = list_games.map((game, index) =>{
            const item_key = game + index ;
            return (
                <Col key={item_key}>
                <Card border="info" onClick={()=> this.setState({view:{game}})}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{game}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.                            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </Col>
            )
        });

        return (
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {game_cards}
                </Row>
            </Container>
        );
    }

    render() {

        const current_view = (this.state.view=== "home") ? this.renderHomeView() : <Games game={this.state.view} /> ;
        return (
            <Container>
                { current_view }
            </Container>
        );
    }
}
export default Home;
