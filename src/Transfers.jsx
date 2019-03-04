import React from 'react';
import Checkbox from './Checkbox';
import PropTypes from 'prop-types';
import map from 'lodash/map';
export default class Transfers extends React.Component {
    constructor(props) {
        super(props);
        this.transfers = props.transfers;
        this.transferSelector = this.props.transferSelector;
        this.onlyTransferHandler = this.props.onlyTransferHandler;
    }
    render() {
        return <div className="control-group">
            <div className="textblock">TRANSFERS</div>
            {map(this.transfers, t => <Checkbox key={t.name} name={t.name} checked={t.isSelected}
                transferSelector={() => this.transferSelector(t.key)}
                onlyTransferHandler={() => this.onlyTransferHandler(t.key)} />)
            }
        </div>
    }
}
Transfers.propTypes = {
    transfers: PropTypes.object,
}