import React from "react";
import './CardViewer.css';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {onFront: true, index: 0 };
    }

    handleCardClick = () => {
        this.setState({ onFront: !this.state.onFront })
    };

    prevClick = () => {
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1});
        }
    };

    nextClick = () => {
        if (this.state.index < this.props.cards.length) {
            this.setState({index: this.state.index + 1});
        }
    };

    render() {
        // const currentCard = onFront => {
        //     if (onFront) {
        //         return (
        //             this.props.cards[0].front
        //         )
        //     }
        //     else {
        //         return (
        //             this.props.cards[0].back
        //         )
        //     }
        // }

        const cardFront = this.state.onFront;
        const index = this.state.index;

        return (
            <div>
                <h2>Card Viewer</h2>
                <p id="card" onClick={this.handleCardClick}>
                    {cardFront 
                        ? this.props.cards[index].front
                        : this.props.cards[index].back
                    }
                </p>
                <div id="card-flipper">
                    <button disabled={this.state.index == 0} onClick={this.prevClick}>Previous Card</button>
                    <p id="counter">Counter</p>
                    <button disabled={this.state.index == this.props.cards.length - 1} onClick={this.nextClick}>Next Card</button>
                </div>
                <hr/>
                <button onClick={this.props.switchMode}>Go to card editor</button>
            </div>
        )
    }
}

export default CardViewer;