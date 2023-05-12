// Фільтр пошуку у списку контактів

import { Component } from "react";                     // для класів
// import { ContactList } from "../ContactList/ContactList";
// import PropTypes from 'prop-types';
// import { Contact } from "./styled";


export class Filter extends Component {       // для класів

    render() {
        const { filter, onChange } = this.props  // масив об'єктів
        return (
            <form>
                <label>
                    Find contacts by name
                    <input 
                        type="name"
                        name="filter"
                        value={filter}
                        required
                        onChange={ onChange }
                    />
                </label>
            </form>
        );
    }
}