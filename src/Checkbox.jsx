import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
export default class Checkbox extends React.Component {
    render() {
        const { name, checked, transferSelector, onlyTransferHandler } = this.props;
        return <div className="check">
            <label className="textblock control control-checkbox">
                {name}
                <input type="checkbox" checked={checked} onChange={transferSelector} />
                <Button className={"only btn"} name={"only"} onClick={onlyTransferHandler} />
                <div className="control_indicator"></div>
            </label>
        </div>
    }
}
Checkbox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
    transferSelector: PropTypes.func,
    onlyTransferHandler: PropTypes.func,
}