import React from 'react'
import axios from 'axios'

 export default {
     getBootks: function(book) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
     }
 }

