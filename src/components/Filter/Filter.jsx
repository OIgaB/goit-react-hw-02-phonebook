// фільтр пошуку

import { Component } from "react";                     // для класів
// import PropTypes from 'prop-types';
import { Contact } from "./styled";


export class Filter extends Component {       // для класів

    // handleChange = (event) => {
        // this.setState({
        //     []: event.target.elements.name.value,
        // })
    // }

    render() {
        const { contacts, filter } = this.props  // об'єкт

        return (
            <>
                <input 
                    type="name"
                    name="filter"
                    required
                    // onChange={this.handleChange}
                />
                <ul>
                    {contacts.filter(({ name }) => 
                        name.toLowerCase().includes(filter.toLowerCase())
                        ).map(({id, name, number}) => (
                            <Contact key={id}>{name} {number}</Contact>
                        ))
                    }
                </ul>
            </>
        );
    }
}