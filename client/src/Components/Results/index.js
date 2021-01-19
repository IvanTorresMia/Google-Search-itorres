import React, { useState, useEffect } from 'react'
import './style.css'


function Results ( { data, saveBook } ) {
    const books = data;

    // So this is why we are getting the results to the log. 
    console.log(books)

    const [modal, setModal] = useState('modal hideModal');
    const [text, setText] = useState('Saved!');

function modalClose() {
    setModal('modal hideModal');
}
    
function saveModal(book) {
    setModal('modal showModal');
    setText(book.volumeInfo.title + 'has been saved!');
}
    
return (
    <>
      {books !== undefined ? books.map(book => {
        // console.log(book.volumeInfo.authors.length)

        return (

          <div key={book.id} className="container">
            <div className="card result">
              <div className="row mb-4 mt-3">
                <div className="col-lg-4 bookImg">
                  {book.volumeInfo.imageLinks ? <img className="img-fluid" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                  : <img src="./googlebookslogo.png" alt="title" className="img-fluid logo2" />}
                </div>
                <div className="col-lg-8">
                  <h2>{book.volumeInfo.title}</h2>
                  <p>{book.volumeInfo.authors !== undefined ? book.volumeInfo.authors.join(" & ")
                    : book.volumeInfo.authors}</p>
                  <p className="mr-4">{book.volumeInfo.description}</p>
                  <a className="btn btn-primary" target="_blank" href={book.volumeInfo.infoLink}>View</a>
                  <button className="ml-3 btn btn-primary" onClick={() => { saveBook(book) }, () => {saveModal(book)}}>Save</button>
                </div>
              </div>
            </div>

          </div>
        )
      }) :
        <div className="container mb-5">
          <div className="card result">
            <h2 className="p-5" >Sorry, we couldn't find any matching results.</h2>
          </div>
        </div>}
      {/* modal start */}
      <div className={modal} id="contactModal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body mt-2">
              <p>{text}</p>
            </div>
            <div className="modal-footer">
              <button onClick={() => modalClose()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;