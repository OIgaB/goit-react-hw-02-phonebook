// Форма додавання контактів. Це статична форма - не змінна (при відправці викликає ф-цію зміни state)

import { Component } from "react";                     // для класів
import PropTypes from 'prop-types';
import { Form } from "./styled";


export class ContactForm extends Component {       // для класів
    // state потрібен для подальшої очистки форми (reset)
    state = { 
        name: '',
        number: '',
    }
    
    //Функція записує нові значення в state
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }); // name - це значення атрибута <input> (name i number)     
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onContactCreate(this.state); // передає об'єкт 1го контакта {name: _, number: _} до App.jsx 
        this.reset();
    }

    reset = () => {
        this.setState({ 
            name: '',
            number: '',
        });         
    };


    render() {
        const { handleFormSubmit, handleChange } = this;
        return (
            <Form onSubmit={handleFormSubmit}>
                <label>
                    Name
                        <input
                            type="text"
                            name="name"
                            value={this.state.name} // контрольований input (без цього reset не зробиш)
                            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={handleChange}
                        />
                </label>
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number} // контрольований input (без цього reset не зробиш)
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handleChange}
                    />
                </label>
                <button>Add contact</button>
            </Form>
        );
    }
}

ContactForm.propTypes = {
    onContactCreate: PropTypes.func.isRequired,
};