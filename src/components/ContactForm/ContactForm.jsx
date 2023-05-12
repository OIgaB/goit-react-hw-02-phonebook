// Форма додавання контактів. Це статична форма - не змінна (при відправці викликає ф-цію зміни state)

import { Component } from "react";                     // для класів
import PropTypes from 'prop-types';
// import { ButtonsList, Button } from "./styled";



export class ContactForm extends Component {       // для класів
    
    render() {
        const { onContactCreate } = this.props;
        return (
            <form onSubmit={onContactCreate}>
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

ContactForm.propTypes = {
    onContactCreate: PropTypes.func.isRequired,
};