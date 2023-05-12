// форма додавання контактів

import { Component } from "react";                     // для класів
// import PropTypes from 'prop-types';
// import { ButtonsList, Button } from "./styled";


// Кожен контакт - {name та id}

export class ContactForm extends Component {       // для класів
    
    handleSubmit = (event)=> {
        event.preventDefault();
        const name = event.target.elements.name.value; // name - це <input>
        console.log(name);
        const number = event.target.elements.number.value;
        console.log(number);
        this.props.onContactCreate(name, number);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                        <input
                            type="text"
                            name="name"
                            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            // onChange={this.handleChange}
                        />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button>Add contact</button>
            </form>
        );
    }
}
