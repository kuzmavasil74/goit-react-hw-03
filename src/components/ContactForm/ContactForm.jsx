import css from './ContactForm.module.css'
const ContactForm = ({ onAddContact }) => {
  const handleSubmitEvent = (event) => {
    event.preventDefault()

    const name = event.currentTarget.elements.name.value
    const number = event.currentTarget.elements.number.value
    const formData = { name, number }

    if (!/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s ]+$/.test(formData.name)) {
      alert('Only letters are allowed in the Name field')
      return
    }
    if (!/^[0-9()+\- ]+$/.test(formData.number)) {
      alert('Only numbers, spaces, +, (, ), and - are allowed')
      return
    }
    onAddContact(formData)
    event.currentTarget.reset()
  }
  return (
    <div>
      <form className={css.contactForm} onSubmit={handleSubmitEvent}>
        <label>
          <span>Name</span>
          <br />
          <input
            className={css.contactFormInput}
            type="text"
            name="name"
            required
            minLength={3}
            maxLength={50}
          />
        </label>
        <br />
        <label>
          <span>Number</span>
          <br />
          <input
            className={css.contactFormInput}
            type="tel"
            name="number"
            required
            minLength={3}
            maxLength={50}
          />
        </label>
        <br />
        <button className={css.contactFormBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  )
}

export default ContactForm
