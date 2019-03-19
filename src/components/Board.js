import React, { Component } from 'react';
import { } from 'reactstrap';
import "./Board.css";

import Card from './Card';

class Board extends Component {
    state = {
        card1: ['test1'],
        card2: ['test1'],
        card3: ['test1'],
        card4: ['test1'],
    }

    componentDidMount() {
        const localState = localStorage.getItem('card-state');

        if (!localState) {
            localStorage.setItem('card-state', JSON.stringify(this.state));
        } else {
            this.setState(JSON.parse(localState));
        }
    }

    handleAddItem = (cardNumber) => {
        var val = window.prompt('add a card');
        var stateRef = "card" + cardNumber;
        var newArray = this.state[stateRef].concat(val);
        this.setState({ [stateRef]: newArray } , localStorage.setItem('card-state', JSON.stringify(this.state)));

    }

    moveRight = (cardNum, index) => {
        var stateRef = "card" + cardNum;
        var newArray = this.state[stateRef].concat();
        var cardVal = newArray.splice(index, index + 1);
        this.setState({ [stateRef]: newArray });

        stateRef = "card" + (cardNum + 1);
        var newRightArray = this.state[stateRef].concat(cardVal[0]);
        this.setState({ [stateRef]: newRightArray }, () => localStorage.setItem('card-state', JSON.stringify(this.state)));
    }

    moveLeft = (cardNum, index) => {
        var stateRef = "card" + cardNum;
        var newArray = this.state[stateRef].concat();
        var cardVal = newArray.splice(index, index + 1);
        this.setState({ [stateRef]: newArray });

        stateRef = "card" + (cardNum - 1);
        var newLeftArray = this.state[stateRef].concat(cardVal[0]);
        this.setState({ [stateRef]: newLeftArray }, () => localStorage.setItem('card-state', JSON.stringify(this.state)));
    }

    render() {
        return (
            <div id="board">
                <div className="board--card-container">
                    <Card moveRight={this.moveRight} cardItems={this.state.card1} addItem={this.handleAddItem} cardNum={1} styles={{ backgroundColor: "#8E6E95"}} />
                    <Card moveRight={this.moveRight} moveLeft={this.moveLeft} cardItems={this.state.card2} addItem={this.handleAddItem} cardNum={2} styles={{ backgroundColor: "#39A59C"}} />
                    <Card moveRight={this.moveRight} moveLeft={this.moveLeft} cardItems={this.state.card3} addItem={this.handleAddItem} cardNum={3} styles={{ backgroundColor: "#344759"}} />
                    <Card moveLeft={this.moveLeft} cardItems={this.state.card4} addItem={this.handleAddItem} cardNum={4} styles={{ backgroundColor: "#E8741E"}} />
                </div>
            </div>
        )
    }
}

export default Board;