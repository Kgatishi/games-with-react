import React from 'react'; 
import './ludo.css'
class Square extends React.Component {
    render() {
        return (
            <button className="square">
                
            </button>
        );
    }
}

class BoardLudo extends React.Component {
    renderSquare(i){
        return (
            <Square/>
        );
    }
    render(){
        return (
            <div>
                <div className="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
            </div>
        );
    }
}
export default BoardLudo;
