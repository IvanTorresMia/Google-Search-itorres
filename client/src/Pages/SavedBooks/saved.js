import React, { useState, useEffect } from "react";
import savedBooks from '../../Components/SavedBooks'
import API from '../../Utils/API'

function Saved() {

    const [books, setBooks] = useState([])


    useEffect(() => {
API.getApiBooks().then(res => {
    setBooks(res.data)
})
    }, [books])

  return (
      <div>
          <savedBooks books={books} deleteBooks={deleteBooks} />
      </div>
  )
}

export default Saved;
