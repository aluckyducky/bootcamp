import React from "react";
import './CardViewer.css';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {onFront: true, index: 0 };
    }

    handleCardClick = () => {
        this.setState({ onFront: !this.state.onFront })
    }

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
                <p onClick={this.handleCardClick}>
                    {cardFront 
                        ? this.props.cards[index].front
                        : this.props.cards[index].back
                    }
                </p>
                <hr/>
                <button onClick={this.props.switchMode}>Go to card editor</button>
            </div>
        )
    }
}

export default CardViewer;