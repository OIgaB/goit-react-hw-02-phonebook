import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title } from "./styled";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Mykhailo Kotsiubynsky', number: '459-12-56'},
      {id: 'id-2', name: 'Saint Nicholas', number: '443-89-12'},
      {id: 'id-3', name: 'Chris Martin', number: '645-17-79'},
      {id: 'id-4', name: 'Plumber Stephan', number: '227-91-26'},
    ],    
    filter: ''
  }


  // Функція викликається при відправці форми - змінює state (зшиває масив контактів з новим об'єктом 1го контакта)
  // Якщо введене ім'я вже є в state контактах, то спливе відповідне повідомлення і об'єкт з цим ім'ям не додасться до state 
  onContactCreate = (userInput) => {  // приймає об'єкт 1го контакта
    const contactObject = {id: nanoid(), ...userInput};  // короткі властивості (name: name, number: number)
    
    const nameClone = this.state.contacts.find((contact) => ( // вертає об'єкт з ім'ям, що повторюється
      contact.name.toLowerCase() === userInput.name.toLowerCase()
    ));

    if(nameClone) {
      Notify.failure(`${userInput.name} is already in contacts`); 
      return;
    }

    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.concat(contactObject),
      };
    })  
  }

  // Функція, що змінює state (записує в filter введене користувачем значення)
  handleFilter = (event) => {
    this.setState({ filter: event.target.value });  
  };

  // Функція, яка шукає співпадіння введеного в фільтр імені серед імен масиву об'єктів в state
  //повертає новий масив знайдених об'єктів (якщо фільтр в state пустий, то новий масив контактів не створиться, 
  // а з ф-ції повернеться масив контактів, що в state)
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => 
      name.toLowerCase().includes(filter.toLowerCase()) 
    );
  }
  
  // Функція видалення 1го контакта по id (filter створює новий масив без об'єкта з заданим id)
  DeleteContact = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };


  render() {
    const { onContactCreate, handleFilter, getVisibleContacts, DeleteContact } = this;
    return (
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onContactCreate={onContactCreate} /> 

          <h2>Contacts</h2>
          <Filter filter={this.state.filter} onChange={handleFilter} />
          <ContactList contacts={getVisibleContacts()} onDeleteContact={DeleteContact} /> {/* якщо фільтр пустий, то передасться [] контактів зі state, якщо повний, то [] зі співпадіннями */}
        </Container>
    );
  }
} 

App.propTypes = {
    userInput: PropTypes.shape ({  // об'єкт
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    contactID: PropTypes.string,
};