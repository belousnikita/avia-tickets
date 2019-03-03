import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import map from 'lodash/map';
import classNames from 'classnames';
export default class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.currencies = props.currencies;
    }
    render() {
        return <div>
            <div className="textblock">CURRENCY</div>
            <div className="btn-group" role="group" aria-label="Currency">
                {map(this.props.currencies, c => {
                    const className = classNames('btn btn-secondary', { active: c.isSelected });
                    return <Button key={c.name} className={className} name={c.name}
                        onClick={() => this.props.currencyChanger(c.name)} />
                })}
            </div>
        </div>
    }
}
Currency.propTypes = {
    currencies: PropTypes.object,
}
/* <button type="button" className="btn btn-secondary">UAH</button>
<button type="button" className="btn btn-secondary">USD</button>
<button type="button" className="btn btn-secondary">EUR</button> */