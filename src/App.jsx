// import { useEffect, useState } from 'react'
import ContactForm from "./components/ContactForm/ContactForm.jsx"
import SearchBox from "./components/SearchBox/SearchBox.jsx"
import ContactList from "./components/ContactList/ContactList.jsx"
import './App.css'

// const CONTACTS_LOCAL_ID = "contacts";

function App() {
  // const initialContacts = [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]

  // const [contacts, setContacts] = useState(() =>
  //   JSON.parse(window.localStorage.getItem(CONTACTS_LOCAL_ID))
  //   ?? initialContacts);

  // useEffect(() => {
  //   window.localStorage.setItem(CONTACTS_LOCAL_ID, JSON.stringify(contacts));
  // }, [contacts])

  // const deleteContact = (contactId) => {
  //   setContacts((prev) => prev.filter(contact => contact.id !== contactId));
  // }

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox/>
        <ContactList />
      </div>
    </>
  )
}

export default App
