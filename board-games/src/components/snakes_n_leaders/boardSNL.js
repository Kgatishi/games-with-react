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

class BoardSNL extends React.Component {
    render(){
        return (
            <button>
                Snakes 'n Leaders
            </button>
        );
    }
}

export default BoardSNL;