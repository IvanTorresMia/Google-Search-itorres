import axios from 'axios'

 export default {
     getBootks: function(book) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
     },
     getApiBooks: function() {
         return axios.get('/api/books');
     },
     addBook: function(data) {
         return axios.get('/api/books', data)
     },
     deleteBook: function(id) {
        return axios.get('/api/books' + id)
    },
    findBook: function(id) {
        return axios.get('/api/search')
    },
 }

