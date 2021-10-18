import React, { Component } from 'react'
import Button from '../Button/Button'

export class Buttons extends Component {
    render() {
        return (
            <div>
                {this.props.buttons.map(button => <Button onClick={this.props.onClick(button.activeType)} backgroundColor={button.backgroundColor} key={button.id}>{button.text}</Button>)}
            </div>
        )
    }
}

export default Buttons
