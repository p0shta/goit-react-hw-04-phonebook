import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

export default class Filter extends Component {
    onChange = e => {
        this.props.filterContacts(e.target.value);
    };

    render() {
        return (
            <>
                <p className={s.title}>Find contacts by name</p>
                <input
                    onChange={this.onChange}
                    className={s.input}
                    type="text"
                    value={this.props.filter}
                />
            </>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterContacts: PropTypes.func.isRequired,
};
