// Фільтр пошуку у списку контактів

// import { Component } from "react";                     // для класів
import PropTypes from 'prop-types';
// import { Contact } from "./styled";


// export class Filter extends Component {       // для класів
//     render() {

export const Filter = ({ filter, onChange }) => { 
    return (
        <form>
            <label>
                Find contacts by name
                <input 
                    type="name"
                    name="filter"
                    value={filter}
                    required
                    onChange={onChange}
                />
            </label>
        </form>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};