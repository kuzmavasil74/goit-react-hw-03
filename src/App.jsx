import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import contactsData from './contacts.json'
import Contact from './components/Contact/Contact'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import css from './App.module.css'

function App() {
  const [contactsList, setContactsList] = useState([])
  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    }

    setContactsList((prevState) => [...prevState, finalContact])
  }
  // console.log(setContactsList.finalContact)
  useEffect(() => {
    setContactsList(contactsData)
  }, [])
  const onDeleteContact = (contactId) => {
    setContactsList((prevContact) =>
      prevContact.filter((contact) => contact.id !== contactId)
    )
  }

  return (
    <div>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox />
      <ContactList contacts={contactsList} />
      <Contact />
    </div>
  )
}

export default App
