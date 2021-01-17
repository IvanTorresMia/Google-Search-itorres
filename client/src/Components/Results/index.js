import React, { useState, useEffect } from 'react'
import './style.css'


function Results ( { data } ) {
    const books = data;

    // testing books
    console.log(books)

    const [modal, setModal] = useState('modal hideModal');
    const [text, setText] = useState('Saved!');


    
    
    return (
    <div>

    </div>
    )
}

export default Results;