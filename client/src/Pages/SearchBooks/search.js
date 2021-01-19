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

        // Oject for the book being saved. We will send this to the back end.
        const data = {
            title:book.volumeInfo.title,
            author:book.volumeInfo.authors,
            description:book.volumeInfo.description,
            image: image,
            link:book.volumeInfo.infoLink
        }
        
          //    Making the API call to the back end. 
          API.addBook(data).then(res=>{
            console.log("saved",res)
            
        });
    }




    return (
        <div>
            <SearchBar handleSearchChange={handleSearchChange} searchBooks={searchBooks} />
            <Results data={books} saveBook={saveBook} />
        </div>
    )
}

export default Search;