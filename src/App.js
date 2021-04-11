import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const defaultContacts = [
    {
      name: 'Atanas Dimitrov',
      phone: '07712345678',
      email: 'atanas@defaultemail.com'
    },
    {
      name: 'John Doe',
      phone: '07787654321',
      email: 'john@defaultemail.com'
    }
  ]
  const [contacts, setContacts] = useState(defaultContacts);

  const addContact = (name, phone, email) => {
    setContacts((prev) => {
      return [...prev, {name: name, phone: phone, email: email}];
    });
  }

  const [appointments, setAppointments] = useState([]);

  const addAppointment = (title, contact, date, time) => {
    setAppointments((prev) => {
      return [...prev, {title: title, contact: contact, date: date, time: time}]
    });
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
      
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
