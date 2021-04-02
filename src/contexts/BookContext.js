import React , {createContext, useState} from 'react';
import {v1 as uuid} from 'uuid';

export const BookContext = createContext();


const BookContextProvider = (props) =>{
    const [books,setBooks] = useState([
        {title: 'Lot widmo', author: 'Bear Grylls', id:1},
        {title: 'The Book Thief', author: 'Markus Zusak', id:2}
    ]);
    const addBook = (title,author) =>{
        setBooks([...books,{title, author, id: uuid()}])
    }
    const removeBook = (id) =>{
        setBooks(books.filter(book => book.id !== id))
    };
    return(
        <BookContex.Provider value={books,addBook,removeBook}>
            {props.children}
        </BookContex.Provider>
    )
}

export default BookContextProvider;