import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state.name, this.state.number);
        this.resetState();
    };

    resetState = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.onSubmit} className={s.form}>
                    <label className={s.labelName} htmlFor="name">
                        Name
                    </label>
                    <input
                        onChange={this.onChange}
                        id="name"
                        className={s.input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />

                    <label className={s.labelName} htmlFor="number">
                        Number
                    </label>
                    <input
                        id="number"
                        type="tel"
                        onChange={this.onChange}
                        className={s.input}
                        value={this.state.number}
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />

                    <button type="submit" className={s.button}>
                        Add contact
                    </button>
                </form>
            </>
        );
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};
