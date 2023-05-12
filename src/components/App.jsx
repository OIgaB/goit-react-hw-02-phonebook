import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title } from "./styled";
import { nanoid } from 'nanoid';

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  onContactCreate = (name, number) => {
    const contactObject = {id: nanoid(), name, number};  // короткі властивості (name: name, number: number)
      this.setState((prevState) => {
            return {
              contacts: prevState.contacts.concat(contactObject),
            };
        })  
  }

  render() {
    return (
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onContactCreate={this.onContactCreate}/> 

          <h2>Contacts</h2>
          <Filter contacts={this.state.contacts} filter={this.state.filter}/>
          <ContactList data={this.state}/>
        </Container>
    );
  }
}