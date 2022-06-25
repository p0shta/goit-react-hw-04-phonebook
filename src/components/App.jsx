import { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function App() {
    const [contacts, setContacts] = useState(
        localStorage.getItem('contacts')
            ? JSON.parse(localStorage.getItem('contacts'))
            : []
    );
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number,
        };

        const isYourContact = contacts.find(
            item => item.name.toLowerCase() === name.toLowerCase()
        );

        if (isYourContact) {
            Notify.warning(`${name} is already in your contacts!`);
            return;
        }

        setContacts(prevState => [contact, ...prevState]);
    };

    const deleteContact = id => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const filterContacts = filterText => {
        setFilter(filterText);
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="wrapper">
            <h1 className="title">Phonebook</h1>
            <ContactForm addContact={addContact} />
            <h2 className="title">Contacts</h2>
            <Filter filterContacts={filterContacts} filter={filter} />
            <ContactList
                contacts={filteredContacts}
                deleteContact={deleteContact}
            />
        </div>
    );
}
