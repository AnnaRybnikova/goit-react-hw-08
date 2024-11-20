import Contact from "../Contact/Contact.jsx";
import PropTypes from "prop-types";
import s from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contact_list}>
          {contacts.map(contact => {
              return <li className={s.contact_list_item} key={contact.id}>
                  <Contact contactName={contact.name} contactPhone={contact.number} />
              </li>
          })}
    </ul>
  )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}

export default ContactList