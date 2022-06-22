import PropTypes from 'prop-types';

import s from './Filter.module.css';

export default function Filter({ filter, filterContacts }) {
    const onChange = e => {
        filterContacts(e.target.value);
    };

    return (
        <>
            <p className={s.title}>Find contacts by name</p>
            <input
                onChange={onChange}
                className={s.input}
                type="text"
                value={filter}
            />
        </>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterContacts: PropTypes.func.isRequired,
};
