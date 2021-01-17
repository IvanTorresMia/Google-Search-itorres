import React, { useState } from 'react'
import SearchBar from '../../Components/SearchBar'
import Results from '../../Components/Results'
import API from '../../Utils/API'


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

    // Making API call to the google books API. 
    const searchBooks = async () => {
        let newBooks = await API.getBootks(search)
        .then(function(res) {
            setLoading(false);
            return res.data.items //data from the api. 
        })
        console.log('new books: ' + newBooks)
        setBooks(newBooks)
        setLoading(false)
    }

    function saveBook(book) {
        var image;
        // If the current book does not have an image then default to google png
        if (book.volumeInfo.imageLinks === undefined) {
            image = './googleLogo.png'
        } else {
            image = book.volumeInfo.imageLinks.thumbnail
        }
        
    }




    return (
        <div>
            <SearchBar handleSearchChange={handleSearchChange} searchBooks={searchBooks} />
            <Results data={books} saveBook={saveBook} />
        </div>
    )
}

export default Search;