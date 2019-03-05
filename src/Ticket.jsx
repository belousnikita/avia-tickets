import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const TimeBlock = props => (<div className="stamp" >
    <div className="time">{props.time}</div>
    <div className="destination">{props.ap}, {props.ap_name}</div>
    <div className="date">{props.date}</div>
</div>);
const Transfer = props => (<div className="col transfer align-items-center">
    <div className="text">{props.stops === 0 ? 'Direct'
        : props.stops > 1 ? `${props.stops} transfers` : '1 transfer'}</div>
    <div className="line-wrapper">
        <div className="line"></div>
        <i className="icon fas fa-plane"></i>
    </div>
</div>);
export default class Ticket extends React.Component {
    render() {

        const { origin,
            origin_name,
            destination,
            destination_name,
            departure_date,
            departure_time,
            arrival_date,
            arrival_time,
            carrier,
            stops,
            price } = this.props;
        return <div className="block ticket row align-self-center">
            <div className="col-auto d-flex flex-column ml-auto p-2">
                <div className="d-flex justify-content-between">
                    <TimeBlock time={departure_time} ap={origin} ap_name={origin_name} date={departure_date} />
                    <Transfer stops={stops} />
                    <TimeBlock time={arrival_time} ap={destination} ap_name={destination_name} date={arrival_date} />
                </div>
            </div>
            <div className="col-auto align-self-center" >
                <div className="text">{carrier}</div>
                <Button className="btn buy" name={`${price}`} />
            </div>
        </div>
    }
}
Ticket.propTypes = {
    origin: PropTypes.string,
    origin_name: PropTypes.string,
    destination: PropTypes.string,
    destination_name: PropTypes.string,
    departure_date: PropTypes.string,
    departure_time: PropTypes.string,
    arrival_date: PropTypes.string,
    arrival_time: PropTypes.string,
    carrier: PropTypes.string,
    stops: PropTypes.number,
    price: PropTypes.string,
}