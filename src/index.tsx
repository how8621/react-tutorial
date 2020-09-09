import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface Props {
    value: number;
}

interface State {
    value?: any;
    squares?: any;
}

class Square extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({ value: 'X' }) }>
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    private renderSquare(i: number) {
        return <Square value={this.state.squares[i]} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* TODO */}</div>
                    <div>{/* TODO */}</div>
                </div>
            </div>
        );
    }
}

//==========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);