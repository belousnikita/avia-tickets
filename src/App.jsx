import React from 'react';
import Menu from './Menu';
import Ticket from './Ticket';
import forEach from 'lodash/forEach';
import find from 'lodash/find';
import './styles.css';
import base from './tickets.json';
import axios from 'axios';
export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currencies: {
                uah: {
                    name: 'uah',
                    isSelected: true,
                    symbol: "₴"
                },
                usd: {
                    name: 'usd',
                    isSelected: false,
                    symbol: "$",
                },
                eur: {
                    name: 'eur',
                    isSelected: false,
                    symbol: "€"
                },
            },
            transfers: {
                direct: {
                    key: 'direct',
                    name: "Direct",
                    isSelected: false,
                    stops: 0,
                },
                oneTansfer: {
                    key: 'oneTansfer',
                    name: '1 transfer',
                    isSelected: false,
                    stops: 1,
                },
                twoTransfers: {
                    key: 'twoTransfers',
                    name: "2 transfers",
                    isSelected: false,
                    stops: 2,
                },
                threeTransfers: {
                    key: 'threeTransfers',
                    name: "3 transfers",
                    isSelected: false,
                    stops: 3,
                }
            }, tickets: base.tickets
        }
        this.currencyCourses = {
            EUR: {
                ccy: "EUR",
            },
            USD: {
                ccy: "USD",
            }
        };
        this.currencyChanger = this.currencyChanger.bind(this);
        this.transferSelector = this.transferSelector.bind(this);
        this.onlyTransferHandler = this.onlyTransferHandler.bind(this);
    }
    componentWillMount() {
        axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3')
            .then(function (response) {
                const data = response.data;
                forEach(this.currencyCourses, (c => {
                    const course = data.find(d => d.ccy === c.ccy);
                    this.currencyCourses[course.ccy].sale = course.sale;
                }))
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
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
    approvedStopsSet() {
        const { transfers } = this.state;
        const set = new Set();
        forEach(transfers, t => {
            if (t.isSelected) {
                set.add(t.stops);
            }
        });
        return set;
    }
    findTickets() {
        const { tickets } = this.state;
        const approvedStops = this.approvedStopsSet();
        if (approvedStops.size > 0) {
            return tickets.reduce((acc, t) => approvedStops.has(t.stops) ? [...acc, t] : acc, []);
        }
        else {
            return tickets;
        }
    }
    getCurrentCurrency() {
        return find(this.state.currencies, currency => currency.isSelected);
    }
    getPriceStr(price) {
        const currentCurrency = this.getCurrentCurrency();
        const { name, symbol } = currentCurrency;
        return name.toLowerCase() === 'uah' ? `${price} ${symbol}` :
            `${Math.round(price / this.currencyCourses[name.toUpperCase()].sale)} ${symbol}`
    }
    render() {
        const { currencies, transfers } = this.state;
        return <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-auto">
                    <Menu currencies={currencies} currencyChanger={this.currencyChanger}
                        transfers={transfers} transferSelector={this.transferSelector}
                        onlyTransferHandler={this.onlyTransferHandler} />
                </div>
                <div className="col-auto">
                    {this.findTickets().map((ticket, i) => <Ticket key={i} {...ticket} price={this.getPriceStr(ticket.price)} />)}
                </div>
            </div>
        </div>
    }
}