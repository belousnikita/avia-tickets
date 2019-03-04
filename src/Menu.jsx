import React from 'react';
import Transfers from './Transfers';
import Currency from './Currency';
export default class Menu extends React.Component {
    render() {
        const { currencies, currencyChanger, transfers, transferSelector, onlyTransferHandler } = this.props;
        return <div className="block row">
            <div className="container">
                <Currency currencies={currencies} currencyChanger={currencyChanger} />
                <Transfers transfers={transfers} transferSelector={transferSelector}
                    onlyTransferHandler={onlyTransferHandler} />
            </div>
        </div>;
    }
}