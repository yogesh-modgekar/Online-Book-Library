import { useState } from "react";
import Book from "./Book";
import axios from 'axios'

export function Home(){

  const [search, setSearch] = useState("");

  const [bookData, setBookData] = useState([]);

  const searchBook = ()=>{
      axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyC_JHBVyeOltaAO6tBrDjU8faD6VCU3bY0"+"&maxResults=40")
      .then(res => setBookData(res.data.items))
      .catch(err => console.log(err))
    
  }
    return(
      <>
        <div className="header">
          <div className="row2">
                <h2>Find your Book</h2>
                <div className="search">
                  <input type="text" placeholder="Enter your Book Name" value={search} onChange={e=>setSearch(e.target.value)} />
                  <button onClick={searchBook}><i className='bx bx-search-alt-2'></i></button>
                </div>
                <img src="background.png"/>
          </div>
        </div>
        <div className="container">
            {
              <Book book={bookData} />
            }
        </div>
      </>
    )
}

