// список контактів, елемент списку контактів

import { Component } from "react";                     // для класів
// import PropTypes from 'prop-types';
import { ListContainer, Contact } from "./styled";


export class ContactList extends Component {       // для класів

    render() {
        const { data } = this.props  // об'єкт
        console.log(data.contacts); // масив об'єктів

        return (
            <ListContainer>
                {data.contacts.map(({ id, name, number }) => (
                    <Contact key={id}>{name} {number}</Contact>
                ))}
            </ListContainer>
            // <Container>

            // </Container>
        );
    }
}