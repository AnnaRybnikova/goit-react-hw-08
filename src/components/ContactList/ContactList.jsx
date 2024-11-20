import Contact from "../Contact/Contact.jsx";
import PropTypes from "prop-types";
import s from "./ContactList.module.css"

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contact_list}>
          {contacts.map(contact => {
              return <li className={s.contact_list_item} key={contact.id}>
                  <Contact data={contact} onDelete={onDelete} />
              </li>
          })}
    </ul>
  )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactList