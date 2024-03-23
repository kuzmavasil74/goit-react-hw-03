import css from './ContactList.module.css'

const ContactList = ({ contacts }) => {
  console.log(contacts)
  return (
    <>
      {contacts.map((contact) => {
        return (
          <div className={css.contactCart} key={contact.id}>
            <ul className={css.contactList}>
              <li className={css.contactListItem}>👨‍🦱 {contact.name}</li>

              <li className={css.contactListItem}>☎️ {contact.number}</li>
            </ul>
            <button className={css.cantactListBtn}> Delete</button>
          </div>
        )
      })}
    </>
  )
}

export default ContactList
