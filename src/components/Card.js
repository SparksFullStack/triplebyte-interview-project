import React, { Component } from 'react';
import './Card.css';
import { Button } from 'reactstrap';

class Card extends Component {
    handleRenderItems = () => {
        return this.props.cardItems.map((item, index) => {
            if (this.props.cardNum === 1){
                return (
                    <div className="card--item">
                        <p>{item}</p> 
                        <Button onClick={() => this.props.moveRight(this.props.cardNum, index)}>=</Button>
                    </div>
                )
            } else if (this.props.cardNum === 4){
                return (
                    <div className="card--item">
                         <Button onClick={() => this.props.moveLeft(this.props.cardNum, index)}>=</Button> 
                         <p>{item}</p> 
                    </div>
                )
            } else return (
                <div className="card--item">
                   <Button onClick={() => this.props.moveLeft(this.props.cardNum, index)}>=</Button><p>{item}</p> <Button onClick={() => this.props.moveRight(this.props.cardNum, index)}>=</Button>
                </div>
            )
        })
    }


    render() {
        const { styles } = this.props;
        return (
            <div className="card--container">
                <div style={styles} className="card--header">
                    <h2 className="card--title">Test</h2>
                </div>

                <div className="card--item">
                    {this.handleRenderItems()}
                </div>

                <Button onClick={() => this.props.addItem(this.props.cardNum)}>Add a card</Button>
            </div>
        )
    }
}

export default Card;