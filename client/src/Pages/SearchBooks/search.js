import React, { useState } from 'react'
import SearchBar from '../../Components/SearchBar'
import Results from '../../Components/Results'


function Search() {

    return (
        <div>
            <SearchBar />
            <Results />
        </div>
    )
}

export default Search;