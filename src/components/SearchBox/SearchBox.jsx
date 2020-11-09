import React from 'react';
import classes from './SearchBox.module.css'

const SearchBox = props => (
    <input 
        className={classes.search} 
        type="search" 
        placeholder={props.placeholder} 
        onChange={props.handleChange}
    />
);

export default SearchBox;