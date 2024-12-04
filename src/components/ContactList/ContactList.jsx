import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));

  return (
    <ul className={s.contact_list}>
          {filteredContacts.map(contact => {
              return <li className={s.contact_list_item} key={contact.id}>
                  <Contact data={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
              </li>
          })}
    </ul>
  )
}

export default ContactList