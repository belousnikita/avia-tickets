import React from 'react';
import Menu from './Menu';
import forEach from 'lodash/forEach';
import './styles.css';
import Ticket from './Ticket';
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currencies: {
                uah: {
                    name: 'uah',
                    isSelected: true,
                },
                usd: {
                    name: 'usd',
                    isSelected: false,
                },
                eur: {
                    name: 'eur',
                    isSelected: false,
                },
            },
            transfers: {
                direct: {
                    key: 'direct',
                    name: "Direct",
                    isSelected: false,
                },
                oneTansfer: {
                    key: 'oneTansfer',
                    name: '1 transfer',
                    isSelected: false,
                },
                twoTransfers: {
                    key: 'twoTransfers',
                    name: "2 transfers",
                    isSelected: false,
                },
                threeTransfers: {
                    key: 'threeTransfers',
                    name: "3 transfers",
                    isSelected: false,
                }
            }
        }
        this.currencyChanger = this.currencyChanger.bind(this);
        this.transferSelector = this.transferSelector.bind(this);
        this.onlyTransferHandler = this.onlyTransferHandler.bind(this);
    }
    transferSelector(checked) {
        const { transfers } = this.state;
        transfers[checked].isSelected = !transfers[checked].isSelected;
        this.setState({ transfers });
    }
    onlyTransferHandler(clicked) {
        const { transfers } = this.state;
        forEach(transfers, t => {
            transfers[t.key].isSelected = false;
        });
        transfers[clicked].isSelected = true;
        this.setState({ transfers });
    }
    currencyChanger(clicked) {
        const { currencies } = this.state;
        forEach(currencies, c => {
            currencies[c.name].isSelected = false;
        });
        currencies[clicked].isSelected = true;
        this.setState({ currencies });
    }
    render() {
        const { currencies, transfers } = this.state;
        return <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Menu currencies={currencies} currencyChanger={this.currencyChanger}
                        transfers={transfers} transferSelector={this.transferSelector}
                        onlyTransferHandler={this.onlyTransferHandler} />
                </div>
                <div className="col-lg">
                    <Ticket />
                    <Ticket />
                </div>
            </div>
        </div>
    }
}