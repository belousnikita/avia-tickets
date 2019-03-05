import React from 'react';
import PropTypes from 'prop-types';
export default class Button extends React.Component {
    render() {
        return <button type="button"
            className={this.props.className}
            onClick={this.props.onClick}>{this.props.name}
        </button>
    }
}
Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
}