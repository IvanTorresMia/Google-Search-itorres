import React, { useState, useEffect } from "react";
import SavedBooks from '../../Components/SavedBooks'
import API from '../../Utils/API'

function Saved() {

    const [books, setBooks] = useState([])


    useEffect(() => {
API.getApiBooks().then(res => {
    setBooks(res.data)
})
    }, [books])

    function deleteBooks(id) {
API.deleteBooks(id).then(res => {
console.log(res);
})
    }

  return (
      <div>
          <SavedBooks books={books} deleteBooks={deleteBooks} />
      </div>
  )
}

export default Saved;
