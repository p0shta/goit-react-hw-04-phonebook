import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export default function ContactList({ contacts, deleteContact }) {
    return (
        <ul>
            {contacts.map(contact => {
                const { name, id, number } = contact;
                return (
                    <li key={id} className={s.item}>
                        <span className={s.decor}></span> {name}: {number}{' '}
                        <button
                            className={s.button}
                            type="button"
                            onClick={() => deleteContact(id)}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
