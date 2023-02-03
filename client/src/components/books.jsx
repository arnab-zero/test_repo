import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState }  from "react";

const Books = ()=>{
    const [books, setBooks] = useState([]);     // initially books is an empty array

    useEffect(()=>{     // effect hook
        const fetchAllBooks = async()=>{
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
                //console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        fetchAllBooks();
    }, []);

    return(
        <div>
            <h1>shop</h1>
            <div className = "books">
                {books.map((book) => (
                    <div className="book" key = {book.id}>
                        {book.cover && <img scr = {book.cover} alt = ""/>}
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <span>{book.price}</span>
                    </div>
                ))}
            </div>
            <button><Link to = "/add">Add new book.</Link></button>
        </div>
    )
}

export default Books;