import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contact_list}>
          {filteredContacts.map(contact => {
              return <li className={s.contact_list_item} key={contact.id}>
                  <Contact data={contact} />
              </li>
          })}
    </ul>
  )
}

export default ContactList