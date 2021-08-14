import React from 'react'; 
import './mmela.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                square
            </button>
        );
    }
}

class boardMmela extends React.Component {
    render(){
        return (
            <button>
                Mmela
            </button>
        );
    }
}

export default boardMmela;
