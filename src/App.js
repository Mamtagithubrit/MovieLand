import {useEffect, useState} from 'react';
import MovieCard from './MovieCard.jsx';
import './app.css';
import SearchIcon from './search.svg';

const API_URL='http://www.omdbapi.com?apikey=948667da';

// const movie1={
//     "Title":"Amazing spiderman syndrome",
//     "Year":"2012",
//      "imdbID":"movie",
//      "Poster":"N/A"

// };



const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const searchMovies=async(title)=>{

        const response=await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
        

    };

    useEffect(()=>{

        searchMovies('hello');

    },[]);



        
        return (
            <div className="app">

                <h1>MovieLand</h1>
                <div className="search">

                    <input
                     placeholder="Search for movies"
                     value={searchTerm}
                     onChange={(e)=>setSearchTerm(e.target.value) }
                     />

                     <img
                     src={SearchIcon}
                     alt="search"
                     onClick={()=>searchMovies(searchTerm)}
                     />

                </div>

                {
                    movies?.length >0
                    ?
                    (
                        <div className="container">
                            {
                                movies.map((movie)=>(
                                    <MovieCard movie={movie}/>

                                ))

                            }
                            
                          
                       
                        </div> 

                    ):
                    (
                        <div className="emtpy">
                           <h2>Movie not found</h2>
                       
                        </div> 
                    )


                }

            </div>
            

        );

   
}
export default App;