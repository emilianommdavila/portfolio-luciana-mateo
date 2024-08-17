import { useState } from 'react';
import './contact.css';
import texts from '../../../public/text.json'
import LN from '../../assets/icons/ln.png'
import CV from '../../assets/icons/pdf (1).png'
import WH from '../../assets/icons/whatsapp.png'
import ML from '../../assets/icons/gmail.png'



const ContactForm = () => {
  const name = useState('');
  const email = texts.contact.mail;
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(`Mensaje de ${name}`)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contacto</h2>
      <div className="contacContent">
      <form className="contact-form">
        
        <label htmlFor="message">Escribe un mensaje</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="button" onClick={handleClick}>
         {texts.contact.textMessage}
        </button>
        <p>{texts.contact.textThanks}</p>
      </form>
      
      <div className="contact-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img className="iconContact" src={LN} alt="" />
            LinkedIn
        </a>
        <a href="/path/to/cv.pdf" target="_blank" rel="noopener noreferrer">
            <img className="iconContact" src={CV} alt="" />
            Curriculum Vitae
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img className="iconContact" src={WH} alt="" />
            WhatsApp
        </a>
        <a href="mailto:tucorreo@ejemplo.com">
            <img className="iconContact" src={ML} alt="" />
            Email
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
