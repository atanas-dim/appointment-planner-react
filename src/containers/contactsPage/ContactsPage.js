import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [currentName, setCurrentName] = useState('');
  const [currentPhone, setCurrentPhone] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [duplicates, setDuplicates] = useState(false);
  const [alert, setAlert] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duplicates) {
      props.addContact(currentName, currentPhone, currentEmail);
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }

  };

  useEffect(() => {
  
    for(const contactItem of props.contacts) {
      if (contactItem.name === currentName) {
        if (!duplicates) {
          setDuplicates(true);
          setAlert('Contact is already in the list.');
          console.log('Contact is already in the list.');
        } 
        return;
      } else {
        setDuplicates(false);
        setAlert('');
      }
    }

  }, [props.contacts, currentName, duplicates]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={currentName} 
                     setName={setCurrentName} 
                     phone={currentPhone}
                     setPhone={setCurrentPhone}
                     email={currentEmail}
                     setEmail={setCurrentEmail}
                     handleSubmit={handleSubmit}
                     alert={alert} />
        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};
