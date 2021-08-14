import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';

import './games.css';


class Games extends React.Component {

    render() {

        const games = ["Ludo","Mmela","Monopoly","Puzzles","Snakes","Morabaraba","Blox"] ;
        const game_list_items = games.map((game,index) => {
            const linker = "#" + game ;
            return (
                <ListGroup.Item action href={linker}> {game} </ListGroup.Item>
            )
        });

        const game_list_tabs = games.map((game,index) =>{
            const linker = "#" + game ;
            return (
                <Tab.Pane eventKey={linker}>{game}</Tab.Pane>
            )
        });

        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Ludo">
                <Row>
                    <Col sm={3} className="col">
                        <ListGroup>
                            {game_list_items}
                        </ListGroup>
                    </Col>
                    <Col sm={9} className="board">
                        <Tab.Content>
                            {game_list_tabs}
                        </Tab.Content> 
                    </Col>
                </Row> 
            </Tab.Container>
        );
    }
}
export default Games;
