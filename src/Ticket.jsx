import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
// "origin": "VVO",
//     "origin_name": "Владивосток",
//     "destination": "TLV",
//     "destination_name": "Тель-Авив",
//     "departure_date": "12.05.18",
//     "departure_time": "16:20",
//     "arrival_date": "12.05.18",
//     "arrival_time": "22:10",
//     "carrier": "TK",
//     "stops": 3,
//     "price": 12400

const TimeBlock = props => (<div >
    <div>19:50</div>
    <div>KBP, Kyiv</div>
    <div>19 nov, 2019 fr</div>
</div>);
const Transfer = props => (<div className="transfer d-flex align-items-center">1 Transfer</div>);
export default class Ticket extends React.Component {
    render() {
        const { origin,
            origin_name,
            destination_name,
            departure_date,
            departure_time,
            arrival_date,
            arrival_time,
            carrier,
            stops,
            price } = this.props;

        return <div className="block row">
            <div class="col-auto">
                <div>Carrier</div>
                <Button className="btn large" name="buy" />
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between">
                    <TimeBlock />
                    <Transfer />
                    <TimeBlock />
                </div>
            </div>
        </div>
    }
}