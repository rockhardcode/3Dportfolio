const ContactCard = (prop) => {
    return (
        <div className="padding-class">
            <div className="contactme-details">
              <div className="contact-icon">
                {prop.icon}
              </div>
              <div className="flex-column">
                <div className="text">{prop.name}</div>
                <div className="desc-contact">{prop.desc}</div>
              </div>
            </div>
          </div>
    )
}
export default ContactCard