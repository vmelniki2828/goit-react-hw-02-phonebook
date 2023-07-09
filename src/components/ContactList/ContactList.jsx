import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name} : {number}
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  text: PropTypes.string,
};

export default ContactList;
