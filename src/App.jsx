import ContactForm from "./components/ContactForm/ContactForm.jsx"
import SearchBox from "./components/SearchBox/SearchBox.jsx"
import ContactList from "./components/ContactList/ContactList.jsx"
import './App.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contacts/operations.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
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
