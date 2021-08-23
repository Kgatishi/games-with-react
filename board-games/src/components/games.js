import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';

import './games.css';
import BoardLudo from './ludo/boardLudo';
import BoardMmela from './mmela/boardMmela';
import BoardMonopoly from './monopoly/boardMonopoly';
import BoardPuzzles from './puzzles/boardPuzzles';
import BoardSNL from './snakes_n_leaders/boardSNL';
import BoardMorabaraba from './morabaraba/boardMorabaraba';
import BoardBlox from './blox/boardBlox';


class Games extends React.Component {
    constructor(props){
        super(props);
    }

    default_view(){
        var data =  this.props.game ;
        return data ;
    }

    render() {

        const list_games = ["Ludo","Mmela","Monopoly","Puzzles","Snakes","Morabaraba","Blox"] ;
        const list_games_comp = [
            <BoardLudo/>,<BoardMmela/>,<BoardMonopoly/>,<BoardPuzzles/>,<BoardSNL/>,<BoardMorabaraba/>,<BoardBlox/>
        ];
        const game_list_items = list_games.map((game,index) => {
            const linker = "#" + game ;
            const item_key = game + index ;
            return (
                <ListGroup.Item key={item_key} action href={linker}> {game} </ListGroup.Item>
            )
        });

        const game_list_tabs = list_games.map((game,index) =>{
            const linker = "#" + game ;
            const item_key = "#"+ game + index ;
            const game_component = list_games_comp[index]
            return (
                <Tab.Pane key={item_key} eventKey={linker}> {game_component} </Tab.Pane>
            )
        });
        const default_view = "#" + this.props.game.game ;
        console.log(this.props.game.game);
        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey={default_view}>
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
