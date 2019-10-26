import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string,
        type: PropTypes.string,
        onClickFunc: PropTypes.func
    }
    render() {
        const { text, type, onClickFunc } = this.props;
        return (
            <button className={ !type ? 'btn-default' : type } onClick={onClickFunc}>
                {text}
            </button>
        )
    }
}
