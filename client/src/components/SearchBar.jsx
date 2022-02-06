import React, { useState } from 'react';

export const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(term);
        setTerm("");
    }

    const handleChange = event => {
        setTerm(event.target.value);
    }

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <label htmlFor="movie-search">Movie Search</label>
                    <input onChange={handleChange} name='movie-search' type="text" value={term}/>
                </div>
            </form>
        </div>
    )
}