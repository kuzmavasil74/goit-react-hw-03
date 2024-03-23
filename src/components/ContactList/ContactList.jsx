import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
  // console.log(contacts)
  return (
    <div className={css.contactListMainContainer}>
      {contacts.map((contact) => {
        return (
          <div className={css.contactCart} key={contact.id}>
            <ul className={css.contactList}>
              <li className={css.contactListItem}>👨‍🦱 {contact.name}</li>

              <li className={css.contactListItem}>☎️ {contact.number}</li>
            </ul>
            <button
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              className={css.cantactListBtn}
            >
              {' '}
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ContactList
