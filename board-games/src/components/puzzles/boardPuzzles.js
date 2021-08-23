import React from 'react'; 

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                square
            </button>
        );
    }
}

class BoardPuzzles extends React.Component {
    render(){
        return (
            <button>
                Puzzles
            </button>
        );
    }
}

export default BoardPuzzles;