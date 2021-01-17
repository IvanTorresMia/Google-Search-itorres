import React, { useState } from 'react'
import SearchBar from '../../Components/SearchBar'
import Results from '../../Components/Results'


function Search() {
        // Global states for search, books, loading. 
        const [search, setSearch] = useState('');
        const [books, setBooks] = useState([]);
        const [loading, setLoading] = useState(true)
        


    function handleSearchChange(event) {
        const { value } = event.target;
        setSearch(value)
        console.log(value) //checking to see if we have any results at the moment.
    }

    return (
        <div>
            <SearchBar handleSearchChange={handleSearchChange}/>
            <Results />
        </div>
    )
}

export default Search;