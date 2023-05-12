import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title } from "./styled";
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Oles Honchar', number: '459-12-56'},
      {id: 'id-2', name: 'Hryhorii Skovoroda', number: '443-89-12'},
      {id: 'id-3', name: 'Pavlo Tychyna', number: '645-17-79'},
      {id: 'id-4', name: 'Mykhailo Kotsiubynsky', number: '227-91-26'},
    ],    
    filter: ''
  }


  // Функція при відправці форми змінює state (зшиває масив контактів з новим об'єктом 1го контакта)
  // Якщо введене ім'я вже є в state контактах, то спливе відповідне повідомлення і об'єкт з цим ім'ям не додасться до state 
  onContactCreate = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value; // name - це <input> з ім'ям
    const number = event.target.elements.number.value; // number - це <input> з телефоном
    const contactObject = {id: nanoid(), name, number};  // короткі властивості (name: name, number: number)
    
    const nameClone = this.state.contacts.find((contact) => ( // вертає об'єкт з ім'ям, що повторюється
      contact.name.toLowerCase() === name.toLowerCase()
    ));

    if(nameClone) {
      Notify.failure(`${name} is already in contacts`); 
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
    return (
        <Container>
          <Title>Phonebook</Title>
          <ContactForm onContactCreate={this.onContactCreate} /> 

          <h2>Contacts</h2>
          <Filter filter={this.state.filter} onChange={this.handleFilter} />
          <ContactList contacts={this.getVisibleContacts()} onDeleteContact={this.DeleteContact} /> {/* якщо фільтр пустий, то передасться [] контактів зі state, якщо повний, то [] зі співпадіннями */}
        </Container>
    );
  }
} 
